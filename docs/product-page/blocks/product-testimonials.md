---
title: "Testimonials"
sidebar_label: "Testimonials"
description: "Show customer quotes with star ratings on the product page, as a grid or a slider."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Testimonials block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Testimonials** block shows short customer quotes as cards, each with a star rating or a quote mark, the text and the customer's name. Use it to add social proof right next to the buy buttons, or below the product images.

{/* TODO: screenshot of two testimonial cards */}

To add the block, open the **Product information** section and click **Add block**, then pick **Testimonials**. See [Product information](/product-page/product-information) for how blocks work on the product page. The block can also be placed in the **Below gallery** area.

The block starts with two **Testimonial** blocks.

:::note
The testimonials are text you type in, so they are the same on every product that uses this template. To show real reviews per product, use a reviews app.
:::

## Settings

#### Desktop version

* **Layout:** Show the cards in a grid or in a slider (options: Grid, Slider).
* **Items per row:** How many cards sit side by side (1 to 4).
* **Gap:** The space between cards (0 to 40 px).

#### Mobile version

* **Layout:** Grid or Slider on mobile. Slider is the default.
* **Items per row:** How many cards are visible on mobile (1 to 2, in steps of 0.1). A value such as 1.1 shows a slice of the next card, so customers see they can swipe.
* **Gap:** The space between cards on mobile (0 to 40 px).

:::tip
A slider only turns on when there are more cards than **Items per row**. With fewer cards, they are shown as a grid.
:::

#### Pagination

Shown only when a layout is set to Slider. The dots below the slider follow [Sliders](/theme-settings/sliders) in Theme settings unless you turn on **Custom dots**.

* **Custom dots:** Use your own dot colors for this block.
* **Dot background color**, **Dot background blur** (0 to 20 px), **Active dot color** and **Inactive dot color:** Style the dots. Shown only when **Custom dots** is on.

#### Text

* **Font:** Use the body, heading or subheading font for the testimonial text.
* **Text scale (desktop):** Make the text smaller or larger (70 to 200%).
* **Text scale (mobile):** The text size on mobile (70 to 150%).

#### Author

* **Font:** Use the body, heading or subheading font for the author name.
* **Author scale (desktop):** Make the name smaller or larger (70 to 200%).
* **Author scale (mobile):** The name size on mobile (70 to 150%).

#### Colors

* **Card background color:** The background of each card. Leave it empty for no card background.
* **Text color:** The color of the text and name.
* **Star color:** The color of the stars. Leave it empty to use the theme star color.

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the block (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Testimonial block

Each **Testimonial** is one card. Click **Add block** inside Testimonials to add more.

* **Rating:** What to show at the top of the card (options: None, Quote, 4 stars, 4.5 stars, 5 stars). **Quote** shows a quotation mark icon instead of stars.
* **Text:** The customer's words.
* **Author:** The customer's name.

## Mobile view example

{/* TODO: mobile screenshot */}
