---
title: "Collage"
sidebar_label: "Collage"
description: "Show one large and two small image or video tiles with text on top."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Collage section?

<SectionMeta version="v1.0.0" />

The **Collage** section arranges image or video tiles in an editorial layout: one large tile next to two smaller tiles stacked on top of each other. Each tile can carry its own text and button on top of the media, and can link to a page. Use it to feature collections, campaigns or a new arrival.

{/* TODO: desktop screenshot or video */}

The section is found under **Storytelling** in the **Add section** menu. It starts with a heading and three tiles, each with a heading, text and button.

## Section structure

When you expand the section in the theme editor sidebar, you will see two fixed blocks:

* **Header:** An optional heading area above the collage. It contains a [Heading](/blocks/heading) block by default.
* **Collage container:** The layout of the tiles. You add, remove and reorder the **Grid item** blocks here.

The first tile is always the large one. The second and third tiles are the small ones. If you add a fourth tile or more, they continue below the collage as a regular grid of small tiles.

See [How sections and blocks work](/getting-started/sections-and-blocks) for more about fixed blocks.

## Section settings

* **Make section full width:** Enable this setting to make the collage span the full width of the screen. In full width, the tiles touch each other with no gap.

#### Colors

* **Background color:** Set the background color of the section.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.
* **Text color:** Set the text color for the whole section.

#### Section spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Header block

Click the **Header** block to style the heading area above the collage.

* **Text alignment (desktop)** and **Text alignment (mobile):** Align the heading (options: Left, Center, Right).
* **Text container max width:** Limit the width of the heading area. Set it to 0 to use the default maximum width.
* **Text color:** Override the section text color for the heading area.

## Collage container block

Click the **Collage container** block to set up the layout.

* **Large image position:** Place the large tile on the left or the right. On smaller screens, the large tile always comes first, except when it is set to the right, where the small tiles come first.
* **Columns (desktop):** Choose 2 or 3 columns. With 2 columns the large tile takes half of the width, with 3 it takes two thirds.
* **Height (desktop):** Choose **Fixed height** to set the collage height yourself, or **Adapt to large image** to let the large tile keep its proportions and set the height of the whole collage.
* **Fixed height (desktop):** The collage height as a share of the screen width (30 to 70%). Shown only when **Fixed height** is selected. On very wide screens the height grows in steps instead of with the screen width.
* **Gap (desktop)** and **Gap (mobile):** The space between tiles (0 to 24 px on desktop, 0 to 16 px on mobile). Hidden when the section is set to full width, because full-width tiles have no gap.

## Grid item block

Each tile is a **Grid item** block. The text sits on top of the image or video.

* **Link:** Optional. Makes the whole tile clickable. On a linked tile, the default video controls do not respond, so use the custom play/pause and mute/unmute buttons instead.
* **Open link as a new window:** Open the link in a new browser tab. Shown only when a link is set.
* **Text container max width:** Limit the width of the text on the tile (0 to 800 px). Set it to 0 to use the default maximum width.

#### Desktop version

* **Media type:** Show an image or a video.
* **Image** or **Video:** Upload the image, or select a video uploaded to Shopify.
* **Text vertical position:** Place the text at the top, center or bottom of the tile, or choose **Space between** to spread the blocks from top to bottom.
* **Text alignment:** Align the text left, center or right.

#### Mobile version

* **Show different media on mobile:** Enable this setting to use a different image or video on mobile. When it is off, the desktop media is used on all devices.
* **Media type**, **Image** and **Video:** The mobile media. Shown only when the setting above is on.
* **Text vertical position** and **Text alignment:** Position and align the text on mobile.

#### Video behavior

These settings appear when the media type is set to **Video**.

* **Autoplay:** Start the video automatically, muted.
* **Show default video controls:** Show the browser's standard video controls.
* **Custom play/pause button** and **Custom mute/unmute button:** Show the theme's own buttons on top of the video. Available only when the default controls are off.

:::note
The custom play/pause and mute/unmute buttons only work with a video uploaded to Shopify.
:::

#### Optimization

* **Optimize loading if this is the first section on the page:** Load the media right away instead of when it scrolls into view. Turn it on for the tiles that are visible as soon as the page opens, when the collage is at the top of the page.

#### Colors

* **Text color:** Override the text color of the tile.
* **Background color:** A color laid over the image or video. Use a semi-transparent color to darken the media and make the text easier to read.

#### Text background

* **Enable text background:** Show a colored strip behind the text. When it is on, the settings below appear.
* **Text background color:** The color of the strip.
* **Text background blur:** Blur the media behind the strip (0 to 40 px). Use it with a semi-transparent color for a frosted glass look.

#### Content of a tile

Click **Add block** under a **Grid item** to add content to the tile. You can use any theme block, such as [Subheading](/blocks/subheading), [Heading](/blocks/heading), [Text](/blocks/text) or [Button](/blocks/button), and the **Countdown timer** block.

The **Countdown timer** block counts down to a date and time, for example the end of a sale. Set the **End date and time** in the format `YYYY-MM-DD HH:MM`, an **Expired message**, the **Style** and the timer scale. See the [Image with text](/sections/storytelling/image-with-text#countdown-timer-block) article for every setting.

## Mobile view example

{/* TODO: mobile screenshot */}
