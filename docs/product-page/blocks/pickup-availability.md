---
title: "Pickup availability"
sidebar_label: "Pickup availability"
description: "Show whether the selected variant can be picked up in store, with a drawer listing your pickup locations."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Pickup availability block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Pickup availability** block tells customers whether the selected variant can be picked up at one of your stores, for example *Pickup available at Main Street Store, Usually ready in 24 hours*. A link opens a drawer with all your pickup locations, their availability and their addresses.

{/* TODO: screenshot of the pickup line and the store drawer */}

To add the block, open the **Product information** section and click **Add block**. See [Product information](/product-page/product-information) for how blocks work on the product page.

## Before you start

The block uses Shopify's local pickup. To turn it on:

1. In your Shopify admin, go to **Settings > Shipping and delivery**.
2. Under **Local pickup**, click a location and turn on **This location offers local pickup**.
3. Choose the pickup time shown to customers, for example *Usually ready in 24 hours*, and save.
4. Make sure the product is stocked at that location.

When no location offers pickup for the selected variant, the block shows nothing. When the customer picks another variant, the block updates on its own.

## What customers see

* **Pickup available at** a location, with the pickup time, when the variant is in stock at the first pickup location Shopify lists (usually the closest one). Otherwise **Pickup currently unavailable at** that location.
* A link to **View store information** (one location) or **Check availability at other stores** (several locations).
* A drawer with the product, the selected variant and a list of every pickup location with its availability, pickup time, address and phone number.

## Settings

* **Enable advanced settings:** Enable this setting to change the text style of the pickup line. When it is on, these settings appear:
  * **Text style:** The font of the pickup line (options: Subtitle, Body).
  * **Text scale (desktop)** and **Text scale (mobile):** Make the text smaller or larger (50 to 300%).

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the block (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.
