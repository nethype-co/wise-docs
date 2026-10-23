---
title: "Grid view"
sidebar_label: "Grid view"
description: "Show a grid or slider of image and video tiles with text, buttons and optional links."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Grid view section?

<SectionMeta version="v1.0.0" />

The **Grid view** section shows a row of tiles, each with an image or a video and text on top. Use it to link to collections, highlight product categories or present a few key messages side by side. On desktop and on mobile you can show the tiles as a grid or as a slider.

![Grid view on desktop](/img/docs/sections/grid-view-desktop.jpg)

You will find it under **Storytelling** in the **Add section** menu. It starts with a heading and three tiles, each with a subheading, a heading and a button.

Wise has five grid sections that share the same tile layout. **Grid view** is the plain one, where the text sits on the tile and the whole tile can link to a page. The others add an interaction: [Grid view with drawer](/sections/storytelling/grid-view-drawer) opens a side drawer, [Grid view with modal](/sections/storytelling/grid-view-modal) opens a centered pop-up, [Grid view with hover](/sections/storytelling/grid-view-hover) changes the tile when the mouse moves over it, and [Grid view with reveal](/sections/storytelling/grid-view-reveal) turns the card over to a second side.

## Section structure

When you expand the section in the theme editor sidebar, you will see two fixed blocks:

* **Header:** An optional heading area above the grid. It contains a [Heading](/blocks/heading) block by default. Remove the heading if you do not need a section title.
* **Grid view container:** The grid itself. It controls the layout, and the tiles (**Grid item** blocks) go inside it.

See [How sections and blocks work](/getting-started/sections-and-blocks) for more about fixed blocks and theme blocks.

## Section settings

* **Make section full width:** Enable this setting to make the section span the full width of the screen. In full width, the tiles touch each other: the gap between them is removed.

#### Colors

* **Background color:** Set the background color of the section.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.
* **Text color:** Set the text color for the whole section.

#### Section spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Header block

Click the **Header** block to style the heading area above the grid.

* **Text alignment (desktop)** and **Text alignment (mobile):** Align the heading (options: Left, Center, Right).
* **Text container max width:** Limit the width of the heading area (0 to 1600 px). Set it to 0 to use the default maximum width.
* **Text color:** Override the section text color for the heading area.

You can add any theme block to the Header, for example a [Subheading](/blocks/subheading) or a [Text](/blocks/text) block.

## Grid view container block

Click the **Grid view container** block to set up the layout of the tiles.

* **Image ratio:** The shape of every tile (options: Adapt to image, Portrait, Square, Landscape, Custom).
* **Custom ratio width** and **Custom ratio height:** Set your own ratio, for example 3 and 2 for a 3:2 tile (1 to 16). Shown only when **Image ratio** is **Custom**.

#### Desktop version

* **Layout:** Show the tiles as a grid or as a slider (options: Grid, Slider).
* **Items per row:** How many tiles fit in one row (2 to 6).
* **Items alignment:** Align the tiles of a row that is not full, for example when you have fewer tiles than **Items per row** (options: Left, Center). Shown only for the **Grid** layout.
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

## Grid item block

Each **Grid item** is one tile. Click **Add block** under the **Grid view container** to add more tiles, and drag them to change the order.

* **Link:** Make the whole tile clickable. Pick a product, collection or page, or paste any URL.
* **Open link as a new window:** Open the link in a new browser tab. Shown only when a link is set.
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

### Content of a tile

Click **Add block** under a **Grid item** to add content to the tile. You can use any theme block, such as [Subheading](/blocks/subheading), [Heading](/blocks/heading), [Text](/blocks/text), [Button](/blocks/button) or [Icon with text](/blocks/icon-with-text), and the **Countdown timer** block.

The **Countdown timer** counts down to a date and time, for example the end of a sale.

* **End date and time:** The date and time the countdown ends, in the format `YYYY-MM-DD HH:MM`.
* **Expired message:** The text shown once the countdown has ended.
* **Style:** Show the timer in a large headline style or in the body text style.
* **Show labels below the timer** and **Show d/h/m/s labels:** Place the days, hours, minutes and seconds labels below the numbers, or hide them.
* **Timer scale (desktop)** and **Timer scale (mobile):** Make the timer smaller or larger (50 to 500% on desktop, 50 to 300% on mobile).
* **Set custom item width:** Set the width of each counter item yourself, separately for desktop (30 to 80 px) and mobile (20 to 80 px). Available only when labels are shown below the timer.

## Mobile view example

<div style={{display: "flex", justifyContent: "center", marginBottom: "20px"}}>
  <img src="/img/docs/sections/grid-view-mobile.jpg" alt="Grid view on mobile" style={{maxWidth: "320px", borderRadius: "8px"}} />
</div>
