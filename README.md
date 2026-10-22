# Wise Theme Docs

Documentation for the Wise Shopify theme, served at https://support.wise-theme.com. Built with [Docusaurus](https://docusaurus.io/) and deployed to GitHub Pages on every push to `main`.

## Local development

```bash
npm ci
npm start        # dev server with live reload
npm run build    # production build (also regenerates static/llms-full.txt)
npm run serve    # serve the production build
```

## Structure

- `docs/getting-started`: basics, including how sections and blocks work
- `docs/theme-settings`: one article per group in **Theme settings**
- `docs/sections/<group>`: one article per section, grouped like the theme editor's **Add section** menu
- `docs/header-footer`: header, footer, announcement bar and the Drawers & Popups group
- `docs/product-page`: the Product information section and one article per product page block
- `docs/pages`: sections used by page templates (cart, collection, search, blog, article, ...)
- `docs/blocks`: shared theme blocks (heading, text, button, ...), documented once and linked from section articles

`docs/index.md` and `static/llms.txt` list every article. Regenerate them with `python3 scripts/generate-index.py` after adding articles.

Section articles cover the section settings, its static blocks and its private (`_`-prefixed) blocks. Shared theme blocks are only linked.

## Drafting articles from the theme schema

`scripts/schema-outline.mjs` prints a section or block schema as a readable outline, with every `t:` key resolved to its English label:

```bash
node scripts/schema-outline.mjs ../../wise-theme sections/image-with-text --deep
node scripts/schema-outline.mjs ../../wise-theme blocks/button
```

`--deep` also outlines every private block the section uses. For blocks, the outline lists the sections and blocks that use them. Always read the theme from the `main` branch.

## Writing rules

- Never use an em dash or an en dash as punctuation. Use a comma, a colon, a full stop or brackets.
- Use the labels exactly as the theme editor shows them, in bold.
- Start every article with `<SectionMeta version="vX.Y.Z" />` (add `availability="Theme block"` for theme blocks).
