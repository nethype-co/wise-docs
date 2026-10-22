---
title: "Custom option"
sidebar_label: "Custom option"
description: "Add a checkbox, dropdown or text field to the product page and save the customer's choice with the order."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Custom option block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Custom option** block adds an extra choice to the product page that is not a variant. The customer's answer is saved with the product in the cart and appears on the order, so you know exactly what to prepare. Use it for things such as gift wrapping, an engraving text, a monogram or a note for the order.

{/* TODO: screenshot of a custom option text field above the add to cart button */}

To add the block, open the **Product information** section and click **Add block**. See [Product information](/product-page/product-information) for how blocks work on the product page.

## How it works

The block adds one field. You choose its type:

* **Checkbox:** A single tick box with the option name as its label, for example *Add gift wrapping*. When ticked, the cart and the order show the option name with the value *Yes*.
* **Dropdown:** A list of choices you write yourself. The first choice is selected by default, so the value is always saved with the order.
* **Text:** A free text field, for example for an engraving or a name. Customers can type up to 250 characters. The field shows the placeholder *Type your text*.

The answer is saved as a line item property. You see it in the cart, at checkout, in the order details in your Shopify admin and in your order notifications. An unticked checkbox or an empty text field adds nothing.

To ask several questions, add several Custom option blocks. Give each one a different **Option name**, because the name is used to label the answer on the order.

:::note
The block needs the [Buy buttons](/product-page/blocks/buy-buttons) block in the same section: the answer is sent along when the customer clicks add to cart. The block only collects information. It does not change the price. To charge for an extra, such as gift wrapping, use a variant or a separate product instead.
:::

:::tip
Text fields are optional for the customer. If you need the text for every order, say so in the option name, for example *Engraving text (required)*, and check orders before you fulfil them.
:::

## Settings

* **Title font:** The font of the option name (options: Body, Heading, Subheading).
* **Option name:** The label above the field, or next to the checkbox. It is also the name of the answer in the cart and on the order. The block shows nothing while this is empty.
* **Text scale (desktop)** and **Text scale (mobile):** Make the option name smaller or larger (50 to 300%).
* **Input type:** The kind of field (options: Checkbox, Dropdown, Text).
* **Options:** Shown only for the Dropdown type. Write one choice per line. Empty lines are skipped, and the block shows nothing while there are no choices.

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the block (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Examples

* **Gift wrapping:** Input type **Checkbox**, option name *Add gift wrapping*.
* **Engraving:** Input type **Text**, option name *Engraving text*.
* **Delivery preference:** Input type **Dropdown**, option name *Delivery day*, options *Weekday* and *Saturday*.
