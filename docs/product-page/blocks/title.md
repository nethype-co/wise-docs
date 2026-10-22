---
title: "Title"
sidebar_label: "Title"
description: "Show the product title as the page heading, with an optional brand line above it."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Title block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Title** block shows the name of the product as the main heading of the page. You can add a short brand line above it, for example the brand or collection name.

{/* TODO: screenshot of the product title with a brand line */}

To add the block, open the **Product information** section and click **Add block**. See [Product information](/product-page/product-information) for how blocks work on the product page.

## Settings

* **Brand:** Text shown above the title. Leave it empty to hide the line. To show each product's own vendor, click the **Connect dynamic source** icon next to the field and choose **Vendor**.
* **Link brand to the vendor collection:** Shown only when **Brand** has text. Turns the brand line into a link to a page that lists all products from the product's vendor.
* **Text scale (desktop)** and **Text scale (mobile):** Make the title smaller or larger (50 to 300%). The size is based on the heading size in [Theme settings > Typography](/theme-settings/typography).

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the block (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

:::note
The vendor link uses the product's **Vendor** field in your Shopify admin, even when the brand line shows other text. If a product has no vendor, the brand line is shown without a link.
:::
