---
title: "Price"
sidebar_label: "Price"
description: "Show the price of the selected variant, with the sale price, tax note and installment message."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Price block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Price** block shows the price of the selected variant and updates when the customer picks another variant. When the variant is on sale, it also shows the compare-at price and, if you turned it on, the discount percentage.

{/* TODO: screenshot of a sale price with compare-at price and discount */}

To add the block, open the **Product information** section and click **Add block**. See [Product information](/product-page/product-information) for how blocks work on the product page.

## What the block shows

* **Price:** The price of the selected variant. If the customer chose a subscription plan in the [Subscription widget](/product-page/blocks/subscription-widget), the plan price is shown.
* **Compare-at price and discount:** Shown when the variant has a compare-at price higher than its price. Whether the compare-at price and the discount percentage (for example -20%) appear is set in [Theme settings > Product badges](/theme-settings/product-badges), under **Sale badge**.
* **Volume pricing note:** "Volume pricing available" appears when the product has quantity price breaks, for example from a B2B catalog.
* **Installments:** If you offer Shop Pay Installments, Shopify's installment message is shown under the price automatically.

## Settings

* **Show taxes included:** Show "Tax included." under the price. It only appears when your store's prices include tax (**Settings > Taxes and duties** in your Shopify admin).
* **Show shipping policy:** Show "Shipping calculated at checkout." with a link to your shipping policy. It only appears when you have written a shipping policy in **Settings > Policies**.
* **Text scale (desktop)** and **Text scale (mobile):** Make the price smaller or larger (50 to 300%). The size is based on the price size in [Theme settings > Typography](/theme-settings/typography).

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the block (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.
