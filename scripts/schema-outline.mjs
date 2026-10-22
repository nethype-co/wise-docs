#!/usr/bin/env node

/**
 * Prints a readable outline of a Wise section or block schema, with every
 * `t:` key resolved to its English label. Used as the source for drafting
 * documentation articles.
 *
 * Usage:
 *   node scripts/schema-outline.mjs <theme-dir> sections/image-with-text
 *   node scripts/schema-outline.mjs <theme-dir> blocks/button
 *   node scripts/schema-outline.mjs <theme-dir> sections/image-with-text --deep
 *
 * --deep also outlines every private (_-prefixed) block used by the section.
 */

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const [themeDir, target, ...flags] = process.argv.slice(2);
if (!themeDir || !target) {
  console.error("Usage: node scripts/schema-outline.mjs <theme-dir> <sections/name|blocks/name> [--deep]");
  process.exit(1);
}
const deep = flags.includes("--deep");

const locale = JSON.parse(readFileSync(join(themeDir, "locales/en.default.schema.json"), "utf8"));

function t(value) {
  if (typeof value !== "string" || !value.startsWith("t:")) return value;
  const resolved = value
    .slice(2)
    .split(".")
    .reduce((node, key) => (node && typeof node === "object" ? node[key] : undefined), locale);
  return typeof resolved === "string" ? resolved : `[missing ${value}]`;
}

function readSchema(relPath) {
  const file = join(themeDir, `${relPath}.liquid`);
  if (!existsSync(file)) return null;
  const source = readFileSync(file, "utf8");
  const match = source.match(/{%-?\s*schema\s*-?%}([\s\S]*?){%-?\s*endschema\s*-?%}/);
  if (!match) return null;
  return JSON.parse(match[1].replace(/,(\s*[}\]])/g, "$1"));
}

function describeSetting(s) {
  const parts = [`**${t(s.label) ?? s.id}**`, `\`${s.type}\``, `id: \`${s.id}\``];
  if (s.options) parts.push(`options: ${s.options.map((o) => `${t(o.label)} (\`${o.value}\`)`).join(", ")}`);
  if (s.min !== undefined) parts.push(`range: ${s.min}–${s.max}${s.unit ?? ""} step ${s.step ?? 1}`);
  if (s.default !== undefined) parts.push(`default: ${JSON.stringify(s.default)}`);
  if (s.visible_if) parts.push(`visible_if: \`${s.visible_if}\``);
  let line = `- ${parts.join(" · ")}`;
  if (s.info) line += `\n  - info: ${t(s.info)}`;
  return line;
}

function outlineSettings(settings = []) {
  const lines = [];
  for (const s of settings) {
    if (s.type === "header") {
      lines.push(`\n#### ${t(s.content)}${t(s.info) ? `\n_${t(s.info)}_` : ""}`);
    } else if (s.type === "paragraph") {
      lines.push(`\n> ${t(s.content)}`);
    } else {
      lines.push(describeSetting(s));
    }
  }
  return lines.join("\n");
}

function presetTree(blocks, depth = 0) {
  if (!blocks) return [];
  const list = Array.isArray(blocks) ? blocks : Object.entries(blocks).map(([id, b]) => ({ id, ...b }));
  return list.flatMap((b) => [
    `${"  ".repeat(depth)}- \`${b.type}\`${b.static ? " (static)" : ""}${b.id ? ` id=${b.id}` : ""}`,
    ...presetTree(b.blocks, depth + 1),
  ]);
}

function collectTypes(blocks, into = new Set()) {
  if (!blocks) return into;
  const list = Array.isArray(blocks) ? blocks : Object.values(blocks);
  for (const b of list) {
    into.add(b.type);
    collectTypes(b.blocks, into);
  }
  return into;
}

function usedBy(blockType) {
  const users = [];
  for (const dir of ["sections", "blocks"]) {
    for (const file of readdirSync(join(themeDir, dir)).filter((f) => f.endsWith(".liquid"))) {
      const name = file.replace(/\.liquid$/, "");
      const schema = readSchema(`${dir}/${name}`);
      if (!schema) continue;
      const accepts = (schema.blocks ?? []).some((b) => b.type === blockType || (b.type === "@theme" && !blockType.startsWith("_")));
      const presets = (schema.presets ?? []).some((p) => collectTypes(p.blocks).has(blockType));
      if (accepts || presets) users.push(`${dir}/${name}${accepts ? "" : " (preset only)"}`);
    }
  }
  return users;
}

function outline(relPath, level = 2) {
  const schema = readSchema(relPath);
  if (!schema) return `${"#".repeat(level)} ${relPath}\n\n_No schema found._\n`;
  const h = "#".repeat(level);
  const out = [`${h} ${t(schema.name)} (\`${relPath}\`)`];
  if (schema.class) out.push(`class: \`${schema.class}\``);
  if (schema.blocks) out.push(`\n**Accepts blocks:** ${schema.blocks.map((b) => `\`${b.type}\``).join(", ")}`);
  out.push(`\n${h}# Settings\n${outlineSettings(schema.settings) || "_none_"}`);

  if (schema.presets?.length) {
    out.push(`\n${h}# Presets`);
    for (const p of schema.presets) {
      out.push(`\n**${t(p.name)}**${p.category ? ` · category: ${t(p.category)}` : ""}`);
      const tree = presetTree(p.blocks);
      if (tree.length) out.push(tree.join("\n"));
    }
  }

  if (level === 2 && relPath.startsWith("blocks/")) {
    const type = relPath.slice("blocks/".length);
    const users = usedBy(type);
    out.push(`\n${h}# Used by\n${users.map((u) => `- ${u}`).join("\n") || "_nothing_"}`);
  }

  return out.join("\n");
}

const result = [outline(target)];

if (deep) {
  const schema = readSchema(target);
  const types = new Set();
  for (const b of schema?.blocks ?? []) types.add(b.type);
  for (const p of schema?.presets ?? []) collectTypes(p.blocks, types);
  const seen = new Set();
  const queue = [...types].filter((type) => type.startsWith("_"));
  while (queue.length) {
    const type = queue.shift();
    if (seen.has(type)) continue;
    seen.add(type);
    const child = readSchema(`blocks/${type}`);
    for (const b of child?.blocks ?? []) if (b.type.startsWith("_")) queue.push(b.type);
    for (const p of child?.presets ?? []) for (const c of collectTypes(p.blocks)) if (c.startsWith("_")) queue.push(c);
    result.push(outline(`blocks/${type}`, 3));
  }
}

console.log(result.join("\n\n---\n\n"));
