---
title: "Countdown with discount"
sidebar_label: "Countdown with discount"
description: "Show a limited time offer with a countdown timer and a discount code customers can copy."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Countdown with discount block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Countdown with discount** block promotes a limited time offer on the product page. It shows a heading such as *Limited Time Offer*, a discount code with a **Copy** button, and a timer that counts down to the end of the offer.

{/* TODO: screenshot of the countdown with discount code */}

To add the block, open the **Product information** section and click **Add block**. See [Product information](/product-page/product-information) for how blocks work on the product page.

## How the discount works

The block **displays** a discount code. It does not create the discount and does not apply it to the cart by itself:

1. The customer clicks **Copy** next to the code. The code is copied to their clipboard and the button briefly changes to **Copied**.
2. The customer pastes the code in the discount field at checkout, and Shopify applies the discount.

So before you use the block, create the discount in your Shopify admin:

1. Go to **Discounts** and click **Create discount**.
2. Choose the discount type, for example **Amount off products** or **Amount off order**, and select **Discount code** as the method.
3. Enter exactly the same code you will type in the block, for example `SAVE20`, and set the value and conditions.
4. Under **Active dates**, set the end date and time to match the block's **End date and time**.
5. Save the discount.

:::note
The timer and the discount are not linked. When the timer reaches zero, the block shows your **Expired message**, but the code stays visible and keeps working at checkout until the discount's own end date in Shopify. Always set the end date on the discount itself.
:::

## Settings

* **Heading:** The text above the code, for example *Limited Time Offer*.
* **Heading style:** Use the heading font (Text style) or the body font (Body) for the heading.
* **Discount code:** The code shown next to the **Copy** button. Leave it empty to show the countdown on its own.
* **Hide when no discount code is set:** Hide the whole block whenever **Discount code** is empty. It does not hide the block when the countdown ends.

:::tip
To use a different code on some products, click the **Connect dynamic source** button next to **Discount code** and pick a product metafield of type **Single line text**, created in **Settings > Custom data > Products**. With **Hide when no discount code is set** on, products without a code show nothing.
:::

#### Countdown

* **End date and time:** When the offer ends, in the format `YYYY-MM-DD HH:MM`, for example `2026-12-31 23:59`. The time is read in each shopper's own time zone, so a shopper in another country sees the countdown end at their local time. In the theme editor, a wrong format shows an error message, and an empty or past date shows a sample countdown so you can still style the block.
* **Expired message:** The text shown in place of the timer once it reaches zero.
* **Show labels below the timer:** Show the words *days*, *hours*, *min* and *sec* below the numbers. When it is off, the short letters *d*, *h*, *m* and *s* are used instead.
* **Style:** Show the timer numbers in the heading font (Text style) or the body font (Body).

#### Layout

* **Countdown width:** How much of the block's width the timer takes next to the heading and code (40 to 70%). On narrow screens the timer moves below the heading and code.

#### Desktop version

* **Heading scale:** Make the heading smaller or larger (50 to 120%).
* **Timer scale:** Make the timer smaller or larger (50 to 120%).
* **Counter item width:** The width of each number box (30 to 80 px).

#### Mobile version

* **Heading scale:** The heading size on mobile (50 to 120%).
* **Timer scale:** The timer size on mobile (50 to 150%).
* **Counter item width:** The width of each number box on mobile (20 to 80 px).

#### Colors

* **Background color:** A background behind the whole block. When you set one, the block gets some inner padding.
* **Text color:** The color of the heading, code and timer.
* **Counter background:** A background color behind each number box.

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the block (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Mobile view example

{/* TODO: mobile screenshot */}
