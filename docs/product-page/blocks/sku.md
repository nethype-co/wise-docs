---
title: "SKU"
sidebar_label: "SKU"
description: "Show the SKU of the selected variant on the product page."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the SKU block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **SKU** block shows the SKU (stock keeping unit) of the selected variant. It updates when the customer picks another variant. Use it when your customers order by product code, for example in B2B or spare parts stores.

{/* TODO: screenshot of the SKU under the product title */}

To add the block, open the **Product information** section and click **Add block**. See [Product information](/product-page/product-information) for how blocks work on the product page.

The SKU comes from the **SKU** field of each variant in your Shopify admin (open the product, then the variant, under **Inventory**). When the selected variant has no SKU, the block shows nothing.

## Settings

The block has no settings of its own apart from spacing.

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the block (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.
