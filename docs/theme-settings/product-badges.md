---
title: "Product badges"
sidebar_label: "Product badges"
sidebar_position: 14
description: "Show sale, sold out and custom badges such as New or Bestseller on product images, driven by product tags."
---

import SectionMeta from '@site/src/components/SectionMeta';

## Product badges

<SectionMeta version="v1.0.0" />

Product badges are small labels on product images, such as *Sold out*, *New* or *Bestseller*. Wise shows three kinds of badges: a **Sold out** badge, a **sale percentage** next to the price and up to **four custom badges** that you control with product tags. You'll find these settings under **Theme settings** > **Product badges** in the theme editor. To open theme settings, click the gear (settings) icon in the left sidebar of the theme editor.

{/* TODO: screenshot of a product card with a custom badge and a sale percentage */}

## Where badges appear

* **Product cards:** In the corner of the product image, in collections, product carousels and search. You choose the corner with **Badges position** in the product card media settings of each section.
* **Product page:** In the corner of the main product images, and in the [Badges](/product-page/blocks/badges) block if you add it to the product information.
* **Quick view:** In the corner of the quick view images.

The sale percentage is not an image badge: it appears after the price, wherever prices are shown.

## Settings

#### Design

These settings apply to every badge.

* **Badge text transform:** Show badge text as typed or in capital letters (options: none, Uppercase).
* **Badge font size (desktop)** and **(mobile):** The size of badge text (10 to 22 px on desktop, 10 to 18 px on mobile).
* **Badge letter spacing (desktop)** and **(mobile):** The space between letters (minus 3 to 5 px).

Badges use the body font, and their corners follow **Buttons border radius** in [Layout](/theme-settings/layout).

#### Sale badge

* **Show discount percentage:** Show the discount as a percentage after the price, for example **-20%**, on product cards, in search and on the product page. It appears automatically on every product that has a **Compare-at price** higher than its price.
* **Sale badge text** and **Sale badge background:** The colors of the percentage label. Shown only when the setting above is on.
* **Show compare-at price:** Show the original price struck through next to the sale price.

The percentage is rounded to the nearest whole number. On the product page it follows the selected variant. On product cards and in search, it is left out for products whose variants have different prices, because one percentage would not be right for every variant.

#### Badge 1 to Badge 4

Each of the four custom badges has the same settings:

* **Text:** The text color of the badge.
* **Background:** The background color of the badge.
* **Tag:** The product tag that shows the badge, for example **new**. Any product with this tag gets the badge.
* **Content:** The text shown on the badge, for example **New arrival**. Leave it empty to show the tag itself.

#### Sold out badge

The **Sold out** badge has no settings of its own on this page. It appears automatically when a product, or on the product page the selected variant, is sold out. Its colors are **Sold out text** and **Sold out background** in [Colors](/theme-settings/colors) under **Product**.

## How to add a custom badge

In this example, products tagged **bestseller** get a black *Bestseller* badge.

1. In the theme editor, open **Theme settings** > **Product badges** and scroll to **Badge 1** (or any free badge).
2. In **Tag**, enter **bestseller**.
3. In **Content**, enter the text customers should see, for example **Bestseller**.
4. Choose the **Text** and **Background** colors, then click **Save**.
5. In your Shopify admin, go to **Products**, open each product that should get the badge and add the tag **bestseller** in the **Tags** field. Save the product.

To tag many products at once, select them in the product list in your admin, click **More actions** > **Add tags** and enter the tag.

To remove the badge from a product, remove the tag from that product.

:::tip
How tags are matched:

* The tag must match the whole product tag. A badge set to **new** does not appear on a product tagged *new-in*.
* Capital letters do not matter: **New** matches the tag *new*.
* A product with several badge tags shows all the matching badges, in order from Badge 1 to Badge 4, after the Sold out badge.
:::

## Translating badges

Keep the **Tag** field the same in every language, because it must match the product tag. To translate the text on the badge, fill in **Content** and translate the **Content** field in the Translate & Adapt app (or the translation app you use). The **Sold out** text is part of the theme's own texts and is translated together with them.

:::note
Badges are based on product tags only. There is no automatic *New* badge based on the product's publish date. To change which products have a badge over time, add or remove the tag, for example with Shopify Flow.
:::
