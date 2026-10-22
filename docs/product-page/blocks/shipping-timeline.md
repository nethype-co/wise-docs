---
title: "Shipping timeline"
sidebar_label: "Shipping timeline"
description: "Show an order, ship and delivery timeline with a cutoff countdown and a free shipping message."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Shipping timeline block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Shipping timeline** block shows three steps, *Ordered*, *Shipped* and *Delivered*, each with its date, so customers see at a glance when their order will arrive. Above the steps, an optional countdown such as *Order within [time left] to ship today* creates urgency, and below them a line can show how far the customer is from free shipping.

{/* TODO: screenshot of the shipping timeline with countdown and free shipping line */}

To add the block, open the **Product information** section and click **Add block**. See [Product information](/product-page/product-information) for how blocks work on the product page.

## How the dates are calculated

The dates are worked out live in the customer's browser, using your store's time zone (set in **Settings > General** in your Shopify admin):

1. **Ordered** is always today.
2. **Shipped** is today if the order is placed before the cutoff time on a shipping day and the processing time is 0. Otherwise it moves to the next shipping day, plus the processing days.
3. **Delivered** adds the delivery time to the ship date, counting only delivery days. When the delivery time is a range, a date range is shown.

Days listed under **Holidays** are skipped for both shipping and delivery.

## Settings

* **Title font:** Use the body, heading or subheading font for the title.
* **Title:** The heading above the timeline, for example *Shipping*. Leave it empty to hide it.
* **Text scale (desktop)** and **Text scale (mobile):** Make the title smaller or larger (50 to 300%).

#### Delivery rules

* **Order cutoff hour** and **Order cutoff minutes:** The time of day after which orders ship on the next shipping day (hour 0 to 23, minutes 0 to 55 in steps of 5), in your store's time zone.
* **Shipping days:** The days you ship orders (options: Monday to Friday, Monday to Saturday, Every day).
* **Delivery days:** The days your carrier delivers (options: Monday to Friday, Monday to Saturday, Every day).
* **Processing time (days):** How many shipping days you need to prepare an order (0 to 10). With 0, orders placed before the cutoff ship the same day.
* **Delivery time, from (days)** and **Delivery time, to (days):** How long the carrier takes, in delivery days (0 to 30). Use the same number in both for a single date.
* **Delivery time override:** Optional. Enter a number (`3`), a range (`3-5`) or a fixed delivery date (`2026-12-24`) to replace the two settings above.
* **Holidays:** Days with no shipping or delivery, one per line. Write `2026-12-25` for a single date or `12-25` for the same day every year. In the theme editor, lines that are not a valid date are listed below the block so you can fix them.

:::tip
To use a different delivery time for each product, click the **Connect dynamic source** button next to **Delivery time override** and pick a product metafield of type **Single line text**. Create it first in **Settings > Custom data > Products**, then enter a value such as `5-7` on the products that ship more slowly. Products without a value use the from and to settings.
:::

#### Countdown

* **Show countdown:** Show a line above the steps that counts down to the next cutoff, for example *Order within [time left] to ship today*. When today's cutoff has passed or today is not a shipping day, the line says the order ships tomorrow or on a later date instead.
* **Countdown icon:** Your own icon for the countdown line. Leave it empty to use the built-in stopwatch icon.

#### Steps

* **Step 1 label**, **Step 2 label** and **Step 3 label:** The names of the three steps (default: Ordered, Shipped, Delivered).
* **Step 1 icon**, **Step 2 icon** and **Step 3 icon:** Your own icon for each step. Leave empty to use the built-in icons.

#### Free shipping

This line uses the **Free shipping minimum amount** from [Cart add-ons](/theme-settings/cart-add-ons) in Theme settings, including any amounts you set per currency. When that amount is 0 or empty, the line is not shown.

* **Show free shipping:** Show the free shipping line below the steps.
* **Free shipping text:** The main message. Type `||threshold||` where the minimum amount should appear, for example *Free standard shipping over ||threshold||*.
* **Amount left text:** Added after the main message when the cart has items but has not reached the minimum yet. Type `||amount||` where the remaining amount should appear, for example *||amount|| to go*.
* **Qualified text:** Shown instead once the cart total reaches the minimum, for example *Your order ships free*.
* **Shipping note:** An extra line at the bottom, for example *Express and overnight at checkout.* Leave it empty to hide it.
* **Text alignment (desktop)** and **Text alignment (mobile):** Align the free shipping line and the note (options: Left, Center, Right).

#### Colors

* **Text color:** The color of the text.
* **Accent color:** The color of the current step's circle. Leave it empty to use your button color.
* **Background color:** A background behind the whole block. When you set one, the block gets some inner padding.

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the block (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Mobile view example

{/* TODO: mobile screenshot */}
