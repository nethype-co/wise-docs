---
title: "Bullet points"
sidebar_label: "Bullet points"
description: "Show a short list of key product features, from a product metafield or your own text."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Bullet points block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Bullet points** block shows a short list of the product's key features, for example *Vegan*, *30 servings per pack* or *Free shipping over $50*. Each product can have its own list from a metafield, and you can write a default list for products that have none.

{/* TODO: screenshot of bullet points with check mark icons */}

To add the block, open the **Product information** section and click **Add block**. You can also add it to the **Below gallery** area under the gallery. See [Product information](/product-page/product-information) for how blocks work on the product page.

## Where the bullet points come from

1. If the product has a value in the metafield you enter in **Metafield**, that value is shown.
2. Otherwise the text in **Default text** is shown, one bullet per line.

### Setting up the metafield

1. In your Shopify admin, go to **Settings > Custom data > Products** and click **Add definition**.
2. Enter a name, for example *Key features*. Shopify creates the namespace and key, for example `custom.key_features`.
3. Choose one of these types and save:
   * **Multi-line text:** Write one bullet per line.
   * **Single line text** with **List of values** selected: Add one entry per bullet.
4. Open a product, scroll to **Metafields** and fill in the bullet points.
5. In the theme editor, enter `custom.key_features` in the block's **Metafield** setting.

## Settings

* **Metafield:** The namespace and key of the product metafield, for example `custom.features`.
* **Default text:** The bullet points used when the product's metafield is empty, one per line. Leave it empty to show nothing for those products.
* **Use an icon instead of a bullet:** Replace the round bullets with an icon. When it is on, these settings appear:
  * **Image:** Upload your own icon image.
  * **Icon:** Or pick an icon from the theme's icon set. An uploaded image is used instead of the icon.
  * **Icon height (desktop)** and **Icon height (mobile):** The size of the icon (10 to 100 px).
  * **Icon top margin (desktop)** and **Icon top margin (mobile):** Move the icon down to line it up with the text (0 to 16 px).

#### Visibility

* **Hide if content is empty:** Hide the block when there are no bullet points for the product. In the theme editor the block stays visible with a short note, so you can still select it.

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the block (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.
