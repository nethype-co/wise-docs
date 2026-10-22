---
title: "A step-by-step guide to personalizing your product pages with custom options"
sidebar_label: "Personalize products with custom options"
description: "Add a checkbox, dropdown or text field to the product page, such as gift wrapping or an engraving, and receive the answer with the order."
sidebar_position: 6
---

Some choices are not variants: gift wrapping, a name to engrave, the grind size of coffee or a note for the order. The **Custom option** block adds one extra field to the product page for this. The customer's answer travels with the product to the cart, the checkout and the order in your Shopify admin, so you know exactly what to prepare.

In this guide you will add a custom option to your product page, choose the right field type and check that the answer arrives with the order.

{/* TODO: screenshot of a product page with a gift wrapping checkbox and an engraving text field above the add to cart button */}

## Before you start

* **Pick the field type.** Each Custom option block adds one field:
  * **Checkbox:** a single tick box, for a yes or no choice such as *Add gift wrapping*. A ticked box is saved as *Yes*.
  * **Dropdown:** a list of choices you write, such as *Whole beans*, *Espresso*, *Filter*. The first choice is selected by default, so an answer is always saved.
  * **Text:** a free text field of up to 250 characters, for an engraving, a monogram or a name. It shows the placeholder *Type your text*.
* **To ask several questions, add several blocks**, one per question.
* **Custom options do not change the price.** To charge for an extra, use a variant, a separate product, or the additional service checkbox in the cart (see [Cart - addons](/theme-settings/cart-add-ons)).

## Step 1: Add the Custom option block

1. In your Shopify admin, go to **Online Store > Themes** and click **Customize**.
2. In the page selector at the top, choose **Products** and the product template you want to change, for example **Default product**.
3. In the sidebar, find the **Product information** section and click **Add block** under it.
4. Choose **Custom option**.
5. Drag the block to where it should appear, usually just above the **Buy buttons** block.

{/* TODO: screenshot of the Add block menu with Custom option highlighted */}

:::note
The section must also contain a [Buy buttons](/product-page/blocks/buy-buttons) block. The answer is sent when the customer clicks its add to cart button (or the [Sticky buy button](/product-page/blocks/sticky-buy-button)).
:::

## Step 2: Set up the option

Click the new block to open its settings.

1. In **Option name**, enter the question or label, for example *Engraving text* or *Add gift wrapping*. This text is shown on the product page and also labels the answer in the cart and on the order. The block shows nothing while it is empty.
2. In **Input type**, choose **Checkbox**, **Dropdown** or **Text**.
3. For a dropdown, write one choice per line in **Options**. Empty lines are skipped. The block shows nothing until there is at least one choice.
4. Optionally, adjust the look with **Title font** (Body, Heading or Subheading) and **Text scale**, and the space around the block with the spacing settings.
5. Click **Save**.

For every setting, see the [Custom option](/product-page/blocks/custom-option) block reference.

:::tip
* Give each Custom option block a different **Option name**. Two blocks with the same name would save only one answer.
* Do not start the option name with an underscore (`_`). Shopify hides such answers from the cart and checkout.
* Square brackets are removed from the option name.
:::

## Step 3: Test the order flow

1. Open the product in your online store, fill in the option and add the product to the cart.
2. Open the cart. Under the product you will see the option name with the answer, for example *Engraving text: Anna*.
3. When an order comes in, you find the answer in the order details in your Shopify admin, next to the product. It also appears in your order notifications.

An unticked checkbox or an empty text field adds nothing to the order. If the same product is added twice with different answers, the cart shows two separate lines.

## Examples

| You want | Input type | Option name | Options |
| --- | --- | --- | --- |
| Free gift wrapping | Checkbox | Add gift wrapping | |
| Engraving | Text | Engraving text | |
| Coffee grind | Dropdown | Grind | Whole beans, Espresso, Filter (one per line) |
| Delivery preference | Dropdown | Delivery day | Weekday, Saturday (one per line) |

## Good to know

* **Text fields are optional.** Customers can add the product without filling in the text. If you need it for every order, say so in the option name, for example *Engraving text (required)*, and check orders before you fulfil them.
* **Only on the product page.** The block is available in the Product information section and in the [Featured product](/sections/collections/featured-product) section. It is not available in the [Quick view](/header-footer/quick-view), and quick buy on product cards adds the product without the option. If the answer is important, remove the **Quick buy button** block and the quick buy icon from the product cards of sections that show these products, so customers add them from the product page.
* **Show it only for some products.** The block appears on every product that uses the template. To offer engraving only on some products, create a separate product template with the block (open the template menu in the theme editor and click **Create template**), then assign that template to those products in your Shopify admin under **Theme template**.

## Related articles

* [Custom option block](/product-page/blocks/custom-option)
* [Product information](/product-page/product-information)
* [Buy buttons](/product-page/blocks/buy-buttons)
* [Cart - addons](/theme-settings/cart-add-ons)
