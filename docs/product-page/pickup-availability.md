---
title: "Pickup availability"
sidebar_label: "Pickup availability"
description: "A helper section that loads in-store pickup information when a customer changes the variant."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Pickup availability section?

<SectionMeta version="v1.0.0" />

The **Pickup availability** section is a helper section that works behind the scenes. You never add it to a page and it has no settings. When a customer picks a different variant on a product page, the theme loads this section in the background to show whether the new variant can be picked up in store.

What customers actually see is the [Pickup availability block](/product-page/blocks/pickup-availability), which you add to the [Product information](/product-page/product-information) section. Set up the look of the pickup line there.

{/* TODO: desktop screenshot or video */}

## Section settings

The section has no settings. You may see it listed in the code of your theme, but it does not appear in the **Add section** menu of the theme editor.

## Turning on local pickup

The pickup information comes from Shopify. To make it appear:

1. In your Shopify admin, go to **Settings > Shipping and delivery**.
2. Under **Local pickup**, click a location and turn on **This location offers local pickup**.
3. Set the pickup time shown to customers, for example "Usually ready in 24 hours", and save.
4. Make sure the products are stocked at that location.
5. Add the [Pickup availability block](/product-page/blocks/pickup-availability) to the Product information section in the theme editor.

:::note
If no location offers pickup for the selected variant, nothing is shown on the product page.
:::
