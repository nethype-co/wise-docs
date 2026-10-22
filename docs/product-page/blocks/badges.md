---
title: "Badges"
sidebar_label: "Badges"
description: "Show the product badges, such as Sold out and your own tag badges, in the product details."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Badges block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Badges** block shows the product's badges as small labels in the product details, for example *New*, *Bestseller* or *Sold out*. They look the same as the badges on product cards and on the gallery.

{/* TODO: screenshot of badges above the product title */}

To add the block, open the **Product information** section and click **Add block**. See [Product information](/product-page/product-information) for how blocks work on the product page.

## Which badges are shown

The badges are set up once for the whole store in [Theme settings > Product badges](/theme-settings/product-badges):

* **Sold out:** Shown when the selected variant is sold out, unless you hide it in this block. It updates when the customer picks another variant.
* **Badge 1 to Badge 4:** Your own badges. Each one appears on products that have the matching **Tag** in your Shopify admin. For example, enter the tag `new` and the content *New in*, then add the tag `new` to a product.

When no badge applies to the product, the block is hidden on the storefront, spacing included.

:::note
The sale discount percentage is not a badge in this block. It is shown next to the price by the [Price](/product-page/blocks/price) block.
:::

## Settings

* **Hide sold out badge:** Leave the Sold out badge out of this block. It is on by default, because the add to cart button already says *Sold out*. The badge on the gallery is not affected.

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the block (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

:::tip
To show badges on top of the product images instead, turn on **Show badges on product images** in the **Product gallery** block of the [Product information](/product-page/product-information) section.
:::
