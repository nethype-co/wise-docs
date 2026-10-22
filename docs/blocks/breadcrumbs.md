---
title: "Breadcrumbs"
sidebar_label: "Breadcrumbs"
description: "Show customers where they are in your store, for example Home / Collection / Product, inside a banner or another section."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Breadcrumbs block?

<SectionMeta version="v1.0.0" availability="Theme block" />

The **Breadcrumbs** block shows a short trail of links to the page the customer is on, for example *Home / Dresses / Summer dress*. Customers can click a step to go back. It is built to sit inside a banner, where it can be pinned to the top or bottom edge, but you can add it anywhere theme blocks are allowed.

{/* TODO: screenshot of breadcrumbs pinned to the bottom of an image banner */}

## Where can I use it?

Breadcrumbs is a theme block, so you can add it to any section or block that shows **Add block** in the theme editor, for example:

* [Image banner](/sections/banners/image-banner) content, for example at the top of a collection page
* [Image with text](/sections/storytelling/image-with-text), inside the **Image with text container**
* [Rich text](/sections/text/rich-text), or the **Header** block of most sections

See [How sections and blocks work](/getting-started/sections-and-blocks) for how to add a block.

:::note
The trail starts with **Home** and adds the collection, product, page, blog or article the customer is on. On pages where the trail would only say "Home", such as the home page, search or cart, the block shows nothing. To show breadcrumbs as their own bar instead, use the [Breadcrumbs](/pages/breadcrumbs) section.
:::

## Settings

* **Text color:** The color of the breadcrumbs. Leave it empty to use the color of the section.

#### Desktop version

* **Pin to banner edge:** Pin the breadcrumbs to the top or bottom edge of the banner instead of placing them with the other content. Pinning works in the [Image banner](/sections/banners/image-banner) and [Image with text](/sections/storytelling/image-with-text) sections. In other sections, the breadcrumbs stay in their place among the blocks.
* **Vertical alignment:** Pin the breadcrumbs to the top or the bottom edge (options: Top, Bottom). Shown only when pinning is on.
* **Horizontal alignment:** Place the pinned breadcrumbs on the left, in the center or on the right (options: Left, Center, Right, Inherit). **Inherit** follows the alignment of the content. Shown only when pinning is on.

#### Mobile version

The same three settings for mobile: **Pin to banner edge**, **Vertical alignment** and **Horizontal alignment**. Pinning on mobile works only when the text is shown over the image. When the text is placed below the image on mobile, the breadcrumbs stay with the text.
