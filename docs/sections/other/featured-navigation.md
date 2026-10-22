---
title: "Featured navigation"
sidebar_label: "Featured navigation"
description: "Show the links of a menu as a row of buttons, for example to move between collections."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Featured navigation section?

<SectionMeta version="v1.0.0" />

The **Featured navigation** section shows the links of one of your menus as a row of buttons. The button for the page the customer is on is highlighted. Use it at the top of collection pages so customers can jump between categories, or on any page as a set of quick links.

{/* TODO: desktop screenshot or video */}

The section is found under **Other** in the **Add section** menu. It starts with a heading and your main menu.

## Section structure

When you expand the section in the theme editor sidebar, you will see two fixed blocks:

* **Header:** An optional heading area above the buttons. It contains a [Heading](/blocks/heading) block by default. Remove the heading if you do not need a title.
* **Navigation:** The row of buttons and the menu they come from.

See [How sections and blocks work](/getting-started/sections-and-blocks) for more about fixed blocks and theme blocks.

## Section settings

#### Colors

* **Background color:** Set the background color of the section.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.
* **Text color:** Set the text color for the whole section.

#### Section spacing

* **Distance top (desktop):** Space above the section on desktop (0 to 100 px).
* **Distance bottom (desktop):** Space below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Header block

Click the **Header** block to style the heading area above the buttons.

* **Text alignment (desktop)** and **Text alignment (mobile):** Align the heading (options: Left, Center, Right).
* **Text container max width:** Limit the width of the heading area (0 to 1600 px). Set it to 0 to use the default maximum width.
* **Text color:** Override the section text color for the heading area.

You can add any theme block to the Header, for example a [Subheading](/blocks/subheading) or a [Text](/blocks/text) block.

## Navigation block

Click the **Navigation** block to choose the menu and style the buttons.

* **Menu:** The menu whose links are shown as buttons. You create and edit menus in Shopify admin under **Content > Menus**. When the customer is on a page that sits inside a submenu, the links of that submenu are shown instead, so the row always shows the pages next to the current one.
* **Placement:** Place the buttons on the left or in the center (options: Left, Center). This applies from tablet landscape width up, when all buttons fit in one row. When they do not fit, the row scrolls sideways from the left, and it opens scrolled to the highlighted button.

#### Buttons

* **Button style:** Use the primary or secondary button style for the links (options: Primary, Secondary). The look of each style is set in [Theme settings: Colors](/theme-settings/colors).
* **Text style:** Use the body font or the button font for the link text (options: Body, Button).
* **Active background color** and **Active background color on hover:** The background of the button for the current page, normally and on hover.
* **Active text color** and **Active text color on hover:** The text color of the button for the current page, normally and on hover.

:::tip
For the submenu behavior to work, set up your menu with nested links, for example a "Clothing" link with "Dresses", "Tops" and "Jeans" below it. Add the section to your collection template with that menu, and on the Dresses collection the row shows Dresses, Tops and Jeans.
:::

## Mobile view example

{/* TODO: mobile screenshot */}
