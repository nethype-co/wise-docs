---
title: "Upsell"
sidebar_label: "Upsell"
description: "Recommend products you pick by hand, the same for every product or different per product with a metafield."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Upsell block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Upsell** block shows up to four products you choose yourself, as product cards or compact cards, on the product page. Use it to suggest an upgrade, an add-on or a bestseller. Unlike [Complementary products](/product-page/blocks/complementary-products), which come from the Search & Discovery app, you pick these products directly in the theme editor or in a product metafield.

{/* TODO: screenshot of the upsell block with two cards */}

To add the block, open the **Product information** section and click **Add block**. See [Product information](/product-page/product-information) for how blocks work on the product page.

## Which products are shown

* The block shows the products in **Products**, in that order.
* Sold out products are skipped.
* The product on the page is skipped, so a product never recommends itself.
* When no products are left to show, the block is hidden. In the theme editor you see sample cards and a note instead, so you can style the cards first.

### Different products on each product page

By default every product page shows the same picks. To choose the upsell products per product, connect a metafield:

1. In your Shopify admin, go to **Settings > Custom data > Products** and click **Add definition**.
2. Enter a name, for example *Upsell products*, choose the type **Product** and select **List of values**. Save.
3. Open a product, find the metafield in its **Metafields** area and pick the products to recommend.
4. In the theme editor, select the Upsell block, click the **Connect dynamic source** button next to **Products** and choose your *Upsell products* metafield.

Products without a value in the metafield show no upsell.

## Settings

* **Products:** The products to recommend (up to 4).
* **Card style:** Show the products as standard product cards (Product card) or as small horizontal cards (Compact card). Both cards are listed inside the block, each with its own settings, and only the selected one is used.
* **Full width card:** Let each compact card fill the full width of its column. When it is off, a card is at most 480 px wide. Shown only for the compact card.
* **Products per row (desktop):** How many cards sit side by side on desktop (options: 1, 2, 3, 4).
* **Products per row (mobile):** How many cards sit side by side on mobile (options: 1, 2).

#### Title

* **Title font:** Use the body, heading or subheading font for the title.
* **Title:** The heading above the products. Leave it empty to hide it.
* **Text scale (desktop)** and **Text scale (mobile):** Make the title smaller or larger (50 to 300%).

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the block (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Product card block

Used when **Card style** is set to Product card. Click it to style all the cards at once. It starts with **Media**, **Vendor**, **Title** and **Price** blocks.

* **Text alignment:** Align the card text left or center.
* **Height:** **Stretch** makes every card in a row as tall as the tallest one. **Auto** lets each card end at its own content.
* **Quick buy:** **Action** sets what quick buy does (options: Add to cart, or open quick view for products with options; Always open quick view; Open the quick buy picker on the card). The picker settings appear when you choose the picker.
* **Spacing:** **Padding top** and **Padding bottom** of the card (0 to 40 px), with optional separate values for mobile.
* **Colors:** **Text color**, **Background color** and **Background blur** of the card.

Click **Add block** inside the Product card to add parts: **Media**, **Vendor**, **Tags**, **Title**, **Price**, **Rating**, **Swatches**, [Separator](/blocks/separator) and **Quick buy button**. See [Complementary products (standard card)](/product-page/blocks/complementary-products) for a short description of each part.

## Compact product card block

Used when **Card style** is set to Compact card. Click it to style all the cards at once. It starts with **Thumbnail**, **Vendor**, **Title**, **Price** and **Button** blocks.

* **Product:** Leave this empty here. The products come from the Upsell block's **Products** setting.
* **Vertical alignment:** Align the text with the top or the center of the thumbnail.
* **Gap:** The space between the thumbnail, the text and the button (0 to 32 px).
* **Colors:** **Text color**, **Background color**, **Background blur** (0 to 20 px, needs a background color with some transparency) and **Show shadow**.

Click **Add block** inside the Compact product card to add parts: **Thumbnail**, **Vendor**, **Badge**, **Title**, **Price**, **Rating** and **Button**. See [Complementary products (compact card)](/product-page/blocks/complementary-products-compact) for a short description of each part.

## Mobile view example

{/* TODO: mobile screenshot */}
