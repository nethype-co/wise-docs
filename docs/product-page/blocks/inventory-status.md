---
title: "Inventory status"
sidebar_label: "Inventory status"
description: "Show whether the selected variant is in stock, with an optional stock count and progress bar."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Inventory status block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Inventory status** block tells customers whether the selected variant is in stock, for example *In stock* or *Low stock: 3 left*. You can also show a stock progress bar with messages such as *Hurry up! Only 5 items left in stock*, which changes color as stock runs low.

{/* TODO: screenshot of the inventory status with a progress bar */}

To add the block, open the **Product information** section and click **Add block**. See [Product information](/product-page/product-information) for how blocks work on the product page.

:::note
The block only works for variants whose inventory is tracked by Shopify (**Track quantity** turned on for the product in your Shopify admin). For other variants it shows nothing.
:::

## What customers see

Without the progress bar, the block shows one line with a colored dot:

* **In stock** (green): The stock is above the **Low inventory threshold**.
* **Low stock** (orange): The stock is at or below the **Low inventory threshold**.
* **Out of stock** (grey): The variant has no stock left.
* **In stock** (green) is also shown for a variant with no stock when you allow selling it while out of stock (**Continue selling when out of stock** in your Shopify admin).

With **Show inventory count** on, the lines include the number, for example *12 in stock* or *Low stock: 3 left*.

With the progress bar on, the in stock and low stock lines are replaced by your stock level messages. See [Progress bar](#progress-bar) below.

## Settings

* **Font:** The font of the status text (options: Body, Heading, Subheading).
* **Text scale (desktop)** and **Text scale (mobile):** Make the text smaller or larger (50 to 300%).
* **Low inventory threshold:** Show *Low stock* when the stock is at or below this number (0 to 100). Set it to 0 to always show *In stock* while the variant is available.
* **Show inventory count:** Show the exact number of items in stock.
* **Inventory count threshold:** Shown only when the count is on. Show the exact count only when the stock is at or below this number (0 to 99), for example to show *3 in stock* but just *In stock* when there are hundreds. Set it to 0 to always show the count.

#### Progress bar

* **Show progress bar:** Show a stock bar with a message. The settings below appear when it is on.
* **Progress bar max value:** The stock number that fills the whole bar. For example, with 100, a stock of 25 fills a quarter of the bar.
* **Progress bar style:** A single bar or a bar made of separate pieces (options: Continuous, Segmented). With **Segmented**, **Number of segments** appears (4 to 20).
* **Progress bar background:** The color of the empty part of the bar. Leave it empty for a light shade of the text color.
* **Number of stock levels:** How many stock levels you want to use (1 to 3). Each level has its own message and color.

#### High inventory, Medium inventory and Low inventory

Each level has the same four settings:

* **Threshold:** The level is used when the stock is at or below this number. Set it to 0 to turn the level off.
* **Message:** The text shown above the bar. Use `[quantity]` for the stock count and `[variant]` for the name of the selected variant, for example *Hurry up! Only [quantity] items left in stock*.
* **Secondary text:** A short text on the right of the message, for example *[quantity] left*. It supports `[quantity]` and `[variant]` too.
* **Color:** The color of the bar and of the message for this level. By default green for high, yellow for medium and red for low.

The lowest level that matches wins. For example, with High at 1000, Medium at 20 and Low at 5, a stock of 12 shows the Medium message and color, and a stock of 3 shows the Low message.

:::note
When the progress bar is on and the stock is above every threshold, the block shows nothing for that variant. Set the High inventory threshold high enough, for example 1000, if you always want a message.
:::

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the block (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.
