---
title: "Description"
sidebar_label: "Description"
description: "Show the product description from your Shopify admin, as plain text or in a collapsible row."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Description block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Description** block shows the product description you wrote in your Shopify admin. You can show it in a collapsible row titled *Description*, which keeps the product details short, or as plain text that is always visible.

{/* TODO: screenshot of the description in a collapsible row */}

To add the block, open the **Product information** section and click **Add block**. You can also add it to the **Below gallery** area under the gallery. See [Product information](/product-page/product-information) for how blocks work on the product page.

The text, images and videos come from the **Description** field of the product in your Shopify admin. The title above it is always *Description*. To change that word, edit the theme's translations (**Online Store > Themes > ... > Edit default theme content**).

## Settings

* **Layout:** Show the description in a row that opens and closes, or as plain text under a title (options: Collapsible, Plain text).
* **Open by default:** Shown only for the Collapsible layout. Show the row open when the page loads.
* **Show bottom border:** Shown only for the Collapsible layout. Draw a line below the row. When it is on, **Line color** appears. Leave the color empty to use the theme's border color.

The open and close indicator of the row, an arrow or a plus and minus, is set in [Theme settings > Icon set](/theme-settings/icon-set) with **Accordion indicator**.

#### Title

* **Title font:** The font of the *Description* title (options: Body, Heading, Subheading).
* **Text scale (desktop)** and **Text scale (mobile):** Make the title smaller or larger (50 to 300%).

#### Icon

* **Image:** Upload your own icon image shown before the title.
* **Icon:** Or pick an icon from the theme's icon set. Choose **None** for no icon. An uploaded image is used instead of the icon.
* **Icon advanced settings:** Enable this setting to adjust the icon height (10 to 100 px) and the icon top margin (0 to 16 px), separately for desktop and mobile.

#### Visibility

* **Hide if content is empty:** Hide the whole block for products without a description. A description that holds only an image or a video still counts as content. In the theme editor the block stays visible with a short note, so you can still select it.

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the block (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

:::tip
To split a long description into several rows, such as *Ingredients* and *How to use*, store each part in a product metafield and show it with a [Collapsible row](/product-page/blocks/collapsible-row) block connected to that metafield.
:::
