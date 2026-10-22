---
title: "Subscription widget"
sidebar_label: "Subscription widget"
description: "Let customers choose between a one-time purchase and a subscription plan on the product page."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Subscription widget block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Subscription widget** block shows the purchase options of a product as selectable cards: one card for a one-time purchase and one card for each subscription plan, for example *Subscribe and save 15%*. When the customer picks an option, the price on the page updates to match.

{/* TODO: screenshot of the subscription widget with one-time and subscription cards */}

To add the block, open the **Product information** section and click **Add block**. See [Product information](/product-page/product-information) for how blocks work on the product page.

## Before you start

The plans come from a subscriptions app, such as **Shopify Subscriptions**, Recharge, Seal or Appstle. Install the app, create a subscription plan and add your products to it. The theme reads the plans Shopify stores for each product, so you do not need the app's own widget.

The block shows nothing on products without plans, and on products that are sold out. You can keep it in your product template for all products.

## How it works

* **One-time purchase card:** Shows the normal price of the selected variant. It is left out when the product can only be bought as a subscription.
* **Subscription cards:** One card per plan group in your app. If a group has several delivery frequencies, for example every 2, 4 or 6 weeks, the card shows a dropdown to pick the frequency. With a single frequency, the plan name is shown instead.
* **Prices:** Each card can show its price, and the subscription price is shown with the regular price crossed out when the plan gives a discount.

The chosen plan is sent along with the [Buy buttons](/product-page/blocks/buy-buttons) block, so keep it in the same section. The [Price](/product-page/blocks/price) block, the price in the add to cart button and the [Sticky buy button](/product-page/blocks/sticky-buy-button) all show the price of the selected option.

## Settings

* **Banner text:** A small banner shown above each subscription card, for example *Best value*. Leave it empty to hide it.
* **Show prices in the options:** Show the price on each card.
* **Display order:** Which card comes first (options: Subscription first, One-time purchase first). The first card is selected when the page opens.
* **Title font:** The font of the card titles (options: Body, Heading).
* **Space above description:** The space between a card title and its description (0 to 32 px).

#### Subscription

* **Description:** Text shown under the frequency of each subscription card, for example a list of benefits.
* **Show tick icons:** Replace the bullets of a list in the description with tick icons.

#### One-time purchase

* **Label:** The title of the one-time purchase card.
* **Description:** Text shown under the one-time purchase title.
* **Show tick icons:** Replace the bullets of a list in the description with tick icons.

:::tip
Write the benefits as a bulleted list in the **Description** field, for example *Free shipping*, *Skip or cancel anytime*. With **Show tick icons** on, each line gets a tick.
:::

#### Colors

Leave a color empty to use the theme colors.

* **Accent color:** The selected circle, the tick icons and the banner.
* **Background color** and **Selected background color:** The background of the cards and of the selected card.
* **Heading color**, **Banner text color** and **Text color:** The colors of the card titles, the banner text and the descriptions.
* **Border color** and **Selected border color:** The borders of the cards and of the selected card.
* **Price color**, **Sale price color** and **Compare-at price color:** The colors of the regular price, the discounted price and the crossed out price.

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the block (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.
