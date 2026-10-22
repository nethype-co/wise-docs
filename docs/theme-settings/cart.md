---
title: "Cart"
sidebar_label: "Cart"
sidebar_position: 6
description: "Choose between a cart drawer and a cart page, and let customers switch cart items to a subscription."
---

import SectionMeta from '@site/src/components/SectionMeta';

## Cart

<SectionMeta version="v1.0.0" />

The **Cart** settings decide what happens when a customer adds a product to the cart or clicks the cart icon, and whether cart items can be switched to a subscription. You'll find them under **Theme settings** > **Cart** in the theme editor. To open theme settings, click the gear (settings) icon in the left sidebar of the theme editor.

{/* TODO: screenshot of the cart drawer next to the cart page */}

## Settings

#### Cart

* **Cart type:** Choose how the cart opens (options: Page, Drawer).
  * **Drawer:** Adding a product to the cart, or clicking the cart icon, slides the cart in from the side of the screen. Customers can keep shopping without leaving the page. You set up the drawer in the [Cart drawer](/header-footer/cart-drawer) section.
  * **Page:** The cart drawer is not used and the cart icon opens the [Cart page](/pages/cart).
* **Go to the cart page after adding a product:** Shown only when **Cart type** is **Page**. When it is on, customers are taken to the cart page right after they add a product. When it is off, customers stay on the page and the add to cart button confirms that the product was added.
* **Subscription switch in cart:** Let customers change a cart item between a one-time purchase and a subscription (options: Off, Upgrade to subscription only, Both ways).
  * **Upgrade to subscription only:** Cart items bought one time get a **Subscribe** button. When the subscription plan has a discount, the button shows the saving, for example *Subscribe and save 10%*.
  * **Both ways:** Same as above, and subscription items also get a link to switch back to a one-time purchase.

:::note
The subscription switch only appears on products that have subscription plans, which you create with a subscription app. Products that can only be bought as a subscription are never offered as a one-time purchase. When a product has several plans, customers can also choose the plan in the cart.
:::

The free shipping bar, discount progress bar and additional service (for example gift wrapping) are set up in [Cart add-ons](/theme-settings/cart-add-ons).
