---
title: "Popup"
sidebar_label: "Popup"
description: "Add a text link that opens a popup with shipping details, a care guide, a table or other content."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Popup block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Popup** block adds a small underlined link, for example *More information* or *Shipping details*, that opens a centered popup window. You build the content of the popup from blocks, so it can hold text, a store page, an image, a feature list or a table read from a product metafield.

{/* TODO: screenshot of the link and the open popup */}

To add the block, open the **Product information** section and click **Add block**, then pick **Popup**. See [Product information](/product-page/product-information) for how blocks work on the product page.

The block starts with a [Heading](/blocks/heading) and a [Text](/blocks/text) block inside the popup.

## Settings

* **Link text:** The text of the link. It is also used as the title at the top of the popup.
* **Icon:** An icon shown before the link text, from the theme's icon set (or None).

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the link (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

:::note
The link only shows on your store when **Link text** is filled in and at least one block inside the popup shows something. For example, if the popup holds only a Metafield table and the product has no value in that metafield, the link is hidden on that product. In the theme editor the link stays visible with a note.
:::

## Content blocks

Click **Add block** inside the Popup to build its content. You can add theme blocks such as [Heading](/blocks/heading), [Text](/blocks/text), [Button](/blocks/button) or [Icon with text](/blocks/icon-with-text), a [Feature icons list](/product-page/blocks/feature-icons-list), [Feature tags](/product-page/blocks/feature-tags), and the blocks below.

:::tip
In the theme editor, select a block inside the Popup to open the popup and see your changes.
:::

### Page content block

Shows the content of one of your store pages in the popup, for example your shipping policy or a care guide. Edit the page once in **Online Store > Pages** and every popup that shows it updates.

* **Page:** The page whose content is shown. With no page selected, nothing is shown on the storefront.

### Media block

Shows an image or a video in the popup.

* **Media type:** Show an image or a video.
* **Image** or **Video:** Upload the image, or select a video uploaded to Shopify. The video is muted and loops.
* **Custom play/pause button** and **Custom mute/unmute button:** Show the theme's own buttons on the video. Shown only for a video.
* **Height:** Choose **Adapt to media** to keep the media's own shape, or **Fixed height** to crop it to a set height.
* **Height (desktop)** and **Height (mobile):** The fixed height (200 to 1000 px). Shown only when **Fixed height** is selected.

### Metafield table block

Shows a table that you type into a product metafield, for example a size chart or nutrition facts. Each product can have its own table.

* **Table metafield:** The namespace and key of the metafield, for example `custom.size_chart`.
* **Striped table rows:** Shade every other row of the table.

To set up the metafield:

1. In your Shopify admin, go to **Settings > Custom data > Products** and click **Add definition**.
2. Enter a name, for example *Size chart*, and choose the type **Multi-line text** (one value). Save.
3. Open a product and type the table into the metafield:
   * Put each table row on its own line.
   * Separate the cells with a vertical bar `|`.
   * Start a cell with `#` to make it a heading cell.
   * Empty lines are ignored.
4. In the theme editor, enter the namespace and key, for example `custom.size_chart`, in the block's **Table metafield** setting.

For example, this metafield value:

```
#Size | #Chest | #Waist
S | 88 cm | 72 cm
M | 96 cm | 80 cm
L | 104 cm | 88 cm
```

shows a table with a heading row and three size rows. Wide tables scroll sideways on small screens.

When the product has no value in the metafield, the table shows nothing.

## Mobile view example

{/* TODO: mobile screenshot */}
