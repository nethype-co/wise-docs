---
title: "Products slider"
sidebar_label: "Products slider"
description: "Show products one at a time, each next to a large promo image with its own text."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Products slider section?

<SectionMeta version="v1.0.0" />

The **Products slider** section shows one product at a time next to a large promo image. Each slide has its own image, text and product, and shoppers move through the slides with the slider dots. Use it to tell a short story around a few key products, for example a campaign or a new collection.

{/* TODO: desktop screenshot or video */}

You will find it under **Collections** in the **Add section** menu. It starts with a heading and three slides, each with a heading, a text and a product card showing the image, title and price.

## Section structure

When you expand the section in the theme editor sidebar, you will see:

* **Header:** A fixed, optional heading area above the slider. It contains a [Heading](/blocks/heading) block by default.
* **Product slide** blocks: One block per slide. Add, remove and drag them to change the slides.

See [How sections and blocks work](/getting-started/sections-and-blocks) for more about fixed blocks and theme blocks.

## Section settings

* **Make section full width (desktop)** and **Make section full width (mobile):** Let the section span the full width of the screen.
* **Product position:** Show the product on the left or right of the promo image on desktop (options: Left, Right). On mobile, the promo image sits above the product.

#### Colors

* **Background color:** Set the background color of the section.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.
* **Text color:** Set the text color for the whole section.

#### Section spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Header block

* **Text alignment (desktop)** and **Text alignment (mobile):** Align the heading (options: Left, Center, Right).
* **Text container max width:** Limit the width of the heading area (0 to 1600 px). Set it to 0 to use the default maximum width.
* **Text color:** Override the section text color for the heading area.

## Product slide block

Each **Product slide** block is one slide: a promo image with text on it, and a product card.

* **Product:** The product shown on this slide.
* **Product image (optional):** Use your own image for the product instead of the product's main image.

#### Desktop version

* **Promo image:** The large image of the slide.
* **Text vertical position:** Place the text on the image at the top, center or bottom.
* **Text alignment:** Align the text left, center or right.

#### Mobile version

* **Show different media on mobile:** Enable this setting to use a different promo image on mobile. When it is on, a mobile **Promo image** field appears.
* **Text vertical position** and **Text alignment:** Position and align the text on mobile.

#### Colors

* **Product background color:** A background color behind the product half of the slide.
* **Product text color:** The text color of the product, including the price.
* **Promo text color:** The color of the text on the promo image.

#### Pagination

* **Custom dots:** Enable this setting to give the slider dots custom colors while this slide is showing. When it is off, the dots use [Theme settings → Sliders](/theme-settings/sliders).
* **Dot background color**, **Dot background blur** (0 to 20 px), **Active dot color** and **Inactive dot color:** The custom dot styles. Shown only when **Custom dots** is on.

:::tip
The dot colors are set per slide, so you can match them to each promo image. If the images are similar, turn on **Custom dots** on every slide with the same colors.
:::

### Text on the promo image

Click **Add block** under a **Product slide** to add text on top of its promo image. You can use any theme block, such as [Subheading](/blocks/subheading), [Heading](/blocks/heading), [Text](/blocks/text) or [Button](/blocks/button).

### Product card block

Each slide has a fixed **Product card** block for the product half, with Media, Title and Price blocks inside it. You can add the other card parts too: Vendor, Rating, Swatches, Tags and Quick buy button.

The card works as in the Featured collection section, see [Featured collection → Product card block](/sections/collections/featured-collection#product-card-block) for every setting. In this section the card always shows one large product image, so a few settings are hidden: the card **Height** and **Colors** (use the slide's **Product background color** and **Product text color** instead), and the Media block's media mode, **Image fit**, **Show video** and **Badges position**.

## Mobile view example

{/* TODO: mobile screenshot */}
