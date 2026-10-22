---
title: "Feature icons"
sidebar_label: "Feature icons"
description: "Show a grid of small icons with labels, such as Free shipping or Vegan, added by hand or from a product metafield."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Feature icons block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Feature icons** block shows a row or grid of small icons, each with a short label, for example *Free shipping*, *30-day returns* or *Vegan*. Use it for store benefits that apply to every product, or for product features that differ per product.

{/* TODO: screenshot of three feature icons under the buy buttons */}

To add the block, open the **Product information** section and click **Add block**. You can also add it to the **Below gallery** area under the gallery. See [Product information](/product-page/product-information) for how blocks work on the product page. The block starts with three **Feature icon** blocks.

## Where the icons come from

The block can show icons from two sources at the same time:

* **Feature icon blocks:** Icons you add by hand inside the block. They are the same on every product that uses the template. Use them for store benefits.
* **A product metafield:** Icons stored on each product, so every product can show its own. They appear after the Feature icon blocks.

### Setting up the metafield

The metafield is a list of metaobjects, so you set up each feature once and reuse it on many products.

1. In your Shopify admin, go to **Content > Metaobjects** (or **Settings > Custom data > Metaobject definitions**) and click **Add definition**. Name it, for example *Feature*.
2. Add these two fields, using exactly these keys:
   * `image`: **File** (image), the icon.
   * `label`: **Single line text**, the text shown under or next to the icon.
3. Save, then add an entry for each feature, for example *Vegan* with a leaf icon.
4. Go to **Settings > Custom data > Products**, add a definition named for example *Features* (`custom.features`), choose the type **Metaobject**, reference your *Feature* definition and select **List of entries**. Save.
5. Open a product, scroll to **Metafields** and pick its features.
6. In the theme editor, enter `custom.features` in the block's **Metafield** setting.

To show only metafield icons, remove the Feature icon blocks.

## Settings

* **Layout:** How the icon and the label are placed (options: Icon above text; Icon beside text, left aligned; Icon beside text, centered; Auto). **Auto** puts all icons in one row with equal widths, with the icon beside the text, and stacks the icon above the text when an item gets too narrow.
* **Show labels:** Show the text of each icon. Turn it off to show the icons only.
* **Metafield:** The namespace and key of the metaobject list metafield, for example `custom.features`. See [Setting up the metafield](#setting-up-the-metafield).

#### Desktop version and Mobile version

The same settings appear separately for desktop and mobile.

* **Items per row:** How many icons fit in one row (2 to 6). Not shown for the Auto layout.
* **Icon size:** The size of the icons (20 to 100 px on desktop, 20 to 80 px on mobile).
* **Text scale:** Make the labels smaller or larger (50 to 200%).
* **Advanced settings:** Enable this setting to fine-tune the spacing. Not shown for the Auto layout. When it is on, these settings appear:
  * **Gap between items:** The space between the icons (0 to 32 px).
  * **Icon container width:** A fixed width for the icon area (0 to 200 px), useful to line up labels when your icons have different widths. Set it to 0 to let each icon size itself.
  * **Icon top margin** and **Icon bottom margin:** The space above and below each icon (0 to 32 px).

#### Colors

* **Background color:** A background behind the whole block. When set, the block gets a little padding.
* **Text color:** The color of the labels.

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the block (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Feature icon block

Click a **Feature icon** inside the block to edit it.

* **Image:** Upload your own icon image.
* **Icon:** Or pick an icon from the theme's icon set. An uploaded image is used instead of the icon.
* **Text:** The label of the icon. You can use bold, italic and links.

An item without an image or an icon is not shown, even when it has text.
