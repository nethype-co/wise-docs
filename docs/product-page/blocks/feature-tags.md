---
title: "Feature tags"
sidebar_label: "Feature tags"
description: "Show product features such as Vegan or Gluten free as small tags, from a metafield or added by hand."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Feature tags block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Feature tags** block shows short product features as a row of small outlined tags, for example *Vegan*, *Gluten free* or *Organic cotton*. The tags can come from a product metafield, so every product shows its own features, or from **Tag** blocks you add by hand.

{/* TODO: screenshot of feature tags with a "Free from" label */}

To add the block, open the **Product information** section and click **Add block**. See [Product information](/product-page/product-information) for how blocks work on the product page. You can also add Feature tags inside a [Collapsible row](/product-page/blocks/collapsible-row), a [Collapsible drawer](/product-page/blocks/collapsible-drawer) or a [Popup](/product-page/blocks/information-popup).

## Where the tags come from

The block first looks at the metafield you enter in **Metafield**:

* If the product has tags in that metafield, those tags are shown and your Tag blocks are ignored.
* If the metafield is empty for the product, or you left **Metafield** empty, the **Tag** blocks you added inside Feature tags are shown instead.
* If there are no tags from either source, the block is hidden on the storefront.

### Setting up the metafield

You can use one of two metafield types.

**Option 1: a list of text (simplest).**

1. In your Shopify admin, go to **Settings > Custom data > Products** and click **Add definition**.
2. Enter a name, for example *Feature tags*. Shopify creates the namespace and key, for example `custom.feature_tags`.
3. Choose the type **Single line text** and select **List of values**. Save.
4. Open a product, scroll to **Metafields** and enter one value per tag.
5. In the theme editor, enter `custom.feature_tags` in the block's **Metafield** setting.

**Option 2: a list of metaobjects (reusable tags with their own icons).**

1. Go to **Settings > Custom data > Metaobjects** and add a definition, for example *Feature tag*, with a **Single line text** field whose key is `label` and, if you want a picture per tag, a **File** field (images) whose key is `image`.
2. Add an entry for each tag you use, for example *Vegan* with a leaf image.
3. Go to **Settings > Custom data > Products**, add a definition of type **Metaobject**, pick your *Feature tag* definition and select **List of values**.
4. On each product, pick the tags that apply.
5. Enter the metafield's namespace and key in the block's **Metafield** setting.

:::note
The field keys must be exactly `label` and `image`. With other keys the tags appear without text or without their image.
:::

## Settings

* **Metafield:** The namespace and key of the product metafield, for example `custom.feature_tags`.
* **Label:** Optional text shown in bold before the tags, for example *Free from*.
* **Maximum tags:** How many metafield tags to show at most (1 to 20). It does not limit Tag blocks.
* **Tag font size** and **Tag font size on mobile:** The text size of the tags (10 to 24 px).
* **Tag text style:** Use the body font or the button font for the tags (options: Body, Button).

#### Icon

An icon shown before every tag.

* **Image:** Upload your own small icon image. It is used instead of the icon below.
* **Icon:** Or pick an icon from the theme's icon set (or None).

A metaobject tag with its own `image` shows that image instead. A Tag block with its own image or icon shows its own.

#### Colors

* **Text color**, **Background color** and **Border color:** The colors of the tags. Empty colors follow the section's text color, with a transparent background.

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the block (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Tag block

Click **Add block** inside Feature tags to add a **Tag** by hand. Tag blocks are shown only when the metafield gives no tags for the product.

* **Text:** The text of the tag.
* **Image:** An icon image for this tag only.
* **Icon:** An icon from the theme's icon set for this tag only. When both are empty, the tag uses the icon set on the Feature tags block.

## Mobile view example

{/* TODO: mobile screenshot */}
