---
title: "Product recommendations"
sidebar_label: "Product recommendations"
description: "Show products that Shopify picks as related to the product a shopper is viewing."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Product recommendations section?

<SectionMeta version="v1.0.0" />

The **Product recommendations** section shows a row of products related to the one the shopper is looking at, such as *You may also like*. Shopify chooses the products automatically for each product, so you do not need to pick them yourself.

{/* TODO: desktop screenshot or video */}

The section is available only on **product templates**. You will find it under **Collections** in the **Add section** menu when you edit a product template. It starts with a heading and product cards showing the image, vendor, title, price and rating.

## Where do the products come from?

The products are Shopify's **related** product recommendations. Shopify works them out from sales data and product descriptions, and they are different for each product.

You can control them with Shopify's free **Search & Discovery** app. In the app, open **Product recommendations** and choose a product to add your own related products, put them first, or remove products you do not want to show.

:::note
In the theme editor, the section always shows sample cards so you can style them. The real recommendations appear in your online store and in the theme preview. If Shopify has no recommendations for a product, the whole section is hidden for that product, heading included.
:::

:::tip
The products shown here are **related** products. **Complementary** products (items that go well with the product, for example a case for a phone) are set up in the same Search & Discovery app, but they are shown on the product page with the [Complementary products](/product-page/blocks/complementary-products) block, not in this section.
:::

## Section structure

When you expand the section in the theme editor sidebar, you will see two fixed blocks:

* **Header:** An optional heading area above the products. It contains a [Heading](/blocks/heading) block by default.
* **Recommended products:** Sets how many products to show and how they are laid out. Inside it is the **Product card** block, which controls how every card looks.

See [How sections and blocks work](/getting-started/sections-and-blocks) for more about fixed blocks and theme blocks.

## Section settings

* **Make section full width:** Enable this setting to make the section span the full width of the screen.

#### Colors

* **Text color:** Set the text color for the whole section.
* **Background color:** Set the background color of the section.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.

#### Section spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Header block

* **Text alignment (desktop)** and **Text alignment (mobile):** Align the heading (options: Left, Center, Right).
* **Text container max width:** Limit the width of the heading area (0 to 1600 px). Set it to 0 to use the default maximum width.
* **Text color:** Override the section text color for the heading area.

You can add any theme block to the Header, for example a [Subheading](/blocks/subheading) or a [Text](/blocks/text) block.

## Recommended products block

* **Products to show:** The maximum number of recommended products (2 to 10). Shopify returns up to 10 recommendations per product.

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

The **Product card** block inside **Recommended products** controls how every card looks. It starts with the Media, Vendor, Title, Price and Rating blocks, and you can add Swatches, Tags, a Quick buy button or a [Separator](/blocks/separator).

The card works exactly as in the Featured collection section. See [Featured collection → Product card block](/sections/collections/featured-collection#product-card-block) for every setting.

## Mobile view example

{/* TODO: mobile screenshot */}
