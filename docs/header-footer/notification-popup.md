---
title: "Notification popup"
sidebar_label: "Notification popup"
description: "Show a popup with a newsletter form, a discount code or an announcement after a page loads."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Notification popup section?

<SectionMeta version="v1.0.0" />

The **Notification popup** appears on top of the page a set time after it loads. Use it to collect newsletter sign-ups, share a discount code or announce a sale. You choose the pages it shows on, its position and whether the page behind it is dimmed.

{/* TODO: desktop screenshot or video */}

## Where to find the notification popup

The notification popup is a section in the **Drawers & Popups** group at the bottom of the theme editor sidebar. To add one, click **Add section** in that group and choose **Notification popup**. You can add several popups, for example one for the home page and one for product pages.

The default popup starts with a [Heading](/blocks/heading), a [Text](/blocks/text) block and an **Email form**.

:::note
How often a popup shows:
* When a visitor closes a popup, it stays hidden for that visitor for 7 days.
* Customers tagged `newsletter`, for example after signing up through the popup, never see it.
* With several popups, only one shows at a time. The next one waits until the one before it is closed.
:::

## Section structure

The section has no fixed blocks. Its content is made of the blocks you add with **Add block**. You can use any theme block, such as [Heading](/blocks/heading), [Text](/blocks/text) and [Button](/blocks/button), app blocks, and the three popup blocks described below.

## Section settings

#### Display

* **Show on:** The pages the popup appears on (options: All pages, Home page, Product pages, Collection pages, Pages).
* **Products:** Show the popup only on these product pages. Used when **Show on** is set to **Product pages**. Leave it empty to show it on every product page.
* **Collections:** Show the popup only on these collection pages. Used when **Show on** is set to **Collection pages**. Leave it empty to show it on every collection page.
* **Page handles:** Show the popup only on these pages, for example `contact, about-us`. Separate handles with commas. Shown only when **Show on** is set to **Pages**. Leave it empty to show it on every page.
* **Appearance delay:** How long after the page loads the popup appears (0 to 60 seconds).

:::tip
In the theme editor the popup stays visible on every page, so you can edit it. On your live store it only appears on the pages you chose.
:::

#### Layout

* **Maximum width:** The width of the popup (300 to 800 px).
* **Show border:** Draw a border around the popup.
* **Show shadow:** Add a shadow around the popup.

#### Position

These settings apply to desktop only. On smaller screens the popup is always centered.

* **Vertical position** and **Horizontal position:** Place the popup on the screen, for example bottom right for a small, less intrusive popup.
* **Stick to screen edge:** Remove the gap between the popup and the screen edges it is placed against. A centered popup keeps its place.
* **Show overlay:** Dim the page behind the popup. A click on the dimmed area closes the popup. Turn it off for a small popup that leaves the page usable.
* **Text alignment (desktop):** Align the content left, center or right.

#### Image

* **Image (desktop):** An image for the popup.
* **Image position (desktop):** Show the image above the content, or on its left or right side (options: Top, Left, Right). Left and right apply from 900 px screen width. Shown only when an image is set.
* **Image width (desktop):** How much of the popup the image takes up when it is on the left or right (20 to 60%).
* **Image ratio:** The shape of the image when it is above the content, and on mobile (options: Wide (8:5), Adapt to image, Landscape, Portrait, Square). With the image on the left or right, it fills the popup height.
* **Image (mobile):** A different image for mobile. Leave it empty to use the desktop image.
* **Show image on mobile:** Turn this off to hide the image on mobile.

#### Colors

* **Background color:** The popup background.
* **Background gradient:** A background gradient. It overrides the background color.
* **Text color:** The text color of the popup.

## Content blocks

### Email form block

A newsletter sign-up field. Customers who sign up are added to your customers in the Shopify admin with the tag `newsletter`, and the popup no longer shows for them.

* **Button style:** Primary or Secondary.
* **Button label:** The text on the submit button.
* **Show consent checkbox:** Ask customers to tick a box before they can sign up. When it is on, **Consent checkbox label** and **Consent validation message** appear: the text next to the box, and the message shown when a customer tries to sign up without ticking it.

### Image block

A small image inside the content, for example your logo or a badge. It is separate from the large image in the section settings.

* **Image:** The image.
* **Image height:** The height of the image (10 to 100 px).
* **Image alignment:** Align the image left, center or right.

### Discount code block

Shows a discount code with a copy button, so customers can copy it with one click.

* **Discount code:** The code to show, for example `SAVE20`. Create the discount itself in your Shopify admin under **Discounts**.

## Mobile view example

{/* TODO: mobile screenshot */}
