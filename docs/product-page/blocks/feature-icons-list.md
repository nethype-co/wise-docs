---
title: "Feature icons list"
sidebar_label: "Feature icons list"
description: "Show a grid of icons with a title and a description, from a product metafield or added by hand."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Feature icons list block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Feature icons list** block shows a grid of items, each with an icon, a short title and a description. Use it for key ingredients, materials, product benefits or care symbols. The items can come from a product metafield, so each product shows its own list, or from **Item** blocks you add by hand.

{/* TODO: screenshot of a two-column feature icons list */}

To add the block, open the **Product information** section and click **Add block**. See [Product information](/product-page/product-information) for how blocks work on the product page. You can also place it in the **Below gallery** area, or inside a [Collapsible row](/product-page/blocks/collapsible-row), a [Collapsible drawer](/product-page/blocks/collapsible-drawer) or a [Popup](/product-page/blocks/information-popup).

## Where the items come from

* If the product has items in the metafield you enter in **Metafield**, those items are shown and the Item blocks are ignored.
* If the metafield is empty for the product, or **Metafield** is empty, the **Item** blocks are shown instead.
* With neither, the block is hidden on the storefront. In the theme editor you see a short hint instead.

### Setting up the metafield

The metafield must be a list of metaobjects.

1. In your Shopify admin, go to **Settings > Custom data > Metaobjects** and click **Add definition**, for example *Feature icon*.
2. Add these fields, using exactly these keys:
   * `image`: a **File** field (images) for the icon.
   * `title` (or `label`): a **Single line text** field for the title.
   * `description`: optional, a **Single line text**, **Multi-line text** or **Rich text** field.
3. Add an entry for each feature, for example *Vitamin C* with its icon and a short text.
4. Go to **Settings > Custom data > Products**, click **Add definition**, choose the type **Metaobject**, pick your *Feature icon* definition and select **List of values**. Note the namespace and key, for example `custom.feature_icons`.
5. On each product, pick the entries that apply, in the order you want them shown.
6. In the theme editor, enter `custom.feature_icons` in the block's **Metafield** setting.

:::tip
If an entry has no `title`, the theme uses its `label` field. This lets you reuse metaobjects you already have for [Feature tags](/product-page/blocks/feature-tags).
:::

## Settings

* **Metafield:** The namespace and key of the product metafield, for example `custom.feature_icons`.

#### Desktop version

* **Columns (desktop):** How many items sit in one row (options: 1, 2, 3, 4).
* **Text alignment:** Align the items left, center or right.
* **Icon position:** Place the icon above the text (Top) or beside it (Left).
* **Icon size:** The size of the icons (16 to 64 px).
* **Gap:** The space between items (8 to 40 px).
* **Icon and text spacing:** The space between the icon and its text (0 to 40 px).

#### Mobile version

The same settings for mobile: **Columns (mobile)** (options: 1, 2, 3), **Text alignment (mobile)**, **Icon position (mobile)**, **Icon size (mobile)**, **Gap (mobile)** and **Icon and text spacing (mobile)**.

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the block (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Item block

The block starts with three **Item** blocks. Click **Add block** inside Feature icons list to add more. Items are shown only when the metafield gives no items for the product.

* **Icon:** Pick an icon from the theme's icon set.
* **Image:** Upload your own icon image. It is shown instead of the icon.
* **Title:** The item's title, shown in bold.
* **Description:** A short text below the title.

## Mobile view example

{/* TODO: mobile screenshot */}
