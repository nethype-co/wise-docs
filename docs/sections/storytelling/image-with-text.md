---
title: "Image with text"
sidebar_label: "Image with text"
description: "Show an image or video next to text, a table, a collapsible menu or a countdown timer."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Image with text section?

<SectionMeta version="v1.0.0" />

The **Image with text** section places an image or a video next to a column of content. Use it to tell your brand story, highlight a product feature or explain how something works. The content column is built from blocks, so you can combine headings, text and buttons with a table, a collapsible menu or a countdown timer.

![Image with text on desktop](/img/docs/sections/image-with-text-desktop.jpg)

The section is available in three presets, all found under **Storytelling** in the **Add section** menu:

* **Image with text:** Subheading, heading, text and button next to the image.
* **Image with table:** Heading, a three-row table and a button next to the image.
* **Image with collapsible menu:** Subheading, heading, three collapsible rows and a button next to the image.

All three presets use the same blocks, so you can turn one into another by adding or removing blocks.

## Section structure

When you expand the section in the theme editor sidebar, you will see two fixed blocks:

* **Header:** An optional heading area above the image and text. It contains a [Heading](/blocks/heading) block by default. Remove the heading if you do not need a section title.
* **Image with text container:** The image or video and the content column next to it. All of the section's content blocks go here.

See [How sections and blocks work](/getting-started/sections-and-blocks) for more about fixed blocks and theme blocks.

## Section settings

* **Make section full width:** Enable this setting to make the section span the full width of the screen.
* **Show section behind header:** Show the section behind a transparent header. This works only when the section is the first one on the page, right after the header. For the best result, turn on full width, leave the section heading and spacing empty and give the header a see-through background with a header color preset. See [Color presets and transparent header](/header-footer/header#color-presets-and-transparent-header).

#### Colors

* **Background color:** Set the background color of the section.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.
* **Text color:** Set the text color for the whole section.

#### Section spacing

* **Distance top (desktop):** Space above the section on desktop (0 to 100 px).
* **Distance bottom (desktop):** Space below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Header block

Click the **Header** block to style the heading area above the image and text.

* **Text alignment (desktop):** Align the heading on desktop (options: Left, Center, Right).
* **Text alignment (mobile):** Align the heading on mobile (options: Left, Center, Right).
* **Text container max width:** Limit the width of the heading area. Set it to 0 to use the default maximum width.
* **Text color:** Override the section text color for the heading area.

You can add any theme block to the Header, for example a [Subheading](/blocks/subheading) above the heading or a [Text](/blocks/text) block below it.

## Image with text container block

Click the **Image with text container** block to set up the image or video and the content column.

* **Layout:** Choose which side the image is on (options: Image first, Text first). On mobile, the image always appears first.
* **Image width (desktop):** Set how much of the row the image takes up on desktop (30 to 70%).
* **Text container max width:** Limit the width of the content column. Set it to 0 to use the default maximum width.

#### Section height

* **Height:** Choose **Adapt to media** to follow the height of your image or video, or **Fixed height** to set the height yourself.
* **Height (desktop)** and **Height (mobile):** Set the fixed height (200 to 1000 px). Shown only when **Fixed height** is selected.

#### Desktop version

* **Media type:** Show an image or a video.
* **Image** or **Video:** Upload the image, or select a video uploaded to Shopify.
* **Text vertical position:** Place the content at the top, center or bottom of the column.
* **Text alignment:** Align the content left, center or right.

#### Mobile version

* **Show different media on mobile:** Enable this setting to use a different image or video on mobile. When it is off, the desktop media is used on all devices.
* **Media type**, **Image** and **Video:** The mobile media. Shown only when the setting above is on.
* **Text vertical position** and **Text alignment:** Position and align the content on mobile.

#### Video URL

* **Video URL:** A YouTube or Vimeo link. It is used when **Media type** is set to **Video** and no Shopify video is selected.

#### Video behavior

These settings appear when the media type is set to **Video**.

* **Autoplay:** Start the video automatically, muted.
* **Show default video controls:** Show the browser's standard video controls.
* **Custom play/pause button** and **Custom mute/unmute button:** Show the theme's own buttons on top of the video. Available only when the default controls are off.

:::note
The custom play/pause and mute/unmute buttons only work with a video uploaded to Shopify, not with a YouTube or Vimeo link.
:::

#### Optimization

* **Optimize loading if this is the first section on the page:** Load the image right away instead of when it scrolls into view, which makes the page appear faster. This happens automatically when the section is the first one on the page, so you only need it when the section sits near the top below another small section.

#### Colors

* **Text color:** Override the text color of the content column.
* **Background color:** Set a background color behind the content column.

## Content blocks

Click **Add block** under the **Image with text container** to add content next to the image. You can use any theme block, such as [Subheading](/blocks/subheading), [Heading](/blocks/heading), [Text](/blocks/text), [Button](/blocks/button) or [Icon with text](/blocks/icon-with-text), and the three blocks below, which are made for this section.

### Table block

The **Table** block shows a simple two-column table, for example ingredients, materials or product specifications. Each row is a **Table row** block inside the table.

* **Make block full width:** Stretch the table to the full width of the content column.
* **Text alignment:** Align the table text on desktop (options: Left, Center, Right, Space between).
* **Row layout:** On mobile, show the two columns side by side (Row) or stacked (Column).
* **Text alignment (mobile):** Align the table text on mobile.

**Row colors.** Rows alternate between two colors down the table.

* **Odd row background** and **Even row background:** The two alternating row colors.
* **First row background:** Give the first row its own color, for example to use it as a table header. Leave it empty to keep the alternating color.
* **Use custom text color:** Enable this setting to set the text colors for odd, even and first rows. When it is off, rows use the text color of the section.

**Table borders.**

* **Row divider:** Draw a line below, above or above and below each row, or no line.
* **Row divider color** and **Row divider thickness:** Style the divider line (1 to 4 px). If the color is empty, the row text color is used.

**Table row block.** Click a row to edit it.

* **Left column:** The label, for example "Material".
* **Right column:** The value, for example "100% organic cotton". This field supports rich text.

### Collapsible row block

The **Collapsible row** block shows a title that opens to reveal more content when clicked. Add several rows to build an FAQ or a collapsible menu. The content inside a row is made of blocks: a [Text](/blocks/text) block by default, and you can add other theme blocks as well as Page content, Media, Feature icons list, Feature tags, File and Table blocks.

* **Open by default:** Show the row open when the page loads.

**Title.**

* **Title font:** Use the body, heading or subheading font for the title.
* **Title:** The text shown on the row.
* **Text scale (desktop)** and **Text scale (mobile):** Make the title smaller or larger (50 to 300%).

**Icon.**

* **Image:** Upload your own icon image.
* **Icon:** Or pick an icon from the theme's icon set.
* **Icon advanced settings:** Enable this setting to adjust the icon height and top margin separately for desktop and mobile.

**Colors.** **Text color**, **Background color** and **Line color** of the row.

**Visibility.**

* **Hide if content is empty:** Hide the whole row when there is nothing inside it, for example when a block is connected to a product metafield that is empty.

**Block spacing.** Space above and below the row, with optional separate values for mobile.

### Countdown timer block

The **Countdown timer** block counts down to a date and time. Use it for sales, launches and limited offers.

* **End date and time:** The date and time the countdown ends, in the format `YYYY-MM-DD HH:MM`. The time is read in each shopper's own time zone, so a shopper in another country sees the countdown end at their local time.
* **Expired message:** The text shown once the countdown has ended.
* **Style:** Show the timer in a large headline style or in the body text style.
* **Show labels below the timer:** Place the days, hours, minutes and seconds labels below the numbers.
* **Show d/h/m/s labels:** Show or hide the labels.
* **Timer scale (desktop)** and **Timer scale (mobile):** Make the timer smaller or larger.
* **Set custom item width:** Set the width of each counter item yourself, separately for desktop and mobile. Available only when labels are shown below the timer.

## Mobile view example

<div style={{display: "flex", justifyContent: "center", marginBottom: "20px"}}>
  <img src="/img/docs/sections/image-with-text-mobile.jpg" alt="Image with text on mobile" style={{maxWidth: "320px", borderRadius: "8px"}} />
</div>
