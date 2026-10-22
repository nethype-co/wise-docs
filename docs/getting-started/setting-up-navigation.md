---
title: "Setting up your navigation"
sidebar_label: "Setting up navigation"
description: "Create menus in Shopify and connect them to the Wise header, mega menus, mobile menu and footer."
sidebar_position: 5
---

## Setting up your navigation

Menus help customers find their way around your store. You create the menus themselves in your Shopify admin, then choose where they appear in Wise: in the header, in mega menu panels, in the mobile menu and in the footer. This guide walks you through each step.

## Step 1: Create your menus in Shopify

1. In your Shopify admin, open your menus. Depending on your admin version, they are under **Content > Menus** or **Online Store > Navigation**.
2. Click **Main menu** to edit your header navigation, or **Add menu** to create a new one, for example "Footer: Customer service".
3. Click **Add menu item**, enter a name and pick a link: a collection, product, page, blog or a web address.
4. To create sub-items, drag a menu item slightly to the right, under another item. Shopify supports up to three levels.
5. Click **Save menu**.

For more detail, see [Shopify Help Center: Menus](https://help.shopify.com/en/manual/online-store/menus-and-links).

:::tip
Plan your header menu in levels. The first level is the bar in the header. The second and third levels become dropdowns or mega menu columns, so a menu built as **Shop > Category > Collection** works well with a mega menu.
:::

## Step 2: Connect the header menu

1. In the theme editor, expand the **Header** section in the header group.
2. Click the **Menu** block.
3. In **Menu**, choose the menu you want in the header. Wise uses **Main menu** by default.

How each menu item opens depends on how the menu is built:

* An item **without** sub-items is a plain link.
* An item **with** sub-items opens a dropdown list. A third level opens to the side of the list.
* An item that has a **Mega-menu** or **Visual menu** block opens a full-width panel instead.

See [Header: Menu](/header-footer/header#menu) for all the settings.

## Step 3: Add a mega menu (optional)

A mega menu turns a menu item into a large panel with columns of links and images. For example, the Wise demo opens a mega menu from the **Shop** item.

1. In the header's **Menu** block, click **Add block** and choose **Mega-menu**.
2. In **Menu item**, type the name of the top-level menu item that should open the panel. It must match the item's title exactly, for example `Shop`.
3. In **Columns menu**, choose the menu the columns come from, usually the same menu as the header. The second-level items under the matching item become the column titles, and the third-level items the links below them.
4. To add image tiles, for example to promote a collection, expand the Mega-menu block, click **Add block** and choose **Mega-menu image**.
5. Click **Save**.

{/* TODO: screenshot of a mega menu with link columns and image tiles */}

If you only want a row of images for a menu item, without link columns, add a **Visual menu** block instead.

See [Header: Mega menu](/header-footer/header#mega-menu) and [Visual menu block](/header-footer/header#visual-menu-block) for all the settings.

:::note
If the panel does not open, check that **Menu item** is spelled exactly like the menu item in your Shopify menu, including capital letters.
:::

## Step 4: Check the mobile menu

On mobile, customers open your menu with the **Drawer menu trigger** button in the header. The menu slides in from the side and shows the same links as your header menu. Items with sub-items open a new layer, and mega menus show their links and images there too.

* Keep the **Drawer menu trigger** block in the header's **Menu aside** visible on mobile, or customers on phones cannot reach your menu.
* Use **First level scale (mobile menu)** in the **Menu** block to make the top-level links smaller or larger.
* Use the **Mobile version** settings of each Mega-menu to show its images as a swiper or a grid.

The mobile menu is also used on desktop when your menu does not fit on one line. See [Header: Mobile menu](/header-footer/header#mobile-menu).

{/* TODO: mobile screenshot of the open mobile menu */}

## Step 5: Add footer menus

The footer is built from rows, and each menu is a **Menu** block inside a row.

1. In the theme editor, expand the **Footer** section in the footer group.
2. Expand a **Footer row** and click the **Menu** block you want to change, or click **Add block** and choose **Menu**.
3. In **Heading**, enter the title above the links, for example "Customer service".
4. In **Menu**, choose the menu to show.
5. Add one Menu block for each list of links, then click **Save**.

On small screens, footer menus with a heading collapse and open when tapped. See [Footer: Menu block](/header-footer/footer#menu-block) for all the settings.

:::tip
Footer menus usually work best as short, flat lists: policies, contact, FAQ and about pages. Create a separate Shopify menu for each column.
:::

## Related articles

* [Header](/header-footer/header)
* [Footer](/header-footer/footer)
* [Navigating the theme editor](/getting-started/navigating-the-theme-editor)
* [Shopify Help Center: Menus and links](https://help.shopify.com/en/manual/online-store/menus-and-links)
