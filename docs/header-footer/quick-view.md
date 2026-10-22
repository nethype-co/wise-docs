---
title: "Quick view"
sidebar_label: "Quick view"
description: "Set up the side drawer that lets customers pick options and add a product to the cart from a product card."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Quick view section?

<SectionMeta version="v1.0.0" />

The **Quick view** is a side drawer that opens from the quick buy button or icon on product cards. It shows the product's images, price and options, so customers can choose a variant and add it to the cart without leaving the collection or home page. You decide what it shows by adding product page blocks to it.

{/* TODO: desktop screenshot or video */}

## Where to find the quick view

The quick view is a section in the **Drawers & Popups** group at the bottom of the theme editor sidebar, next to the [Cart drawer](/header-footer/cart-drawer) and the [Search overlay](/header-footer/search-overlay).

When the quick view opens depends on the product card's **Action** setting, which you find on the product card in sections such as Featured collection or the collection page grid:

* **Add to cart, or open quick view for products with options:** A product with one variant goes straight to the cart. A product with options opens the quick view.
* **Always open quick view:** Every quick buy button opens the quick view.
* **Open the quick buy picker on the card:** Customers pick the options on the card itself.

Products with subscriptions are never added straight to the cart, so customers can choose a purchase option first.

:::tip
To see the quick view content while you edit it, open a product page in the theme editor (for example **Products > Default product** in the page selector at the top of the theme editor). The quick view then shows that product in the preview. On other pages it only shows a hint.
:::

## Section structure

The section has no fixed blocks. It starts with **Images**, **Title**, **Price**, **Variant picker**, **Subscription widget** and **Buy buttons**. You can add, remove and reorder blocks with **Add block**.

## Section settings

* **Sticky buy buttons:** Keep the buy buttons at the bottom of the drawer while the product details scroll.
* **Show "View more details" link:** Show a link to the full product page.

#### Colors

* **Text color:** The text color of the drawer.
* **Background color:** The drawer background. Use a solid color: the sticky buy buttons use the same background, so it cannot be see-through.
* **Background gradient:** A background gradient. It overrides the background color.

## Images block

The product images at the top of the drawer.

* **Layout:** How the images are shown (options: Carousel, One large image, Two images).
* **Images per view:** How many images the carousel shows at a time (1 to 2). 1 shows one large image, 2 shows two side by side. A product with one image always shows it large. Shown only for **Carousel**.
* **Show arrows:** Show slider arrows when a customer points at the images. Shown only for **Carousel**. Their style comes from [Sliders](/theme-settings/sliders).
* **Pagination:** The slide indicator (options: Counter and line, Counter, Dots, None). Shown only for **Carousel**.
* **Image ratio:** The shape of the images (options: Adapt to image, Portrait, Square).
* **Image fit:** Crop the images to fill the shape, or show the whole image (options: Crop to fill, Show whole image).
* **Show badges:** Show product badges, such as Sale or Sold out, on the images.
* **Badges position:** The corner the badges sit in (options: Top left, Top right, Bottom left, Bottom right). The badges themselves are set up in [Product badges](/theme-settings/product-badges).

**Block spacing.** Space above and below the images (0 to 60 px), with optional separate values for mobile.

## Product blocks

The other blocks are the same blocks you use on the product page, and they have the same settings there and here. Their settings in the quick view are separate from the product page, so you can, for example, show a shorter description in the quick view.

You can add these blocks:

* [Title](/product-page/blocks/title), [Price](/product-page/blocks/price), [Rating](/product-page/blocks/rating) and [SKU](/product-page/blocks/sku)
* [Variant picker](/product-page/blocks/variant-picker) and [Product siblings](/product-page/blocks/product-siblings)
* [Subscription widget](/product-page/blocks/subscription-widget) and [Buy buttons](/product-page/blocks/buy-buttons)
* [Inventory status](/product-page/blocks/inventory-status)
* [Description](/product-page/blocks/description), [Bullet points](/product-page/blocks/bulletpoints) and [Feature tags](/product-page/blocks/feature-tags)
* [Text](/blocks/text) and [Separator](/blocks/separator)

See [Product information](/product-page/product-information) for more about the product page.

## Mobile view example

{/* TODO: mobile screenshot */}
