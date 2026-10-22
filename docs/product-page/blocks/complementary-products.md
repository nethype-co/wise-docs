---
title: "Complementary products (standard card)"
sidebar_label: "Complementary products"
description: "Show products that go well with the current product, picked in Shopify's Search & Discovery app."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Complementary products (standard card) block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Complementary products** block shows products that pair well with the product on the page, for example a case next to a phone or a sauce next to a pasta. You choose the pairs in Shopify's free **Search & Discovery** app, and the block shows them as standard product cards in a small grid with a title such as *Pairs well with*.

{/* TODO: screenshot of two complementary product cards in the product info column */}

Wise has two Complementary products blocks. Both show the same products. This one uses the standard, vertical **Product card**. The other uses a horizontal compact card, see [Complementary products (compact card)](/product-page/blocks/complementary-products-compact).

To add the block, open the **Product information** section and click **Add block**, then pick **Complementary products**. See [Product information](/product-page/product-information) for how blocks work on the product page. The block can also be placed in the **Below gallery** area.

## Setting up complementary products

The products come from Shopify, not from the theme editor:

1. Install the free **Shopify Search & Discovery** app from the Shopify App Store, if you have not already.
2. In your Shopify admin, open **Search & Discovery** and go to **Product recommendations**.
3. Search for and select the product you want to set up.
4. Under **Complementary products**, add the products that go with it, in the order you want them shown.
5. Save. Repeat for each product.

On the storefront, the block loads the complementary products after the page has loaded. Products that are sold out are skipped. When a product has no complementary products, or all of them are sold out, the block stays hidden.

:::note
In the theme editor, the block first shows up to three sample cards with a note, so you can style the card even before you set up any products. The sample cards are then replaced by the real products of the product you preview, if it has any.
:::

## Settings

* **Maximum products to show:** The most products the block shows (1 to 10).
* **Products per row (desktop):** How many cards sit side by side on desktop (options: 1, 2, 3, 4).
* **Products per row (mobile):** How many cards sit side by side on mobile (options: 1, 2).

#### Title

* **Title font:** Use the body, heading or subheading font for the title.
* **Title:** The heading above the products, for example *Pairs well with*. Leave it empty to hide it.
* **Text scale (desktop)** and **Text scale (mobile):** Make the title smaller or larger (50 to 300%).
* **Show top border** and **Show bottom border:** Draw a line above or below the block.
* **Line color:** The color of those lines. Shown only when a border is on.

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the block (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Product card block

Every product is shown with the same **Product card**, a fixed block inside Complementary products. Click it to style all the cards at once. It starts with **Media**, **Vendor**, **Title** and **Price** blocks, and you can add, remove and reorder its parts.

* **Text alignment:** Align the card text left or center.
* **Height:** **Stretch** makes every card in a row as tall as the tallest one. **Auto** lets each card end at its own content.

**Quick buy.** Controls the **Quick buy button** block and the quick buy icon on the image.

* **Action:** What happens when a customer uses quick buy (options: Add to cart, or open quick view for products with options; Always open quick view; Open the quick buy picker on the card).
* **Options shown in the picker**, **Size guide link text**, **Size guide page** and **Size guide metafield:** Set up the quick buy picker. Shown when **Action** is set to the picker.

**Spacing.** **Padding top** and **Padding bottom** of the whole card (0 to 40 px), with optional separate values for mobile.

**Colors.** **Text color**, **Background color** and **Background blur** (0 to 35 px) of the card.

### Card parts

Click **Add block** inside the Product card to add these parts:

* **Media:** The product image. Choose one image, a second image on hover or a small gallery, the **Image ratio** (Adapt to image, Portrait, Square, Landscape), **Image fit**, whether to **Show video**, the **Badges position**, and an optional quick buy icon on the image.
* **Vendor:** The product's vendor, optionally linked to the vendor's collection, with a text scale.
* **Title:** The product name, with a heading tag and a text scale.
* **Price:** The price, with a text scale. Compare-at prices and discount percentages follow [Product badges](/theme-settings/product-badges) in Theme settings.
* **Tags:** A few product tags, or values from a metafield, shown as pills or text.
* **Rating:** The star rating from your reviews app, read from Shopify's product rating metafield.
* **Swatches:** Color swatches from the product's options or from product siblings. See [Color swatches](/theme-settings/color-swatches).
* **Separator:** A dividing line, see [Separator](/blocks/separator).
* **Quick buy button:** A button that adds the product to the cart or opens quick view, as set under **Quick buy** on the card.

## Mobile view example

{/* TODO: mobile screenshot */}
