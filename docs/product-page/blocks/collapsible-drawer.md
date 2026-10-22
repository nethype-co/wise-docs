---
title: "Collapsible drawer"
sidebar_label: "Collapsible drawer"
description: "Add a row that opens a side drawer with extra product information."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Collapsible drawer block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Collapsible drawer** block looks like a [Collapsible row](/product-page/blocks/collapsible-row), but instead of opening in place it slides a drawer in from the side of the screen. Use it for longer content that would push the rest of the product information too far down, such as a size guide, care instructions or your shipping policy.

{/* TODO: screenshot of the row and the open drawer */}

To add the block, open the **Product information** section and click **Add block**. See [Product information](/product-page/product-information) for how blocks work on the product page.

The block starts with a [Heading](/blocks/heading), a [Text](/blocks/text) block and a **Page content** block inside the drawer. The drawer's title is the same as the row's **Title**.

## Settings

* **Content alignment:** Align the content inside the drawer (options: Left, Center, Right).

#### Title

* **Title font:** Use the body, heading or subheading font for the title.
* **Title:** The text on the row, also shown at the top of the drawer.
* **Text scale (desktop)** and **Text scale (mobile):** Make the title smaller or larger (50 to 300%). This scales both the row title and the drawer title.

#### Icon

* **Image:** Upload your own icon, shown before the title.
* **Icon:** Or pick an icon from the theme's icon set.
* **Icon advanced settings:** Enable this setting to adjust **Icon height** (10 to 100 px) and **Icon top margin** (0 to 16 px), separately for desktop and mobile.

The arrow or plus sign on the right of the row is set for the whole store in [Icon set](/theme-settings/icon-set), under **Accordion indicator**.

#### Colors

* **Line color:** The color of the divider lines. Leave it empty to use the theme border color, or make it transparent to hide the line.

#### Visibility

* **Hide if content is empty:** Hide the row when the drawer has no text, image or video, for example when a block inside is connected to a metafield that is empty for this product. In the theme editor the row stays visible with a note.

A drawer whose blocks output nothing at all is always hidden on the storefront, even with this setting off.

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the row (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Content blocks

Click **Add block** inside the Collapsible drawer to build the drawer content. You can add theme blocks such as [Heading](/blocks/heading), [Text](/blocks/text), [Button](/blocks/button) or [Icon with text](/blocks/icon-with-text), a [Feature icons list](/product-page/blocks/feature-icons-list), [Feature tags](/product-page/blocks/feature-tags), and the two blocks below.

### Page content block

Shows the content of one of your store pages in the drawer, for example your shipping or returns page. Edit the page once in **Online Store > Pages** and every drawer that shows it updates.

* **Page:** The page whose content is shown. With no page selected, nothing is shown on the storefront.

### Media block

Shows an image or a video in the drawer.

* **Media type:** Show an image or a video.
* **Image** or **Video:** Upload the image, or select a video uploaded to Shopify. The video is muted, loops and plays while the drawer is open.
* **Custom play/pause button** and **Custom mute/unmute button:** Show the theme's own buttons on the video. Shown only for a video.
* **Height:** Choose **Adapt to media** to keep the media's own shape, or **Fixed height** to crop it to a set height.
* **Height (desktop)** and **Height (mobile):** The fixed height (200 to 1000 px). Shown only when **Fixed height** is selected.

:::tip
In the theme editor, select a block inside the drawer to open the drawer and see your changes.
:::

## Mobile view example

{/* TODO: mobile screenshot */}
