---
title: "Cart - addons"
sidebar_label: "Cart - addons"
sidebar_position: 7
description: "Set up gift wrapping or another additional service, the free shipping bar and the discount progress bar in the cart."
---

import SectionMeta from '@site/src/components/SectionMeta';

## Cart - addons

<SectionMeta version="v1.0.0" />

The **Cart - addons** settings hold the rules for three cart features: an additional service that customers can add with one checkbox (for example gift wrapping), a free shipping bar and a discount progress bar with up to three milestones. You'll find them under **Theme settings** > **Cart - addons** in the theme editor. To open theme settings, click the gear (settings) icon in the left sidebar of the theme editor.

{/* TODO: screenshot of the cart drawer with a free shipping bar, discount bar and gift wrapping checkbox */}

## How it works

The settings on this page are shared by the [Cart drawer](/header-footer/cart-drawer) and the [Cart page](/pages/cart), so both always show the same amounts and messages. To show a feature, you also need to add its block to the cart:

* **Free shipping bar** and **Discount progress bar:** Add them as blocks to the **Cart header** block of the cart drawer or cart page.
* **Additional service:** Add it as a block to the **Cart items** block.

Removing a block hides the feature in that cart only. The settings here stay as they are.

## Settings

#### Additional service

The additional service is a checkbox in the cart, for example *Add gift wrapping*. You can connect it to a product so ticking the box adds that product to the cart.

* **Name of additional service:** The text next to the checkbox. Type **||price||** where you want the price of the service product to appear, for example *Wrap my order for ||price||*. Without it, the price is shown after the name.
* **Product:** The product added to the cart when the checkbox is ticked. Unticking the box removes it again.
* **Show quantity and remove button for checkbox Product:** When this is on, the service product in the cart has a quantity selector and a remove button like any other item. When it is off, the service can only be added or removed with the checkbox.

To set up gift wrapping:

1. In your Shopify admin, create a product called, for example, *Gift wrapping*, with its price. Make sure it is active on your Online Store sales channel.
2. Optionally hide it from search and collections, so customers only add it from the cart.
3. In the theme editor, open **Theme settings** > **Cart - addons** and select the product in **Product**.
4. Enter the **Name of additional service**.
5. Open the cart drawer or cart page section and add an **Additional service** block inside **Cart items**.

:::note
If you leave **Product** empty, the checkbox still works: it saves the service name as a note on the order (a cart attribute) instead of adding a product, so you can see in the order that the customer asked for the service, but it does not change the price. If the selected product is sold out or unavailable, the checkbox is hidden. The checkbox is also hidden while the cart is empty.
:::

#### Free shipping bar

The free shipping bar shows how much more a customer needs to spend to get free shipping, with a progress bar that fills up as they add products.

* **Free shipping minimum amount:** The order value needed for free shipping, in your store currency, for example **100**. If you sell in several currencies, see the tip below.
* **Free shipping message:** The text shown while the customer is below the amount. Type **||amount||** where the remaining amount should appear, for example *Spend ||amount|| more for FREE shipping!*
* **Message when free shipping is achieved:** The text shown once the cart reaches the amount.

:::note
The free shipping bar only shows a message. It does not give free shipping by itself. Create a matching free shipping rate in your Shopify admin under **Settings** > **Shipping and delivery**, using the same minimum order value.
:::

The [Shipping timeline](/product-page/blocks/shipping-timeline) block on the product page can also show the free shipping amount from this setting.

#### Discount progress bar

The discount progress bar shows up to three goals, for example *-10%* at 50, *-15%* at 100 and *-20%* at 150. Each goal (milestone) has an icon on the bar, and the message tells the customer how much more they need to spend to reach the next one.

**Milestone 1**, **Milestone 2** and **Milestone 3** each have the same settings:

* **Enable milestone 1** (2, 3): Turn the milestone on. The other settings appear when it is on.
* **Threshold (multicurrency format):** The cart value needed to reach the milestone, in the same format as the free shipping amount, for example **50** or **50|USD:60|PLN:200**.
* **Milestone label:** The short text under the milestone icon, for example **-10%**.
* **Progress message:** The text shown while this milestone is the next goal. Type **||amount||** for the remaining amount and **||label||** for the milestone label, for example *Spend ||amount|| more for ||label||!*
* **Milestone icon:** The icon on the bar (options: None, Box, Price Tag, Truck).
* **Milestone image:** Upload your own small image to use instead of the icon.

* **All milestones achieved label:** The message shown once the cart reaches the last milestone.

Set the milestones in order, with the lowest threshold in Milestone 1 and the highest in Milestone 3. The bar divides its length equally between the active milestones.

:::note
Like the free shipping bar, the discount progress bar only shows progress. It does not apply any discount. Create the matching automatic discounts in your Shopify admin under **Discounts**, for example *10% off orders over 50*, with the same thresholds.
:::

The discount bar compares the thresholds with the cart value before discounts, while the free shipping bar uses the cart total after discounts.

## Amounts in several currencies

If you sell in more than one currency with Shopify Markets, write the amount fields in this format:

**100|USD:120|PLN:400**

* The first number without a currency code (**100**) is the amount in your store's own currency.
* Each **CODE:amount** pair sets the amount for one currency, using the three-letter currency code. In the example, customers paying in US dollars need to reach 120 USD and customers paying in Polish złoty need 400 PLN.

:::tip
When a customer shops in a currency that has no amount in the field, the bar is hidden for them instead of showing a wrong amount. Add a pair for every currency you sell in.
:::
