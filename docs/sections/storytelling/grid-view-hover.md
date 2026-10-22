---
title: "Grid view with hover"
sidebar_label: "Grid view with hover"
description: "Show a text column next to a grid of tiles that change their image and text when the mouse moves over them."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Grid view with hover section?

<SectionMeta version="v1.0.0" />

The **Grid view with hover** section places a column of text next to a grid of image or video tiles. When a shopper moves the mouse over a tile, it changes: a second image fades in, a color layer covers the image and different text appears. Use it to present categories, collections or services with a short teaser on the tile and more detail on hover.

{/* TODO: desktop screenshot or video */}

You will find it under **Storytelling** in the **Add section** menu. It starts with a text column (subheading, heading, text and button) and four tiles. Each tile shows a heading, and its hover state shows a text.

This section is one of five grid sections with the same tile layout. Here, the tile **changes on mouse hover** and the section has a text column beside the grid instead of a heading above it. [Grid view](/sections/storytelling/grid-view) has plain tiles that can link to a page, [Grid view with drawer](/sections/storytelling/grid-view-drawer) opens a side drawer, [Grid view with modal](/sections/storytelling/grid-view-modal) opens a centered pop-up, and [Grid view with reveal](/sections/storytelling/grid-view-reveal) turns the card over on click.

## Section structure

When you expand the section in the theme editor sidebar, you will see two fixed blocks:

* **Text column:** The text next to the grid. It contains a subheading, a heading, a text and a button by default. If you remove all its blocks, the column is hidden and the grid takes the full width.
* **Grid:** The grid itself. It controls the layout, and the tiles (**Tile** blocks) go inside it.

Each **Tile** has its own fixed **Hover content** block, which sets what the tile shows on hover.

See [How sections and blocks work](/getting-started/sections-and-blocks) for more about fixed blocks and theme blocks.

## Section settings

* **Make section full width:** Enable this setting to make the section span the full width of the screen.

#### Desktop version

* **Text column width:** How much of the row the text column takes up (20 to 70%).
* **Text column position:** Show the text column on the left or the right of the grid.
* **Gap to grid:** Space between the text column and the grid (0 to 120 px).

#### Mobile version

On mobile, the text column and the grid are stacked.

* **Order:** Show the text first or the grid first (options: Text first, Grid first).
* **Gap to grid:** Space between the text and the grid (0 to 80 px).

#### Colors

* **Background color:** Set the background color of the section.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.
* **Text color:** Set the text color for the whole section.

#### Section spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Text column block

Click the **Text column** block to style the text next to the grid.

* **Text color:** Override the section text color for the text column.

#### Desktop version

* **Text alignment:** Align the text left, center or right.
* **Text vertical position:** Place the text at the top, center or bottom of the column, next to the grid.

#### Mobile version

* **Text alignment:** Align the text left, center or right on mobile.

You can add any theme block to the text column, such as [Subheading](/blocks/subheading), [Heading](/blocks/heading), [Text](/blocks/text) and [Button](/blocks/button).

## Grid block

Click the **Grid** block to set up the layout of the tiles.

* **Image ratio:** The shape of every tile (options: Adapt to image, Portrait, Square, Landscape, Custom).
* **Custom ratio width** and **Custom ratio height:** Set your own ratio, for example 3 and 2 for a 3:2 tile (1 to 16). Shown only when **Image ratio** is **Custom**.

#### Desktop version

* **Layout:** Show the tiles as a grid or as a slider (options: Grid, Slider).
* **Items per row:** How many tiles fit in one row (2 to 6).
* **Items alignment:** Align the tiles of a row that is not full (options: Left, Center). Shown only for the **Grid** layout.
* **Gap:** Space between the tiles (0 to 24 px).

#### Mobile version

* **Layout:** Show the tiles as a grid or as a slider (options: Grid, Slider).
* **Items per row:** How many tiles fit in one row (1 to 2). Use a decimal such as 1.1 to let the next tile peek in from the side of a slider.
* **Items alignment** and **Gap:** The same as on desktop (gap 0 to 24 px).

#### Slider behavior

* **Enable loop:** Let the slider start again from the first tile after the last one. It works on mobile only and is shown only when the mobile layout is **Slider**.

This grid has no slider dots.

## Tile block

Each **Tile** is one card in the grid. Click **Add block** under the **Grid** to add more tiles, and drag them to change the order.

* **Link:** Make the whole tile clickable. Pick a product, collection or page, or paste any URL.
* **Open link as a new window:** Open the link in a new browser tab. Shown only when a link is set.

#### Desktop version

* **Media type:** Show an image or a video (options: Image, Video).
* **Image** or **Video:** Upload the image, or select a video uploaded to Shopify.
* **Text vertical position:** Place the text at the top, center or bottom of the tile. **Space between** puts the first block at the top and the last block at the bottom.
* **Text alignment:** Align the text left, center or right.

#### Mobile version

* **Show different media on mobile:** Enable this setting to use a different image or video on mobile. When it is on, **Media type**, **Image** and **Video** appear for mobile.
* **Text vertical position** and **Text alignment:** Position and align the text on mobile.

#### Video behavior

These settings appear when the media type is set to **Video**.

* **Autoplay:** Start the video automatically, muted.
* **Show default video controls:** Show the browser's standard video controls.
* **Custom play/pause button** and **Custom mute/unmute button:** Show the theme's own buttons on top of the video. Available only when the default controls are off.

:::note
The default video controls do not respond on a tile with a **Link**, because a click opens the link. On a linked tile, use the custom play/pause and mute/unmute buttons instead.
:::

#### Optimization

* **Optimize loading if this is the first section on the page:** Load the image right away instead of when it scrolls into view. Turn it on for tiles that are visible as soon as the page opens.

#### Colors

* **Text color:** Override the text color on this tile.
* **Background color:** A color layer over the image or video. Use a semi-transparent color to darken the media so the text is easier to read.

#### Text background

* **Enable text background:** Show a box behind the text.
* **Text background color** and **Text background blur:** The color of the box and how much the image behind it is blurred (0 to 40 px). The blur shows only when the color has some transparency.

Click **Add block** under a **Tile** to add the text shown on the tile before hover. You can use any theme block, such as [Heading](/blocks/heading), [Text](/blocks/text) or [Button](/blocks/button).

## Hover content block

Every tile has a fixed **Hover content** block. It sets what the tile looks like when the mouse is over it, or when a keyboard user moves to the tile's link. While the hover state shows, the blocks inside **Hover content** replace the tile's own blocks.

* **Second image:** An image that fades in over the tile's image on hover.
* **Overlay color:** A color that covers the image in the hover state. Use the opacity slider in the color picker to choose how much of the image shows through. Leave it empty to keep the tile's own **Background color**.
* **Image blur:** Blur the image in the hover state (0 to 20 px).

Click **Add block** under **Hover content** to add the text shown on hover, for example a [Text](/blocks/text) block and a [Button](/blocks/button).

:::note
The hover state works on desktop with a mouse only. On touch screens and on screens narrower than 900 px, the hover content is not shown and each tile keeps its own blocks, so put the most important information on the tile itself.
:::

## Mobile view example

{/* TODO: mobile screenshot */}
