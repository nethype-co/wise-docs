---
title: "Estimated delivery"
sidebar_label: "Estimated delivery"
description: "Show customers when their order is expected to arrive."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Estimated delivery block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Estimated delivery** block shows a short line with your label, for example *Estimated delivery:*, followed by the expected delivery date or date range, with an icon in front. You enter a number of days, a range or a fixed date, and the theme works out the delivery date from today's date in the customer's browser.

{/* TODO: screenshot of the estimated delivery line */}

To add the block, open the **Product information** section and click **Add block**. See [Product information](/product-page/product-information) for how blocks work on the product page.

:::tip
Need cutoff times, holidays or a step-by-step timeline? Use the [Shipping timeline](/product-page/blocks/shipping-timeline) block instead.
:::

## Settings

* **Label:** The text shown before the date, for example *Estimated delivery:*.
* **Delivery time:** How long delivery takes. Enter one of:
  * a number of days, for example `3`, to show one date;
  * a range, for example `3-5`, to show a date range;
  * a fixed date in the format `YYYY-MM-DD`, for example `2026-12-24`, to always show that date.
* **Skip weekends when counting:** Count only Monday to Friday when adding the days, so the estimate never falls on a weekend.
* **Text case:** Show the text as typed (Normal) or in capital letters (Uppercase).

:::tip
To use a different delivery time for each product, click the **Connect dynamic source** button next to **Delivery time** and pick a product metafield of type **Single line text**. Create it first in **Settings > Custom data > Products**, then fill in a value such as `2-4` on each product.
:::

#### Icon

* **Image:** Upload your own icon image.
* **Icon:** Or pick an icon from the theme's icon set. The default is a truck.
* **Icon advanced settings:** Enable this setting to adjust the icon size and position: **Icon height (desktop)** (10 to 64 px), **Icon height (mobile)** (10 to 48 px), **Icon top margin** for desktop and mobile (0 to 16 px) and **Icon and text gap** (0 to 24 px).

#### Colors

* **Text color:** The color of the text.
* **Background color:** A background behind the line. When you set one, the block gets some inner padding.

#### Visibility

* **Hide if content is empty:** Hide the block when **Delivery time** is empty, for example when it is connected to a metafield that has no value for this product. In the theme editor the block stays visible with a note.

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the block (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.
