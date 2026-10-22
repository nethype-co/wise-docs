---
title: "Expert testimonial"
sidebar_label: "Expert testimonial"
description: "Show quotes from experts or customers next to a large image, with small portraits to switch between them."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Expert testimonial section?

<SectionMeta version="v1.0.0" />

The **Expert testimonial** section shows one quote at a time next to a large image. Small round thumbnails below the quote let your visitors switch between testimonials. Use it for recommendations from experts, stylists or well-known customers.

{/* TODO: desktop screenshot or video */}

You will find the section under **Testimonials** in the **Add section** menu. It starts with a heading and three testimonials.

## Section structure

When you expand the section in the theme editor sidebar, you will see two fixed blocks:

* **Header:** An optional heading area above the testimonials. It contains a [Heading](/blocks/heading) block by default. Remove the heading if you do not need a section title.
* **Testimonial container:** Holds the testimonials and controls the layout, height, thumbnails and autoplay. Each quote is an **Expert testimonial** block inside it.

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

Click the **Header** block to style the heading area above the testimonials.

* **Text alignment (desktop)** and **Text alignment (mobile):** Align the heading (options: Left, Center, Right).
* **Text container max width:** Limit the width of the heading area (0 to 1600 px). Set it to 0 to use the default maximum width.
* **Text color:** Override the section text color for the heading area.

You can add any theme block to the Header, for example a [Subheading](/blocks/subheading) above the heading or a [Text](/blocks/text) block below it.

## Testimonial container block

Click the **Testimonial container** block to set up the layout of all testimonials.

* **Autoplay:** Switch to the next testimonial automatically. It only works when there is more than one testimonial.
* **Change slide every:** How long each testimonial is shown (1 to 10 seconds). Shown only when **Autoplay** is on.

#### Section height

* **Height:** Choose **Adapt to first image** to let the image of the first testimonial set the height, or **Fixed height** to set the height yourself. With **Adapt to first image**, images of the other testimonials are cropped to the same height.
* **Height (desktop)** and **Height (mobile):** Set the fixed height (200 to 1000 px). Shown only when **Fixed height** is selected.

#### Thumbnails

* **Thumbnail height (desktop)** and **Thumbnail height (mobile):** The size of the small images used to switch between testimonials (24 to 120 px).

#### Layout

* **Image width (desktop):** How much of the row the image takes up on desktop (30 to 70%).
* **Text container max width:** Limit the width of the text column on desktop (0 to 1600 px). The quote, the author and the thumbnails narrow together. Set it to 0 to use the full column.
* **Text alignment (desktop)** and **Text alignment (mobile):** Align the quote, the author and the thumbnails (options: Left, Center, Right).

## Expert testimonial block

Click **Add block** under the **Testimonial container** to add another testimonial, then click it to edit it.

#### Image

* **Image:** The large image shown next to the quote.
* **Miniature:** The small image used as this testimonial's thumbnail, for example a portrait. If it is empty, the large image is used.

#### Quote

* **Quote:** The testimonial text.
* **Quote font:** The font used for the quote (options: Heading, Subheading, Body, Custom).
* **Custom font:** Pick any font from the Shopify font library. Shown only when **Quote font** is set to **Custom**.
* **Text scale (desktop)** and **Text scale (mobile):** Make the quote smaller or larger (50 to 300%).

#### Author

* **Author:** The name of the person, for example their name and job title.
* **Text scale (desktop)** and **Text scale (mobile):** Make the author text smaller or larger (50 to 300%).

#### Colors

* **Text color:** Override the text color of this testimonial.
* **Background color:** Set a background color behind this testimonial.

## Mobile view example

{/* TODO: mobile screenshot */}
