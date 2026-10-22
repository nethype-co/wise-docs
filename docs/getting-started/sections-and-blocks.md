---
title: "How sections and blocks work in Wise"
sidebar_label: "Sections and blocks"
sidebar_position: 1
---

## How sections and blocks work in Wise

Wise uses Shopify's newest theme architecture, where a page is built from **sections** and each section is built from **blocks**. Knowing how the two fit together makes every section in the theme easier to set up.

{/* TODO: screenshot of the theme editor sidebar with a section expanded to show nested blocks */}

## Sections

A section is a full-width row of your page, for example **Image with text** or **Slideshow**. You add sections with **Add section** in the theme editor sidebar.

Section settings are kept short. They usually control only the things that apply to the whole row:

* **Make section full width:** Let the section span the full width of the screen.
* **Colors:** Background color, background gradient and text color for the section.
* **Section spacing:** Space above and below the section, with optional separate values for mobile.

Everything else, such as the image, the text and the buttons, lives in blocks.

## Blocks

Blocks are the building pieces inside a section. In the theme editor sidebar they appear nested under their section, and some blocks contain blocks of their own. You can click any block to open its settings.

Wise has three kinds of blocks:

* **Static blocks:** The fixed structure of a section, for example the **Header** block at the top of most sections or the **Image with text container**. They are always there, so you can edit them but not remove or move them.
* **Theme blocks:** Shared blocks such as [Heading](/blocks/heading), [Text](/blocks/text) and [Button](/blocks/button). They work the same way in every section and can be added, reordered, duplicated and removed. See [Blocks](/blocks) for the full list.
* **Section blocks:** Blocks made for one section only, for example a table row or a slide. They are documented in the article for that section.

## Adding a block

1. In the theme editor sidebar, expand the section and then the block you want to add content to.
2. Click **Add block**.
3. Pick a block from the list. The list only shows blocks that fit in that place.
4. Drag the block to change its position.

:::tip
If you do not see **Add block** under a block, that block does not accept other blocks. Try the block one level up.
:::

## Presets

Many sections come with more than one **preset**: a ready-made starting point with a different set of blocks. For example, the **Image with text** section can be added as *Image with text*, *Image with table* or *Image with collapsible menu*. Presets are only a starting point. After you add the section, you can add or remove blocks to change it in any way you like.
