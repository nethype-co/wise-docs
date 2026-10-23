---
title: "Header"
sidebar_label: "Header"
description: "Set up your store's logo, main menu, mega menus, header icons, mobile menu and per-page header colors."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Header section?

<SectionMeta version="v1.0.0" />

The **Header** section is the bar at the top of every page. It holds your logo, the main menu with optional mega menus, and icons such as search, account and cart. On smaller screens the menu moves into a sliding mobile menu.

![Header on desktop](/img/docs/sections/header-desktop.jpg)

## Where to find the header

The header lives in the **Header** group at the top of the theme editor sidebar, together with the [Announcement bar](/header-footer/announcement-bar). Because it belongs to a group and not to a template, the changes you make here apply to every page of your store.

Drawers and popups that open from the header, such as the [Cart drawer](/header-footer/cart-drawer), the [Search overlay](/header-footer/search-overlay) and the [Quick view](/header-footer/quick-view), are not part of the header. They are separate sections in the **Drawers & Popups** group, which you find at the bottom of the theme editor sidebar.

## Section structure

When you expand the **Header** section in the sidebar, you will see four fixed blocks:

* **Logo:** Your logo images and their size. See [Logo](#logo).
* **Menu:** The main menu and the mega menus added to it. See [Menu](#menu) and [Mega menu](#mega-menu).
* **Menu aside:** The icons and buttons next to the menu: search, account, cart, the mobile menu button and more. See [Icons and buttons](#icons-and-buttons).
* **Color presets:** Different header colors for chosen templates, for example a see-through header on the home page. See [Color presets and transparent header](#color-presets-and-transparent-header).

See [How sections and blocks work](/getting-started/sections-and-blocks) for more about fixed blocks.

## Section settings

* **Layout (desktop):** Choose how the bar looks on desktop (options: Normal, Compact). **Normal** runs across the full width of the screen. **Compact** floats the bar with rounded ends.
* **Layout:** Choose where the logo sits (options: Logo left, Logo center). With **Logo left**, the menu follows the logo. With **Logo center**, the menu is on the left and the logo in the middle.
* **Enable sticky header:** Keep the header at the top of the screen while customers scroll. By default it hides when a customer scrolls down and comes back when they scroll up.
* **Sticky header always visible:** Keep the sticky header visible all the time, also when scrolling down. Shown only when **Enable sticky header** is on.
* **Background blur:** Blur the page content behind the header (0 to 40 px). The blur only shows when the header background color is semi-transparent.

:::note
The header's own text and background colors are set in **Theme settings > Colors**, under **Header, Navigation**. See [Colors](/theme-settings/colors). A [color preset](#color-presets-and-transparent-header) can replace them on chosen templates.
:::

#### Border and shadow

* **Enable border:** Draw a line around the bar. With the **Normal** layout this is a line along the bottom edge; with **Compact** it is a ring around the floating bar.
* **Border color:** The line color. Leave it empty to use the theme border color. Shown only when the border is on.
* **Border opacity:** How strong the line is (0 to 100%). Shown only when the border is on.
* **Enable shadow:** Add a drop shadow below the bar.
* **Shadow color** and **Shadow opacity:** The shadow color and strength (0 to 100%). Shown only when the shadow is on.

#### Hover link

When a customer points at a menu link or an icon, a highlight "pill" slides behind it. These colors do not apply to the logo.

* **Hover link background:** The color of the highlight behind the link or icon.
* **Hover link text:** The color of the link or icon while it is highlighted.

## Logo

Click the **Logo** block to set up your logo.

* **Logo image:** Your main logo.
* **Logo image (active mega-menu):** Optional. A second logo shown while a mega menu is open, for example a light version when your mega menu has a dark background.
* **Inverse logo image:** Optional. A light version of your logo, shown on templates where a color preset with **Use inverse logo** applies. Useful for a see-through header over a dark image.
* **Logo width:** The width of the logo on desktop (50 to 300 px).
* **Logo width (mobile):** The width of the logo on mobile and on a collapsed desktop header (50 to 250 px).

:::tip
Upload an SVG or a PNG with a transparent background so the logo looks sharp and sits cleanly on any header color.
:::

## Menu

Click the **Menu** block to choose the navigation shown in the header.

* **Menu:** The menu to show. You create and edit menus in your Shopify admin under **Online Store > Navigation**.
* **First level scale (mobile menu):** Make the top-level links in the mobile menu smaller or larger (50 to 300%).

How menu items open depends on how your menu is built:

* An item **without** sub-items is a plain link.
* An item **with** sub-items opens a classic dropdown list. A third level opens to the side of the list.
* An item that has a **Mega-menu** or **Visual menu** block opens a full-width panel instead. See below.

Panels and dropdowns open when a customer points at the menu item. Keyboard users open them with the small arrow button next to the item.

:::note
On screens narrower than 1200 px, and on wider screens when the menu does not fit on one line, the menu links are hidden from the bar and shown in the [mobile menu](#mobile-menu) instead.
:::

## Mega menu

A mega menu is a large panel with columns of links and optional images. To add one, expand the **Menu** block, click **Add block** and choose **Mega-menu**. Add one Mega-menu block for each menu item that should open a panel.

![Open mega menu with link columns and images](/img/docs/sections/header-mega-menu-desktop.jpg)

* **Menu item:** The name of the top-level menu item that opens this panel. It must match the menu item's title exactly, for example `Shop`.
* **Columns menu:** The menu the link columns come from. The theme looks in this menu for the item with the same name: its second-level items become the column titles and its third-level items the links below them. In most stores this is the same menu as the header menu.

#### Desktop version

* **Menu area width:** How much of the panel the link columns take up (20 to 100%). The images use the rest. At 100% the images move below the links.
* **Link columns per row:** How many columns of links sit side by side (1 to 8). Extra columns wrap to the next row.
* **Column title scale:** Make the column titles smaller or larger (50 to 300%).
* **Image ratio:** The shape of the images (options: Adapt to image, Square, Portrait, Landscape).
* **Image alignment:** Where the images sit when they do not fill the row (options: Left, Center, Right).

#### Mobile version

In the mobile menu, the panel's images appear below its links.

* **Image display:** Show the images as a swipeable row or a grid (options: Swiper, Grid).
* **Images per view:** How many images are visible at a time in the swiper (1 to 2). Shown only for **Swiper**.

#### Pagination

These settings appear when **Image display** is set to **Swiper**.

* **Custom dots:** Style the slider dots for this panel. When it is off, the dots follow **Theme settings > Sliders**. See [Sliders](/theme-settings/sliders).
* **Dot background color**, **Dot background blur**, **Active dot color** and **Inactive dot color:** The dot styles. Shown only when **Custom dots** is on.

#### Colors

These colors are used while this panel is open, in the desktop panel and in the mobile menu. Leave them empty to use the header colors.

* **Active link color** and **Active link background:** The colors of the highlighted link.
* **Text color:** The text color of the panel.
* **Background:** The background color of the panel.
* **Background blur:** Blur the page behind the panel (0 to 40 px). Works with a semi-transparent background.

### Mega-menu image block

Click **Add block** inside a Mega-menu to add an image tile next to the links, for example to promote a collection.

* **Image:** The tile image on desktop.
* **Image width:** How wide the tile is in the images area (options: Quarter, Half, Three quarters, Full width). Tiles sit side by side until the row is full, then wrap.
* **Text vertical alignment** and **Text horizontal alignment:** Where the heading, text and button sit on the image.
* **Show different media on mobile:** Use a different image in the mobile menu. When it is on, **Image** appears. If that image is empty, the desktop image is used.
* **Image width** (mobile): Show the tile at half or full width in the mobile menu. Applies when **Image display** is **Grid**.
* **Text vertical alignment** and **Text horizontal alignment** (mobile): Position the text on mobile.

**Content.**

* **Heading:** Text shown on the image.
* **Heading font scale** and **Heading font scale (mobile):** Make the heading smaller or larger (50 to 250%).
* **Subtext:** Smaller text below the heading.
* **Button label:** The text of the button. Leave it empty to hide the button.
* **Button style:** Primary, Secondary or Link.
* **Link:** The page the tile opens.
* **Open link as a new window:** Open the link in a new browser tab.

**Colors.** **Heading color**, **Text color** and **Overlay color**. The overlay is a tint over the image, behind the text, that makes light text easier to read.

### Visual menu block

A **Visual menu** is a panel made of image tiles only, with no link columns. Use it when a menu item should show a row of equal images, for example your main categories. Add it to the **Menu** block with **Add block**.

* **Menu item:** The name of the top-level menu item that opens this panel. It must match the menu item's title exactly.
* **Show text below the image:** Show the heading and text under each image instead of on top of it.
* **Images per row:** How many tiles sit side by side on desktop (2 to 6).
* **Image ratio** and **Image alignment:** The same as in the Mega-menu.
* **Image display**, **Images per view** and the **Pagination** settings: The same as in the Mega-menu, for the mobile menu.
* **Text color**, **Background** and **Background blur:** The panel colors while it is open. Leave them empty to use the header colors.

Each tile is an **Image** block with the same settings as the Mega-menu image block, except the desktop width: tiles in a visual menu always share the row evenly.

## Icons and buttons

Click the **Menu aside** block to see the icons and buttons in the header. You can add, remove and reorder them with **Add block** and drag and drop.

Every block here has the same two placement settings:

* **Alignment:** Place the item on the left or right side of the header on desktop, or hide it there (options: Left, Right, Hidden).
* **Alignment (mobile):** The same choice for mobile.

Items on the left sit next to the menu, items on the right at the far end of the header. Their order follows the order of the blocks.

The icon graphics for search, account, cart and the mobile menu are set once for the whole store in **Theme settings > Icon set**. See [Icon set](/theme-settings/icon-set).

### Drawer menu trigger

The button that opens the [mobile menu](#mobile-menu). It is hidden on desktop by default and shown on the left on mobile. Keep it visible on mobile, or customers on phones cannot reach your menu.

### Search

The search icon. It opens the [Search overlay](/header-footer/search-overlay). Everything the search shows is set up in that section.

### Account

The account icon, which takes customers to sign in or to their account.

* **Customer account menu:** The menu shown in the account popup once a customer is signed in. Only used when new customer accounts are turned on in your Shopify admin under **Settings > Customer accounts**.

:::note
The account icon only appears when customer accounts are turned on in your Shopify admin.
:::

### Cart

The cart icon with the number of items in the cart. When **Theme settings > Cart > Cart type** is set to **Drawer**, it opens the [Cart drawer](/header-footer/cart-drawer). With **Page**, it links to the cart page. See [Cart](/theme-settings/cart).

### Country selector

A button that lets customers change their country or region, and with it the currency.

* **Show country code:** Add the country code before the currency, for example US / USD.

### Language selector

A button that lets customers change the language of your store.

When both the country selector and the language selector are in the header, they open one shared panel with a tab for each. The look of that panel is set in [Localization drawer](/theme-settings/localization-drawer).

### Aside button

A small button or text link in the header, for example "Contact" or "Book a call".

* **Button style:** Primary, Secondary or Link.
* **Label:** The text on the button.
* **Link:** The page the button opens.
* **Open link as a new window:** Open the link in a new browser tab.

### Aside icon with text

An icon with a short label, for example a phone icon with your phone number, or a heart that links to a wishlist page.

* **Icon image:** Upload your own icon. It is used instead of the icon below.
* **Icon (from set):** Pick an icon from the theme's icon set.
* **Text:** The label next to the icon.
* **Link:** The page the item opens.

## Mobile menu

On mobile, and on desktop when the menu does not fit, customers open the menu with the [Drawer menu trigger](#drawer-menu-trigger). The mobile menu slides in from the side and shows the links of your header menu. Items with sub-items open a new layer that slides over the first one, with a back button to return.

<div style={{display: "flex", justifyContent: "center", marginBottom: "20px"}}>
  <img src="/img/docs/sections/header-mobile-menu-mobile.jpg" alt="Open mobile menu" style={{maxWidth: "320px", borderRadius: "8px"}} />
</div>

You set up the mobile menu in the same places as the desktop menu:

* The links come from the **Menu** block. **First level scale (mobile menu)** changes the size of the top-level links.
* A menu item with a **Mega-menu** or **Visual menu** shows its links and image tiles in the mobile menu too. Use the **Mobile version** settings of those blocks to choose a swiper or a grid and a different image for phones.
* The colors of a mega menu panel are also used while its layer is open in the mobile menu.

## Color presets and transparent header

The **Color presets** block lets you change the header colors on chosen templates, for example a see-through header with white text on your home page, and a solid header everywhere else. Add one **Color preset** block per template with **Add block**. When two presets match the same page, the lower one in the list wins.

![Transparent header over a full-width banner](/img/docs/preset-wise-desktop.jpg)

* **Name:** A label for the block in the sidebar, for example "Home".
* **Template:** The page type the preset applies to (options: Home, Product, Collection, Page, Blog, Article, Search, Cart, Collection list, 404 page).
* **Template names:** Optional. To use the preset only on alternate templates, enter their names separated by commas. For example, `landing, sale` on **Product** applies to the product.landing and product.sale templates only. Leave it empty to use it on every template of this type.
* **Use inverse logo:** Show the **Inverse logo image** from the Logo block on these pages.
* **Text color** and **Background color:** The header colors on these pages. Leave them empty to use the theme header colors.
* **Background blur:** Blur the page behind the header (0 to 40 px).

**Border and shadow.** **Enable border**, **Border color**, **Border opacity**, **Enable shadow**, **Shadow color** and **Shadow opacity** work like the section's own border and shadow settings, on these pages only.

**Hover link.** **Hover link background** and **Hover link text** for these pages. Leave them empty to use the section's hover colors.

**Mega menu.** **Active link color**, **Active link background**, **Text color**, **Background** and **Background blur** used while a mega menu is open on these pages. A mega menu's own colors win over these. Leave them empty to keep the header colors.

### Making the header transparent

To let the first section of a page show behind the header, for example a full-screen image:

1. In the **Color presets** block, add a **Color preset** for the template, for example **Home**.
2. Set its **Background color** to a transparent or semi-transparent color, set a light **Text color** and turn on **Use inverse logo** if your logo is dark.
3. Open the first section on that page, for example an Image banner or a Slideshow, and turn on **Show section behind header**.

:::note
**Show section behind header** only works on the first section of the page, right after the header. It is available on sections such as Image banner, Slideshow and Image with text.
:::

## Mobile view example

<div style={{display: "flex", justifyContent: "center", marginBottom: "20px"}}>
  <img src="/img/docs/sections/header-mobile.jpg" alt="Header on mobile" style={{maxWidth: "320px", borderRadius: "8px"}} />
</div>
