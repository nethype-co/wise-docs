---
title: "Featured product"
sidebar_label: "Featured product"
description: "Show one product with its gallery, price, variant picker and add to cart button on any page."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Featured product section?

<SectionMeta version="v1.0.0" />

The **Featured product** section brings a full product page layout to any page: the media gallery on one side, and the title, price, variant picker and add to cart button on the other. Use it to launch a hero product on your home page or to sell a product straight from a landing page.

{/* TODO: desktop screenshot or video */}

You will find it under **Collections** in the **Add section** menu. It starts with a heading, the product gallery and the Title, Price, Variant picker, Inventory status, Buy buttons, Bullet points, Separator and Description blocks.

The section uses the same blocks as your product page, so a block you know from the product template works the same way here.

## Section structure

When you expand the section in the theme editor sidebar, you will see:

* **Header:** An optional heading area above the product. It contains a [Heading](/blocks/heading) block by default.
* **Product gallery:** The product's images and videos. It is always the first block and cannot be removed.
* **Below gallery:** An optional area under the gallery for extra content blocks.
* **Product information blocks:** The blocks next to the gallery, such as Title, Price and Buy buttons. Add, remove and drag them to build the product information column.

See [How sections and blocks work](/getting-started/sections-and-blocks) for more about fixed blocks and theme blocks.

## Section settings

* **Product:** The product to show. Until you pick one, the section shows a placeholder image and title.
* **Make section full width:** Enable this setting to make the section span the full width of the screen.
* **Gap between media and product info (desktop):** Space between the gallery and the product information (0 to 160 px). On smaller desktop screens the gap is 80% of this value.
* **Media width (desktop):** How much of the row the gallery takes up (40 to 75%). The product information fills the rest.
* **Limit product info width:** Enable this setting to cap the width of the product information column. When it is on, **Product info max width** appears (400 to 1000 px).

#### Colors

* **Background color:** Set the background color of the section.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.
* **Text color:** Set the text color for the whole section.
* **Custom arrows:** Enable this setting to style the gallery arrows for this section only. When it is off, the arrows use [Theme settings → Sliders](/theme-settings/sliders).
* **Gallery arrow background** and **Gallery arrow color:** The background and icon color of the previous and next arrows on the gallery. Shown only when **Custom arrows** is on.

#### Section spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Header block

* **Text alignment (desktop)** and **Text alignment (mobile):** Align the heading (options: Left, Center, Right).
* **Text container max width:** Limit the width of the heading area (0 to 1600 px). Set it to 0 to use the default maximum width.
* **Text color:** Override the section text color for the heading area.

You can add any theme block to the Header, for example a [Subheading](/blocks/subheading) or a [Text](/blocks/text) block.

## Product gallery block

The **Product gallery** block has the same settings as the gallery on your product page, see [Product information](/product-page/product-information). Two things are different in this section:

* The **Layout** offers the two carousels only. If you choose **Collage**, the gallery shows as the carousel with thumbnails on the side.
* Uncheck **Show gallery** if you want to show the product information on its own, without images.

## Below gallery block

The **Below gallery** block adds content under the gallery, for example a description, collapsible rows or testimonials. It works the same as on the product page, see [Product information](/product-page/product-information).

* **Show on desktop:** Show the area always, or only when the gallery is a carousel (options: Always, Only with a carousel gallery).
* **Position on mobile:** Where the area goes on mobile (options: After product info, After gallery, Hidden).
* **Gap:** Space between the blocks inside the area (0 to 80 px).
* **Distance top (desktop)** and **Distance top (mobile):** Space between the gallery and this area (0 to 80 px).

## Product information blocks

Click **Add block** in the section to add product information. Every block below is documented on its product page article, follow the link for its settings.

**Buying**

* [Title](/product-page/blocks/title)
* [Price](/product-page/blocks/price)
* [Rating](/product-page/blocks/rating)
* [Badges](/product-page/blocks/badges)
* [Variant picker](/product-page/blocks/variant-picker)
* [Custom option](/product-page/blocks/custom-option)
* [Subscription widget](/product-page/blocks/subscription-widget)
* [Product siblings](/product-page/blocks/product-siblings)
* [Inventory status](/product-page/blocks/inventory-status)
* [Buy buttons](/product-page/blocks/buy-buttons)
* [Pickup availability](/product-page/pickup-availability)
* [SKU](/product-page/blocks/sku)

**Product details**

* [Description](/product-page/blocks/description)
* [Bullet points](/product-page/blocks/bulletpoints)
* [Feature icons](/product-page/blocks/feature-icons)
* [Feature tags](/product-page/blocks/feature-tags)
* [Feature icons list](/product-page/blocks/feature-icons-list)
* [Collapsible row](/product-page/blocks/collapsible-row)
* [Collapsible drawer](/product-page/blocks/collapsible-drawer)
* [Popup](/product-page/blocks/information-popup)

**Shipping and trust**

* [Estimated delivery](/product-page/blocks/estimated-delivery)
* [Shipping timeline](/product-page/blocks/shipping-timeline)
* [Payment badges](/product-page/blocks/payment-badges)
* [Share buttons](/product-page/blocks/share-buttons)

**Promotion and cross-selling**

* [Countdown with discount](/product-page/blocks/countdown-discount)
* [Promo](/product-page/blocks/promo)
* [Complementary products](/product-page/blocks/complementary-products), in the full and the compact version
* [Upsell](/product-page/blocks/upsell)
* [Video reels](/product-page/blocks/video-reels)
* [Testimonials](/product-page/blocks/product-testimonials)

You can also add the theme blocks [Text](/blocks/text), [Separator](/blocks/separator), [Button](/blocks/button), [Icon with text](/blocks/icon-with-text) and [Custom Liquid](/blocks/custom-liquid), as well as app blocks.

:::note
A few things work differently from the product page:

* The **Sticky buy button** block is not available.
* The product title is a second-level heading, so it does not compete with the main heading of the page.
* Choosing a variant does not change the page address, because the shopper is not on the product's own page.
* Opening the page does not add the product to the shopper's recently viewed products.
:::

## Mobile view example

{/* TODO: mobile screenshot */}
