---
title: "Cart drawer"
sidebar_label: "Cart drawer"
description: "Set up the side drawer that opens with the cart, including progress bars, cross-sells and checkout buttons."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Cart drawer section?

<SectionMeta version="v1.0.0" />

The **Cart drawer** slides in from the side when a customer adds a product to the cart or clicks the cart icon in the header. Customers can change quantities, add a note or discount code and go to checkout without leaving the page.

![Cart drawer on desktop](/img/docs/sections/cart-drawer-desktop.jpg)

## Where to find the cart drawer

The cart drawer is a section in the **Drawers & Popups** group at the bottom of the theme editor sidebar. This group holds the drawers and popups that open on top of the page: the cart drawer, the [Search overlay](/header-footer/search-overlay), the [Quick view](/header-footer/quick-view) and any [Notification popup](/header-footer/notification-popup). They are not part of the [Header](/header-footer/header) section, even though some of them open from header icons.

:::note
The cart drawer is only used when **Theme settings > Cart > Cart type** is set to **Drawer**. With **Page**, the cart icon and add to cart lead to the cart page instead, and nothing you set here is shown. See [Cart](/theme-settings/cart).
:::

The [Cart page](/pages/cart) uses the same three blocks (Cart header, Cart items and Cart footer), but you set them up separately in the cart template.

## Section structure

When you expand the section in the sidebar, you will see three fixed blocks:

* **Cart header:** The area above the products, for the free shipping bar, a discount progress bar, an info bar or text.
* **Cart items:** The products in the cart, plus optional extras such as a cross-sell or an additional service.
* **Cart footer:** The order note, discount code and shipping estimate add-ons, the subtotal, the checkout buttons and the payment badges.

You can also add [Text](/blocks/text), [Custom Liquid](/blocks/custom-liquid) and app blocks directly to the section. They appear in the cart footer, above the payment badges.

## Section settings

The section has no settings of its own. Everything is set up in its blocks.

## Cart header block

The area between the drawer title and the products. It scrolls together with the products. Add blocks to it with **Add block**.

* **Show separator below:** Draw a line between the header and the products.
* **Bottom padding:** Space below the header (0 to 40 px). Applies when the header has at least one block.
* **Text scale (desktop)** and **Text scale (mobile):** Make the text in the header smaller or larger (50 to 200%).

### Free shipping bar block

A progress bar that tells customers how much more they need to spend to get free shipping. The amount and the messages are set in **Theme settings > Cart add-ons**. See [Cart add-ons](/theme-settings/cart-add-ons).

### Discount progress bar block

A progress bar with milestones, for example 10% off from $50 and 20% off from $100. The milestones are set in **Theme settings > Cart add-ons**.

* **Full width message:** Let the message box run to the edges of the drawer. The progress bar keeps its side spacing.

**Colors.** **Message text**, **Message background**, **Success message text**, **Success message background**, **Progress bar (track)**, **Progress bar (fill)**, **Milestone label**, **Icon** and **Active icon**.

* **Show border:** Draw a thin outline around the unfilled part of the bar and the milestones not reached yet. When it is on, **Border** sets its color.

### Info bar block

A bar with short messages that take turns, for example delivery times or a returns promise. Each message is a **Message** block inside the info bar.

* **Change message every:** How long each message is shown (3 to 10 seconds). Messages pause while a customer points at the bar.
* **Full width:** Let the bar run to the edges of the drawer.
* **Top padding** and **Bottom padding:** Space inside the bar (0 to 40 px).
* **Background color** and **Text color:** The bar colors.

**Message block.**

* **Image:** Upload your own icon. It is shown instead of the icon below.
* **Icon:** Or pick an icon from the theme's icon set.
* **Icon size (desktop)** and **Icon size (mobile):** The icon size (12 to 48 px).
* **Text:** The message.
* **Text color:** Leave it empty to use the info bar's text color.
* **Link:** Make the message a link.

You can also add a [Text](/blocks/text) block to the cart header.

## Cart items block

The list of products in the cart.

#### Image

* **Image size (desktop)** and **Image size (mobile):** The size of the product images (50 to 150 px).

#### Product details

* **Text scale (desktop)** and **Text scale (mobile):** Make the product details smaller or larger (50 to 200%).
* **Show vendor:** Show the product vendor.
* **Show price per item:** Show the price of one item under the title when the quantity is more than 1.

#### Separators

* **Show separator between line items:** Draw a line between products.
* **Full width separators:** Let the lines run to the edges of the drawer. Shown only when separators are on.

When the cart is empty, this block shows the empty cart message instead.

### Cross-sell block

A small slider of products to add to the order, shown below the cart lines. Products that are already in the cart are left out.

* **Heading:** The title above the products.
* **Product source:** Take the products from a collection or from a hand-picked list (options: From collection, From product list).
* **Collection** or **Product list:** The products to suggest, depending on the source.
* **Maximum number of products to show:** How many products the slider shows (1 to 9).

**Slider.**

* **Autoplay:** Move to the next product automatically.
* **Change slide every:** How long each product is shown (1 to 10 seconds). Shown only when autoplay is on.

**Colors and spacing.**

* **Background color:** A background behind the cross-sell.
* **Full width:** With a background, let the band run to the edges of the drawer.
* **Top padding** and **Bottom padding:** Space inside the band (0 to 40 px).

Each product is shown as a **Compact product card** with its own blocks: **Thumbnail**, **Vendor**, **Title**, **Price** and **Button**, and you can add **Badge** and **Rating**. Click the card to change its colors, gap and shadow, or click a card block to change its size. The **Product** setting of the card is ignored here: the products come from the cross-sell's source.

### Additional service block

A checkbox for an extra service, for example gift wrapping or shipping insurance. The name, the price shown and the product added to the cart are set in **Theme settings > Cart add-ons**. Without a product, the customer's choice is saved with the order as an extra detail (a cart attribute).

* **Full width:** Let the box run to the edges of the drawer.
* **Text scale (desktop)** and **Text scale (mobile):** Make the text smaller or larger (50 to 300%).
* **Background color**, **Text color** and **Price color:** The box colors. Leave the price color empty to use the text color.

You can also add a [Text](/blocks/text) block to the cart items.

## Cart footer block

The bottom of the drawer with the subtotal and the checkout button. The subtotal and buttons stay pinned to the bottom of the drawer while the products scroll.

* **Add-ons style:** How the order note, discount code and shipping estimate look (options: Standard, Compact). **Standard** shows them as a row above the subtotal. **Compact** shows them as small round icons next to the subtotal.
* **Text scale (desktop)** and **Text scale (mobile):** Make the add-on labels smaller or larger (50 to 200%).

#### Subtotal

* **Show savings:** Show how much the customer saves.
* **Savings label:** The savings text. Use `||savings||` where the amount should appear. Shown only when savings are on.
* **Show taxes and shipping note:** Show the note that taxes and shipping are calculated at checkout.

#### Buttons

* **Show View cart button:** Show a button that opens the cart page.
* **Hide Check out button:** Hide the checkout button, so customers go to the cart page first. Shown only when the View cart button is on.
* **Show dynamic checkout buttons:** Show accelerated checkout buttons such as Shop Pay, when your payment settings allow them.
* **Checkout text color**, **Checkout button color** and their **(hover)** versions: Give the checkout button its own colors.

#### Separators

* **Show line above the footer:** Draw a line between the products and the footer.
* **Show lines around add-ons:** Draw lines around the add-ons row. Shown only for the **Standard** style.

#### Spacing

* **Top padding** and **Bottom padding:** Space inside the footer (0 to 40 px).

### Add-ons block

Expand the Cart footer to find the **Add-ons** block. It holds the **Order note**, **Discount code** and **Estimate shipping** blocks. They have no settings: add a block to show that option to customers, or remove it to hide it. Their style is set with **Add-ons style** on the Cart footer.

### Payment badges block

The last block in the cart footer, below the checkout button.

* **Text:** Optional text above the badges, for example "Secure checkout".
* **Text alignment:** Align the text and badges (options: Left, Center, Right).
* **Badges:** Show the payment icons enabled in your store, or your own image (options: Payment icons enabled in the store, Custom image).
* **Monochrome icons:** Show the payment icons in one color. Shown only for payment icons.
* **Image** and **Max width:** Your own badge image and its width (10 to 100%), separately for desktop and mobile. Shown only for **Custom image**.
* **Text color** and **Background color:** The block colors.

**Block spacing.** Space above and below the badges (0 to 60 px), with optional separate values for mobile.

## Mobile view example

<div style={{display: "flex", justifyContent: "center", marginBottom: "20px"}}>
  <img src="/img/docs/sections/cart-drawer-mobile.jpg" alt="Cart drawer on mobile" style={{maxWidth: "320px", borderRadius: "8px"}} />
</div>
