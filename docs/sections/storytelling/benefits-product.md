---
title: "Product benefits"
sidebar_label: "Product benefits"
description: "Show a product image or video with short benefits arranged around it."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Product benefits section?

<SectionMeta version="v1.0.0" />

The **Product benefits** section shows one image or video in the middle with short benefits placed around it. Each benefit has an optional icon, a heading and a line of text. Use it to explain what makes a product special at a glance.

{/* TODO: desktop screenshot or video */}

The section is found under **Storytelling** in the **Add section** menu. It starts with a heading and four benefits.

## Section structure

When you expand the section in the theme editor sidebar, you will see two fixed blocks:

* **Header:** An optional heading area above the benefits. It contains a [Heading](/blocks/heading) block by default.
* **Benefits container:** The image or video and the benefits around it. You add, remove and reorder the **Benefit** blocks here.

See [How sections and blocks work](/getting-started/sections-and-blocks) for more about fixed blocks.

## Section settings

* **Make section full width:** Enable this setting to make the section span the full width of the screen. The image or video then runs edge to edge, while the benefits keep a small margin from the screen edge.

#### Colors

* **Background color:** Set the background color of the section.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.
* **Text color:** Set the text color for the whole section.

#### Section spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Header block

Click the **Header** block to style the heading area above the benefits.

* **Text alignment (desktop)** and **Text alignment (mobile):** Align the heading (options: Left, Center, Right).
* **Text container max width:** Limit the width of the heading area. Set it to 0 to use the default maximum width.
* **Text color:** Override the section text color for the heading area.

You can add any theme block to the Header, for example a [Subheading](/blocks/subheading) or a [Text](/blocks/text) block.

## Benefits container block

Click the **Benefits container** block to set up the image or video in the middle.

On desktop, the image sits in the center and the benefits alternate left and right around it: the first benefit on the left, the second on the right, and so on. On mobile, the image comes first and the benefits are listed below it.

#### Section height

* **Height:** Choose **Adapt to media** to show the image or video at its natural proportions, or **Fixed height** to set the height yourself.
* **Height (desktop)** and **Height (mobile):** Set the fixed height (200 to 1000 px). Shown only when **Fixed height** is selected.

#### Desktop version

* **Media type:** Show an image or a video.
* **Image** or **Video:** Upload the image, or select a video uploaded to Shopify. A product photo on a transparent or plain background works best.

#### Mobile version

* **Show different media on mobile:** Enable this setting to use a different image or video on mobile. When it is off, the desktop media is used on all devices.
* **Media type**, **Image** and **Video:** The mobile media. Shown only when the setting above is on.

#### Video behavior

These settings appear when the media type is set to **Video**.

* **Autoplay:** Start the video automatically, muted.
* **Custom play/pause button** and **Custom mute/unmute button:** Show the theme's own buttons on top of the video.

#### Benefit headings

* **Heading scale (desktop)** and **Heading scale (mobile):** Make the heading of every benefit smaller or larger (50 to 300%).

## Benefit block

Click **Add block** under the **Benefits container** to add a benefit. An even number of benefits keeps both sides of the image balanced on desktop.

* **Icon/image:** An optional icon or small image shown next to the heading.
* **Icon border radius:** Round the corners of the icon (0 to 50 px). At 0, the corner radius from your theme settings is used.
* **Icon scale (desktop)** and **Icon scale (mobile):** Make the icon smaller or larger (50 to 300%).
* **Heading:** The benefit title.
* **Text:** A short description of the benefit.
* **Text alignment (desktop):** Align the benefit on desktop (options: Left, Center, Right). On mobile, benefits are always left aligned with the icon beside the text.

## Mobile view example

{/* TODO: mobile screenshot */}
