---
title: "Recently viewed products"
sidebar_label: "Recently viewed products"
description: "Show each shopper the products they looked at most recently."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Recently viewed products section?

<SectionMeta version="v1.0.0" />

The **Recently viewed products** section shows each shopper the products they opened most recently, so they can easily get back to something they liked. It works well on product pages, the cart page or near the bottom of your home page.

{/* TODO: desktop screenshot or video */}

You will find it under **Collections** in the **Add section** menu. It starts with a heading and product cards showing the image, vendor, title, price and rating.

## How does it work?

Every time a shopper opens a product page, the product is remembered in their browser. The section then shows those products, the most recent first, and leaves out the product the shopper is looking at right now. Nothing is stored in your Shopify admin, and every shopper sees only their own history.

:::note
The section stays hidden, heading and spacing included, until the shopper has viewed at least one product. In the theme editor it always shows sample cards so you can style them.
:::

## Section structure

When you expand the section in the theme editor sidebar, you will see two fixed blocks:

* **Header:** An optional heading area above the products. It contains a [Heading](/blocks/heading) block by default.
* **Recently viewed products:** Sets how many products to show and how they are laid out. Inside it is the **Product card** block, which controls how every card looks.

See [How sections and blocks work](/getting-started/sections-and-blocks) for more about fixed blocks and theme blocks.

## Section settings

* **Make section full width:** Enable this setting to make the section span the full width of the screen.

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

## Recently viewed products block

* **Products to show:** The maximum number of products (3 to 24).

#### Desktop version

* **Layout:** Show the products in a grid or a slider (options: Grid, Slider).
* **Items per row:** How many cards fit in one row (2 to 5).
* **Gap:** Space between the cards (2 to 24 px).

#### Mobile version

* **Layout:** Grid or Slider on mobile.
* **Items per row:** How many cards fit across the screen (1.1 to 2.5).
* **Gap:** Space between the cards (2 to 16 px).

#### Slider behavior

* **Enable loop:** Let the slider start again from the first card after the last one. Shown only when one of the layouts is set to **Slider**.

#### Pagination

* **Custom dots:** Enable this setting to style the slider dots for this section only. When it is off, the dots use [Theme settings → Sliders](/theme-settings/sliders).
* **Dot background color**, **Dot background blur** (0 to 20 px), **Active dot color** and **Inactive dot color:** The custom dot styles. Shown only when **Custom dots** is on.

### Product card block

The **Product card** block inside **Recently viewed products** controls how every card looks. It starts with the Media, Vendor, Title, Price and Rating blocks, and you can add Swatches, Tags, a Quick buy button or a [Separator](/blocks/separator).

The card works exactly as in the Featured collection section. See [Featured collection → Product card block](/sections/collections/featured-collection#product-card-block) for every setting.

## Mobile view example

{/* TODO: mobile screenshot */}
