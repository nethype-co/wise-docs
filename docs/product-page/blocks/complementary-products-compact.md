---
title: "Complementary products (compact card)"
sidebar_label: "Complementary products (compact)"
description: "Show complementary products from Shopify's Search & Discovery app as small horizontal cards with an add button."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Complementary products (compact card) block?

<SectionMeta version="v1.0.0" availability="Product page" />

This **Complementary products** block shows products that pair well with the product on the page as **compact cards**: a small thumbnail on the left, the name and price beside it, and an add to cart button on the right. It takes up little space, so it fits well right below the buy buttons. The products are the ones you pick in Shopify's free **Search & Discovery** app.

{/* TODO: screenshot of compact complementary product cards below the buy buttons */}

Wise has two Complementary products blocks that show the same products. This one uses the compact card. For larger, vertical product cards, see [Complementary products (standard card)](/product-page/blocks/complementary-products).

To add the block, open the **Product information** section, click **Add block** and pick **Complementary products: compact card**. See [Product information](/product-page/product-information) for how blocks work on the product page. The block can also be placed in the **Below gallery** area.

## Setting up complementary products

1. Install the free **Shopify Search & Discovery** app from the Shopify App Store, if you have not already.
2. In your Shopify admin, open **Search & Discovery** and go to **Product recommendations**.
3. Search for and select the product you want to set up.
4. Under **Complementary products**, add the products that go with it, in the order you want them shown.
5. Save. Repeat for each product.

Sold out products are skipped. When a product has no complementary products, or all of them are sold out, the block stays hidden. In the theme editor you first see up to three sample cards, so you can style the card before any products are set up.

## Settings

* **Maximum products to show:** The most products the block shows (1 to 10).
* **Full width card:** Let each card fill the full width of its column. When it is off, a card is at most 480 px wide.
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

## Compact product card block

Every product is shown with the same **Compact product card**, a fixed block inside this block. Click it to style all the cards at once. It starts with **Thumbnail**, **Vendor**, **Title**, **Price** and **Button** blocks.

* **Product:** Leave this empty here. The products come from the Search & Discovery app.
* **Vertical alignment:** Align the text with the top or the center of the thumbnail.
* **Gap:** The space between the thumbnail, the text and the button (0 to 32 px).

**Colors.**

* **Text color** and **Background color:** The colors of the card.
* **Background blur:** Blur what is behind the card (0 to 20 px). It needs a background color with some transparency. Shown only when a background color is set.
* **Show shadow:** Add a soft shadow around the card.

### Card parts

Click **Add block** inside the Compact product card to add these parts:

* **Thumbnail:** The product image. **Size (desktop)** and **Size (mobile)** (60 to 160 px), **Image ratio** (Square, Portrait, Adapt to image) and **Link to product**.
* **Vendor:** The product's vendor, optionally linked to the vendor's collection, with a text scale.
* **Badge:** The first badge that applies to the product: Sold out, then your tag badges from [Product badges](/theme-settings/product-badges). You can override its background and text color.
* **Title:** The product name, with a heading tag and a text scale.
* **Price:** The price, with a text scale.
* **Rating:** The star rating from your reviews app.
* **Button:** An add to cart button. **Display** shows a bag icon or a text button (the icon comes from [Icon set](/theme-settings/icon-set)), and **Button style** picks Primary or Secondary. A product with one variant is added to the cart straight away. A product with several variants opens quick view so the customer can choose. A sold out product shows a disabled button.

## Mobile view example

{/* TODO: mobile screenshot */}
