---
title: "Buy buttons"
sidebar_label: "Buy buttons"
description: "Show the add to cart button, the quantity selector and the dynamic checkout buttons on the product page."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Buy buttons block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Buy buttons** block holds everything a customer needs to buy the product: the quantity selector, the add to cart button and the dynamic checkout buttons, such as *Buy with Shop Pay*, Apple Pay or PayPal.

{/* TODO: screenshot of the quantity selector, add to cart button and Shop Pay button */}

To add the block, open the **Product information** section and click **Add block**. See [Product information](/product-page/product-information) for how blocks work on the product page.

:::note
Keep one Buy buttons block in the section whenever you use the [Variant picker](/product-page/blocks/variant-picker), [Product siblings](/product-page/blocks/product-siblings), [Custom option](/product-page/blocks/custom-option), [Subscription widget](/product-page/blocks/subscription-widget) or [Sticky buy button](/product-page/blocks/sticky-buy-button). They all send their choices through this block's add to cart form.
:::

## How the button works

* The button adds the selected variant to the cart. What happens next, opening the cart drawer or going to the cart page, is set in [Theme settings > Cart](/theme-settings/cart).
* When the selected variant is sold out, the button is disabled and says *Sold out*.
* The button follows the button colors of your theme. A bag icon can be shown in the button with **Enable bag icon in buy button** in [Theme settings > Icon set](/theme-settings/icon-set).

## Settings

* **Show the quantity selector:** Show plus and minus buttons to choose how many items to add.
* **Make add to cart full width:** Shown only when the quantity selector is off. Stretch the button to the full width of the product details.
* **Show the price in the button:** Show the price of the selected variant inside the button. It also shows the subscription price when a plan is selected.
* **Custom add to cart label:** Your own button text, for example *Add to bag*. Leave it empty to use *Add to cart*. When the variant is sold out, the button still says *Sold out*.
* **Show recipient form:** On gift card products only, show a form where the customer can send the gift card to someone else by email, with a name, message and send date.
* **Show dynamic checkout buttons:** Show Shopify's express checkout buttons below the add to cart button. Which buttons appear depends on the payment methods you have turned on in **Settings > Payments**. They are never shown on gift card products.
* **Go straight to checkout:** Skip the cart and send the customer to checkout right after the product is added. Useful for stores that sell a single product.

#### Colors

Leave a color empty to use the button colors from [Theme settings > Colors](/theme-settings/colors).

* **Text color** and **Background color:** The colors of the add to cart button.
* **Text color (hover)** and **Background color (hover):** The colors when a customer hovers over the button.

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the block (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.
