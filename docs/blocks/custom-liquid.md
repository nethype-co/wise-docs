---
title: "Custom Liquid"
sidebar_label: "Custom Liquid"
description: "Add app snippets or your own Liquid code inside a section."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Custom Liquid block?

<SectionMeta version="v1.0.0" availability="Theme block" />

The **Custom Liquid** block lets you add your own code inside a section: an app snippet, an embed code from another service, or Shopify Liquid code that shows something the theme has no setting for. Because it sits inside a section, the code appears exactly where you place the block, for example right under a product's price.

{/* TODO: screenshot of the Custom Liquid block in the theme editor */}

## Where can I use it?

Custom Liquid is a theme block, so you can add it to any section or block that shows **Add block** in the theme editor, for example:

* The [product page](/product-page/product-information), for example to show a metafield or an app widget between the product information blocks
* The cart and the cart drawer
* [Rich text](/sections/text/rich-text) and [Image with text](/sections/storytelling/image-with-text)
* [Image banner](/sections/banners/image-banner) content and the [footer](/header-footer/footer)

See [How sections and blocks work](/getting-started/sections-and-blocks) for how to add a block.

To add code as a separate, full section instead, use the [Custom Liquid section](/sections/other/custom-liquid).

## Settings

* **Liquid code:** Paste or write your code here. You can use HTML, CSS, JavaScript and [Liquid](https://shopify.dev/docs/api/liquid). The code can use the objects of the page it is on, for example `product` on a product page.

:::note
When the field is empty, the block shows nothing. The block adds only a small space below your code. Code that breaks the layout can affect the blocks around it, so preview the page on desktop and mobile after you save.
:::
