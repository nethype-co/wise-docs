---
title: "Sticky buy button"
sidebar_label: "Sticky buy button"
description: "Show an add to cart bar at the bottom of the screen once the main add to cart button scrolls out of view."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Sticky buy button block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Sticky buy button** block adds a bar to the bottom of the screen with an add to cart button. It appears once the customer scrolls past the main add to cart button, so they can buy at any time while reading the rest of the page. On desktop the bar can also show the product image, title and price.

{/* TODO: screenshot of the sticky bar on mobile and desktop */}

To add the block, open the **Product information** section and click **Add block**. See [Product information](/product-page/product-information) for how blocks work on the product page. Where you place the block in the list does not matter: the bar always appears at the bottom of the screen.

:::note
The bar uses the [Buy buttons](/product-page/blocks/buy-buttons) block of the same section, so that block has to be present. The bar adds the variant, quantity, options and plan the customer chose there. The image and price follow the selected variant, and the button says *Sold out* when the variant is sold out.
:::

## Settings

* **Show on:** Where the bar appears (options: Mobile only, Desktop only, Mobile and desktop).
* **Title font:** The font of the product title in the bar (options: Body, Heading, Subheading).
* **Layout:** The shape of the bar (options: Full-width bar, Floating bar). A full-width bar sits along the bottom edge of the screen. A floating bar is narrower, centered and sits a little above the bottom edge.
* **Button style:** The style of the add to cart button (options: Primary, Secondary). The look of each style is set in [Theme settings > Colors](/theme-settings/colors).
* **Background color:** The background of the bar. Leave it empty to use the section background, or the theme background if the section has none.
* **Background blur:** Blur what is behind the bar (0 to 35 px). It only shows with a background color that is partly transparent.
* **Show shadow:** Add a soft shadow to the bar.

#### Product

These settings apply to desktop only. On mobile the bar holds just the button.

* **Show product image:** Show the image of the selected variant, or the product image (options: Yes, No).
* **Product info:** What to show next to the image (options: Title only, Price only, Title and price, None). When there is no image, title or price, the button is centered in the bar.
