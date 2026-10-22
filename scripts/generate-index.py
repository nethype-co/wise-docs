#!/usr/bin/env python3
"""Regenerates docs/index.md (welcome page) and static/llms.txt from article frontmatter.

Usage: python3 scripts/generate-index.py
"""

import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS = os.path.join(ROOT, "docs")
SITE = "https://support.wise-theme.com"

GROUPS = [
    ("Getting Started", "getting-started"),
    ("About the theme", "getting-started/about-theme"),
    ("Theme Settings", "theme-settings"),
    ("Sections: Storytelling", "sections/storytelling"),
    ("Sections: Banners", "sections/banners"),
    ("Sections: Collections and products", "sections/collections"),
    ("Sections: Testimonials", "sections/testimonials"),
    ("Sections: Text", "sections/text"),
    ("Sections: Forms", "sections/forms"),
    ("Sections: Blog", "sections/blog"),
    ("Sections: Other", "sections/other"),
    ("Header, footer and popups", "header-footer"),
    ("Product page", "product-page"),
    ("Product page blocks", "product-page/blocks"),
    ("Pages and templates", "pages"),
    ("Blocks", "blocks"),
    ("Guides", "guides"),
]


def frontmatter(path):
    text = open(path, encoding="utf-8").read()
    match = re.match(r"---\n(.*?)\n---", text, re.S)
    data = {}
    for line in match.group(1).splitlines():
        key, _, value = line.partition(":")
        data[key.strip()] = value.strip().strip('"')
    return data


def url(path):
    data = frontmatter(path)
    if "slug" in data:
        return data["slug"]
    rel = os.path.relpath(path, DOCS)[:-3]
    return "/" + (rel[: -len("/index")] if rel.endswith("/index") else rel)


def articles(folder):
    out = []
    directory = os.path.join(DOCS, folder)
    for name in os.listdir(directory):
        path = os.path.join(directory, name)
        if name.endswith(".md") and name != "index.md":
            data = frontmatter(path)
            out.append((
                int(data.get("sidebar_position", 99)),
                data.get("sidebar_label") or data["title"],
                url(path),
                data.get("description", ""),
            ))
    return sorted(out, key=lambda a: (a[0], a[1].lower()))


index = [
    "---",
    'title: "Wise Theme Documentation"',
    'sidebar_label: "Welcome"',
    "sidebar_position: 0",
    "slug: /",
    "---",
    "",
    '<div className="welcome-index">',
    "",
    "# Wise Theme Documentation",
    "",
    "Guides and references for the Wise Shopify theme: theme settings, sections, the product page and the shared theme blocks. "
    "New to Wise? Start with [How sections and blocks work](/getting-started/sections-and-blocks).",
    "",
    "{/* TODO: preset cards for Wise and Monsoon (see wonder-docs .preset-grid) once preset images are ready */}",
    "",
]
llms = [
    "# Wise Theme Documentation",
    "",
    "> Wise is a Shopify theme by Nethype, built on Shopify's block-first theme architecture. This is the official "
    "documentation covering theme settings, sections, the product page, theme blocks and how-to guides. Applies to Wise Theme v1.0+.",
    "",
]

total = 0
for name, folder in GROUPS:
    items = articles(folder)
    total += len(items)
    index += ["---", "", f"## [{name}]({url(os.path.join(DOCS, folder, 'index.md'))})", ""]
    index += [f"- [{title}]({link})" for _, title, link, _ in items] + [""]
    llms += [f"## {name}", ""]
    llms += [f"- [{title}]({SITE}{link}): {desc}" for _, title, link, desc in items] + [""]

index += ["</div>", ""]
llms += ["## Full documentation", "", f"- [llms-full.txt]({SITE}/llms-full.txt): All articles in a single file", ""]

open(os.path.join(DOCS, "index.md"), "w", encoding="utf-8").write("\n".join(index))
open(os.path.join(ROOT, "static", "llms.txt"), "w", encoding="utf-8").write("\n".join(llms))
print(f"Indexed {total} articles")
