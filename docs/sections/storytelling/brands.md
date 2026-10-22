---
title: "Brands"
sidebar_label: "Brands"
description: "Show a row of brand or partner logos as a swipeable row or a moving marquee."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Brands section?

<SectionMeta version="v1.0.0" />

The **Brands** section shows a row of logos, for example the brands you sell, press mentions or partners. The logos can sit in a row that customers swipe through, or move across the screen in a continuous marquee.

{/* TODO: desktop screenshot or video */}

The section is found under **Storytelling** in the **Add section** menu. It starts with a heading and four logo images.

## Section structure

When you expand the section in the theme editor sidebar, you will see two fixed blocks:

* **Header:** An optional heading area above the logos. It contains a [Heading](/blocks/heading) block by default.
* **Brands container:** The row of logos and how it moves. You add, remove and reorder the **Image** blocks here.

See [How sections and blocks work](/getting-started/sections-and-blocks) for more about fixed blocks.

## Section settings

#### Colors

* **Background color:** Set the background color of the section.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.
* **Text color:** Set the text color for the whole section.

#### Section spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Header block

Click the **Header** block to style the heading area above the logos.

* **Text alignment (desktop)** and **Text alignment (mobile):** Align the heading (options: Left, Center, Right).
* **Text container max width:** Limit the width of the heading area. Set it to 0 to use the default maximum width.
* **Text color:** Override the section text color for the heading area.

## Brands container block

Click the **Brands container** block to set up the row of logos.

* **Make section full width:** Let the logo row span the full width of the screen.
* **Animation mode:** Choose how the logos are shown (options: Swipe, Marquee).
  * **Swipe:** The logos sit in a row. When there are more logos than fit in one row, the row becomes a slider that customers swipe, with pagination dots below it.
  * **Marquee:** The logos move across the screen in an endless loop. The marquee pauses when a customer hovers over it or taps it.
* **Marquee mode speed:** How fast the marquee moves (options: Slow, Normal, Fast). Shown only in **Marquee** mode.

#### Desktop version

* **Image height:** The height of each logo on desktop (40 to 300 px).
* **Items per row:** How many logos fit in one row on desktop (2 to 8). Shown only in **Swipe** mode.
* **Gap:** The space between logos (0 to 100 px). Swipe and Marquee mode each keep their own value.

#### Mobile version

* **Image height:** The height of each logo on mobile (20 to 300 px).
* **Items per row:** How many logos are visible on mobile (1 to 3, in steps of 0.1). A value such as 2.9 shows part of the next logo, which hints that the row can be swiped. Shown only in **Swipe** mode.
* **Gap:** The space between logos on mobile (0 to 100 px).

#### Pagination

These settings appear only in **Swipe** mode. By default, the dots use the style set in [Theme settings > Sliders](/theme-settings/sliders).

* **Custom dots:** Enable this setting to style the dots for this section only. When it is on, the settings below appear.
* **Dot background color** and **Dot background blur:** A background behind the dots, and how much it blurs what is behind it (0 to 20 px).
* **Active dot color** and **Inactive dot color:** The color of the current dot and of the other dots.

## Image block

Each logo is an **Image** block inside the **Brands container**.

* **Image:** Upload the logo. Logos with a transparent background and similar proportions look the most even.
* **Link:** Optional. Makes the logo clickable, for example to the brand's collection page.
* **Open link as a new window:** Open the link in a new browser tab.

:::tip
The logo height is set once for the whole row in the **Brands container**, so all logos line up at the same height regardless of their original size.
:::

## Mobile view example

{/* TODO: mobile screenshot */}
