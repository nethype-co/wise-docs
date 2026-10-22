---
title: "Grid view with modal"
sidebar_label: "Grid view with modal"
description: "Show a grid of image tiles where each tile opens a centered pop-up with more content."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Grid view with modal section?

<SectionMeta version="v1.0.0" />

The **Grid view with modal** section shows a row of image or video tiles. Each tile has a round button in its corner that opens a pop-up (modal) in the middle of the screen with more content: images, videos, text or the content of a store page. Use it for lookbooks, team members, recipes or anything that needs a closer look without leaving the page.

{/* TODO: desktop screenshot or video */}

You will find it under **Storytelling** in the **Add section** menu. It starts with a heading and three tiles. Each tile has a heading and a text, and its modal holds a media block and a text.

This section is one of five grid sections with the same tile layout. Here, each tile opens a **centered pop-up**. [Grid view](/sections/storytelling/grid-view) has plain tiles that can link to a page, [Grid view with drawer](/sections/storytelling/grid-view-drawer) opens a drawer from the side instead, [Grid view with hover](/sections/storytelling/grid-view-hover) changes the tile when the mouse moves over it, and [Grid view with reveal](/sections/storytelling/grid-view-reveal) turns the card over to a second side.

## Section structure

When you expand the section in the theme editor sidebar, you will see two fixed blocks:

* **Header:** An optional heading area above the grid. It contains a [Heading](/blocks/heading) block by default.
* **Grid:** The grid itself. It controls the layout, and the tiles (**Tile** blocks) go inside it.

Each **Tile** has its own fixed **Modal** block, which holds the content shown in the pop-up.

See [How sections and blocks work](/getting-started/sections-and-blocks) for more about fixed blocks and theme blocks.

## Section settings

* **Make section full width:** Enable this setting to make the section span the full width of the screen. In full width, the tiles touch each other: the gap between them is removed.

#### Colors

* **Background color:** Set the background color of the section.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.
* **Text color:** Set the text color for the whole section.

#### Modal

* **Modal width:** The maximum width of the pop-up (480 to 960 px). On smaller screens it shrinks to fit, with a small margin on each side.
* **Modal animation:** How the pop-up appears (options: Fade and rise, Slide up).

#### Section spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Header block

Click the **Header** block to style the heading area above the grid.

* **Text alignment (desktop)** and **Text alignment (mobile):** Align the heading (options: Left, Center, Right).
* **Text container max width:** Limit the width of the heading area (0 to 1600 px). Set it to 0 to use the default maximum width.
* **Text color:** Override the section text color for the heading area.

You can add any theme block to the Header, for example a [Subheading](/blocks/subheading) or a [Text](/blocks/text) block.

## Grid block

Click the **Grid** block to set up the layout of the tiles.

* **Image ratio:** The shape of every tile (options: Adapt to image, Portrait, Square, Landscape, Custom).
* **Custom ratio width** and **Custom ratio height:** Set your own ratio, for example 3 and 2 for a 3:2 tile (1 to 16). Shown only when **Image ratio** is **Custom**.

#### Desktop version

* **Layout:** Show the tiles as a grid or as a slider (options: Grid, Slider).
* **Items per row:** How many tiles fit in one row (2 to 6).
* **Items alignment:** Align the tiles of a row that is not full (options: Left, Center). Shown only for the **Grid** layout.
* **Gap:** Space between the tiles (0 to 24 px). Hidden when the section is full width.

#### Mobile version

* **Layout:** Show the tiles as a grid or as a slider (options: Grid, Slider).
* **Items per row:** How many tiles fit in one row (1 to 2). Use a decimal such as 1.1 to let the next tile peek in from the side of a slider.
* **Items alignment** and **Gap:** The same as on desktop (gap 0 to 16 px).

#### Slider behavior

* **Enable loop:** Let the slider start again from the first tile after the last one. Shown only when a layout is set to **Slider**.

#### Pagination

These settings appear when a layout is set to **Slider**.

* **Custom dots:** Enable this setting to set the colors of the slider dots for this section. When it is off, the dots use [Theme settings → Sliders](/theme-settings/sliders).
* **Dot background color**, **Dot background blur**, **Active dot color** and **Inactive dot color:** Style the dots (blur 0 to 20 px). Shown only when **Custom dots** is on.

## Tile block

Each **Tile** is one card in the grid. Click **Add block** under the **Grid** to add more tiles, and drag them to change the order.

* **Text container max width:** Limit the width of the text on the tile (0 to 800 px). Set it to 0 to use the default maximum width.

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
* **Custom play/pause button** and **Custom mute/unmute button:** Show the theme's own buttons on top of the video. The tile has no default browser video controls, because they would sit under the modal button.

#### Optimization

* **Optimize loading if this is the first section on the page:** Load the image right away instead of when it scrolls into view. Turn it on for tiles that are visible as soon as the page opens.

#### Colors

* **Text color:** Override the text color on this tile.
* **Background color:** A color layer over the image or video. Use a semi-transparent color to darken the media so the text is easier to read.

#### Text background

* **Enable text background:** Show a box behind the text.
* **Text background color** and **Text background blur:** The color of the box and how much the image behind it is blurred (0 to 40 px). The blur shows only when the color has some transparency.

Click **Add block** under a **Tile** to add the text shown on the tile. You can use any theme block, such as [Subheading](/blocks/subheading), [Heading](/blocks/heading), [Text](/blocks/text) or [Button](/blocks/button).

## Modal block

Every tile has a fixed **Modal** block. It draws the round button in the corner of the tile, and holds the content of the pop-up that the button opens. Only the button opens the pop-up: a click elsewhere on the tile does nothing.

* **Modal heading:** The title at the top of the pop-up.
* **Content alignment:** Align the pop-up content left, center or right.

#### Button

* **Button style:** The colors of the round button (options: Primary, Secondary).
* **Icon:** The icon on the button (options: Plus, Arrow right).
* **Vertical position** and **Horizontal position:** The corner of the tile the button sits in (options: Top or Bottom, Left or Right).
* **Icon color** and **Background color:** Override the icon and background colors of the button style. Leave them empty to keep the button style's colors.
* **Background blur:** Blur the image behind the button (0 to 20 px). It shows only when the background color has some transparency. Set it to 0 to keep the button style's own blur.

:::note
If you remove every block from a Modal, the pop-up shows a short default paragraph, so it never opens empty.
:::

### Modal content blocks

Click **Add block** under the **Modal** to build the pop-up content. You can use any theme block, such as [Heading](/blocks/heading), [Text](/blocks/text) or [Button](/blocks/button), and the two blocks below.

**Media.** An image or a video inside the pop-up. A video plays muted and on a loop while the pop-up is open.

* **Media type:** Show an image or a video (options: Image, Video).
* **Image** or **Video:** Upload the image, or select a video uploaded to Shopify.
* **Custom play/pause button** and **Custom mute/unmute button:** Show the theme's own video buttons. Shown only for a video.
* **Height:** Choose **Adapt to media** to follow the height of the image or video, or **Fixed height** to set it yourself.
* **Height (desktop)** and **Height (mobile):** The fixed height (200 to 1000 px). Shown only when **Fixed height** is selected.

**Page content.** Shows the content of one of your store pages inside the pop-up, so you can reuse text you already keep in **Online Store → Pages**.

* **Page:** The page to show. Nothing is shown on the storefront until you pick a page.

## Mobile view example

{/* TODO: mobile screenshot */}
