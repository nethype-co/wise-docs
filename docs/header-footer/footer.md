---
title: "Footer"
sidebar_label: "Footer"
description: "Build your store footer from rows of menus, your logo, a newsletter form, social and payment icons."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Footer section?

<SectionMeta version="v1.0.0" />

The **Footer** section is the area at the bottom of every page. You build it from **rows**, and each row is a grid of columns that you fill with menus, your logo, contact details, a newsletter form, social icons, payment icons and a country and language selector.

![Footer on desktop](/img/docs/sections/page-footer-desktop.jpg)

The footer lives in the **Footer** group at the bottom of the theme editor sidebar, so changes apply to every page. In the default setup the Footer group also contains a **Features banner** section above the footer, for example with shipping and returns benefits. You can remove it or add other sections to the Footer group.

## Section structure

The footer has no fixed blocks. You add content in two levels:

1. **Footer row** blocks, added directly to the section. Each row is one horizontal band of the footer with its own number of columns. Use a [Separator](/blocks/separator) block between rows to draw a line.
2. Content blocks inside each row, such as **Menu**, **Logo** or **Email form**. Each content block takes one column unless you give it a wider **Width in columns**.

To group several pieces of content in one column, for example a logo above your address, add a **Group** block to the row and put the content inside it.

## Section settings

* **Make footer full width:** Let the footer content span the full width of the screen.
* **Text container max width:** Limit the width of the footer content (0 to 1600 px). Set it to 0 to use the default maximum width. Shown only when full width is off.
* **Space between rows (desktop)** and **Space between rows (mobile):** The space between footer rows (0 to 100 px). A separator between rows adds its own spacing on top.

#### Section spacing

* **Distance top (desktop):** Space above the footer on desktop (0 to 100 px).
* **Distance bottom (desktop):** Space below the footer on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

:::note
The footer's background and text colors are set in **Theme settings > Colors**, under **Footer**. See [Colors](/theme-settings/colors).
:::

## Footer row block

A row is a grid of equal columns. Add content blocks to it with **Add block**.

#### Desktop version

* **Columns:** The number of columns in the row (1 to 6).
* **Gap:** The space between columns (0 to 100 px).
* **Horizontal alignment:** Align the content of each column (options: Start, Center, End). The text alignment follows this setting.
* **Vertical alignment:** Align columns of different heights (options: Top, Middle, Bottom).

#### Mobile version

* **Columns:** The number of columns on mobile (1 to 3).
* **Gap**, **Horizontal alignment** and **Vertical alignment:** The same settings for mobile.

Inside a row you can use the theme blocks [Heading](/blocks/heading), [Text](/blocks/text), [Button](/blocks/button), [Icon with text](/blocks/icon-with-text), [Separator](/blocks/separator) and [Custom Liquid](/blocks/custom-liquid), app blocks, and the footer blocks below.

## Content blocks

Most footer blocks have a **Width in columns** setting for desktop (1 to 6) and mobile (1 to 3). It sets how many columns of the row the block spans. It only applies when the block sits directly in a row, not inside a Group.

### Group block

A **Group** holds several blocks in one column, for example your logo with a short text below it, or a heading with contact details. It starts with a Logo and a Text block.

* **Direction:** Stack the items (Vertical) or place them side by side (Horizontal).
* **Position:** Align items of different heights (options: Top, Center, Bottom). Shown only for **Horizontal**.

**Desktop version.**

* **Alignment:** Align the items (options: Left, Center, Right, Space between). **Space between** spreads the items apart and needs **Direction** set to **Horizontal**.
* **Gap:** The space between the items in the group (0 to 100 px).
* **Width in columns:** How many row columns the group spans (1 to 6).

**Mobile version.**

* **Vertical on mobile:** Stack the items on mobile even when **Direction** is **Horizontal**. Shown only for **Horizontal**.
* **Alignment**, **Gap** and **Width in columns:** The same settings for mobile.

**Block spacing.** Space above and below the group (0 to 60 px), with optional separate values for mobile.

### Menu block

A list of links, for example "Shop" or "Customer service".

* **Heading:** The title above the links. Below 900 px screen width, the links collapse under this heading and open when it is tapped. Leave it empty to show a plain list without a heading.
* **Menu:** The menu to show. You create menus in your Shopify admin under **Online Store > Navigation**.

**Desktop version.**

* **Text alignment:** Align the heading and links (options: Left, Center, Right, Inherit). **Inherit** follows the row alignment.
* **Width in columns:** How many row columns the menu spans.
* **Heading scale (desktop)** and **Text scale (desktop):** Make the heading and links smaller or larger (50 to 200%).

**Mobile version.**

* **Text alignment** and **Width in columns:** The same settings for mobile.
* **Open by default:** Show the links expanded on small screens instead of collapsed. Shown only when the menu has a heading.
* **Heading scale (mobile)** and **Text scale (mobile):** The sizes on mobile.
* **Line above** and **Line below:** Draw a divider line above or below the menu on mobile.
* **Divider line color:** The color of those lines. Leave it empty to use the footer text color.

### Logo block

* **Image:** The logo image. Leave it empty to use the logo from your store's brand settings in the Shopify admin.
* **Width:** The logo width as a share of its column (10 to 100%), with a separate value for mobile.
* **Horizontal alignment:** Place the logo on the left, center or right of its column, or choose **Inherit** to follow the row alignment. Separate values for desktop and mobile.
* **Width in columns:** How many row columns the logo spans.

### Email form block

A newsletter sign-up field. Customers who sign up are added to your customers in the Shopify admin with the tag `newsletter`.

* **Button style:** Primary or Secondary.
* **Button label:** The text on the submit button.

**Consent checkbox.**

* **Show consent checkbox:** Ask customers to tick a box before they can sign up.
* **Consent checkbox label:** The text next to the checkbox. Shown only when the checkbox is on.
* **Consent validation message:** The message shown when a customer tries to sign up without ticking the box.

### Country and language block

Buttons that let customers change their country (and currency) and language. The look of the panel that opens is set in [Localization drawer](/theme-settings/localization-drawer).

* **Show country/region selector:** Show the country selector.
* **Show country code:** Add the country code before the currency, for example US / USD. Shown only when the country selector is on.
* **Show language selector:** Show the language selector.
* **Border color:** The border of the buttons. Leave it empty to follow the footer text color.
* **Width in columns**, **Text scale (desktop)** and **Text scale (mobile):** The width and text size (50 to 200%).

### Social icons block

Links to your social media profiles. The links come from **Theme settings > Social media**. A network without a link is not shown. See [Social media](/theme-settings/social-media).

### Payment icons block

The logos of the payment methods enabled in your store.

* **Monochrome icons:** Show the icons in one color instead of their brand colors.

### Follow on Shop block

A **Follow on Shop** button that lets customers follow your store in the Shop app. It only appears when Follow on Shop is available for your store, which needs Shop Pay to be turned on.

## Mobile view example

<div style={{display: "flex", justifyContent: "center", marginBottom: "20px"}}>
  <img src="/img/docs/sections/page-footer-mobile.jpg" alt="Footer on mobile" style={{maxWidth: "320px", borderRadius: "8px"}} />
</div>
