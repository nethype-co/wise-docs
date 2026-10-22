---
title: "Image with video"
sidebar_label: "Image with video"
description: "Show an image and a video side by side, with your text placed on one of them."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Image with video section?

<SectionMeta version="v1.0.0" />

The **Image with video** section shows an image and a video next to each other in one frame, with your heading, text and buttons on top of one of them. Use it for a campaign banner that combines a strong photo with a product video or a short film.

{/* TODO: desktop screenshot or video */}

You will find the section under **Banners** in the **Add section** menu. It starts with a heading, a text and a button placed on the image.

## Section structure

When you expand the section in the theme editor sidebar, you will see two fixed blocks:

* **Header:** An optional heading area above the image and video. It contains a [Heading](/blocks/heading) block by default. Remove the heading if you do not need a section title.
* **Image and video:** The image, the video and the content placed on top of them. All of the section's content blocks go here.

See [How sections and blocks work](/getting-started/sections-and-blocks) for more about fixed blocks and theme blocks.

## Section settings

* **Make section full width:** Enable this setting to make the section span the full width of the screen.

#### Colors

* **Background color:** Set the background color of the section.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.
* **Text color:** Set the text color for the whole section.

#### Section spacing

* **Distance top (desktop):** Space above the section on desktop (0 to 100 px).
* **Distance bottom (desktop):** Space below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Header block

Click the **Header** block to style the heading area above the image and video.

* **Text alignment (desktop)** and **Text alignment (mobile):** Align the heading (options: Left, Center, Right).
* **Text container max width:** Limit the width of the heading area (0 to 1600 px). Set it to 0 to use the default maximum width.
* **Text color:** Override the section text color for the heading area.

You can add any theme block to the Header, for example a [Subheading](/blocks/subheading) above the heading or a [Text](/blocks/text) block below it.

## Image and video block

Click the **Image and video** block to set up the media and the content.

* **Layout:** Choose which comes first, on the left (options: Image first, Video first).
* **Text position:** Place the content on the image or on the video (options: On the image, On the video). When **Show on mobile** is set to **Video only**, the text is always shown on the video on phones.

#### Section height

* **Height:** Choose **Adapt to media** to let the image set the height, or **Fixed height** to set the height yourself. With **Adapt to media**, a YouTube or Vimeo video is treated as 16:9.
* **Height (desktop)** and **Height (mobile):** Set the fixed height (200 to 1000 px). Shown only when **Fixed height** is selected.

#### Desktop version

* **Image:** The image half of the section.
* **Video:** Select a video uploaded to Shopify for the video half.
* **Text vertical position:** Place the content at the top, center or bottom.
* **Text alignment:** Align the content left, center or right.

#### Mobile version

* **Show on mobile:** Choose what phones show (options: Video only, Both, stacked). **Both, stacked** shows the image and the video one above the other, in the same order as on desktop.
* **Show different media on mobile:** Enable this setting to use a different video, and with **Both, stacked** a different image, on phones. Leave a field empty to use the desktop media.
* **Image** and **Video:** The mobile media. Shown only when the setting above is on. The mobile **Image** appears only with **Both, stacked**.
* **Text vertical position** and **Text alignment:** Position and align the content on mobile.

#### Video URL

* **Video URL:** A YouTube or Vimeo link. It is used when no video is selected above.

#### Video behavior

* **Autoplay:** Start the video automatically, muted.
* **Loop video:** Play the video again when it ends.
* **Show default video controls:** Show the browser's standard video controls.
* **Custom play/pause button** and **Custom mute/unmute button:** Show the theme's own buttons on top of the video. Available only when the default controls are off.

:::note
The custom play/pause and mute/unmute buttons only work with a video uploaded to Shopify, not with a YouTube or Vimeo link.
:::

#### Optimization

* **Optimize loading if this is the first section on the page:** Load the media right away instead of when it scrolls into view, which makes the page appear faster. Use it when the section is at the top of the page.

#### Colors

* **Text color:** Override the text color of the content.
* **Content background color:** A color layer behind the content, on top of the media. A semi-transparent color helps make text easier to read on a busy image or video.

## Content blocks

Click **Add block** under **Image and video** to add content on top of the media. You can use any theme block, for example [Subheading](/blocks/subheading), [Heading](/blocks/heading), [Text](/blocks/text) and [Button](/blocks/button).

## Mobile view example

{/* TODO: mobile screenshot */}
