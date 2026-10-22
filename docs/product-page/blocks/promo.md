---
title: "Promo"
sidebar_label: "Promo"
description: "Add a highlighted text box to the product page for offers, notes or announcements."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Promo block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Promo** block is a simple text box with its own background color. Use it to draw attention to a short message on the product page, for example *Buy 2, get 1 free*, a launch note or a reminder about gift wrapping.

{/* TODO: screenshot of a promo box below the price */}

To add the block, open the **Product information** section and click **Add block**. See [Product information](/product-page/product-information) for how blocks work on the product page.

## Settings

* **Text:** The message. You can use bold, italics and links.
* **Text alignment:** Align the text (options: Left, Center, Right).

#### Colors

* **Text color:** The color of the text, including headings and links inside it.
* **Background color:** The color of the box. Leave it empty for no background.

#### Visibility

* **Hide if content is empty:** Hide the block when **Text** is empty, for example when it is connected to a product metafield that has no value for this product. In the theme editor the block stays visible with a note.

:::tip
To show a different message on each product, click the **Connect dynamic source** button next to **Text** and pick a product metafield of type **Rich text**. Create it first in **Settings > Custom data > Products**. Then turn on **Hide if content is empty** so products without a message show nothing.
:::

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the block (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.
