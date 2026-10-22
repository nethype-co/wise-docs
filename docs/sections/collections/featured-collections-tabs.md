---
title: "Featured collections tabs"
sidebar_label: "Featured collections tabs"
description: "Show products from several collections in one section, with tabs to switch between them."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Featured collections tabs section?

<SectionMeta version="v1.0.0" />

The **Featured collections tabs** section shows products from several collections in one place. Shoppers click a tab, for example *New in*, *Best sellers* or *Sale*, to switch between them. Use it when you want to promote more than one collection without stacking several sections.

{/* TODO: desktop screenshot or video */}

You will find it under **Collections** in the **Add section** menu. It starts with a heading and three tabs.

## Section structure

When you expand the section in the theme editor sidebar, you will see two fixed blocks:

* **Header:** An optional heading area above the tabs. It contains a [Heading](/blocks/heading) block by default.
* **Tabs:** Holds the tabs. Each tab is a **Collection tab** block, and each tab has its own **Product card** block inside it.

See [How sections and blocks work](/getting-started/sections-and-blocks) for more about fixed blocks and theme blocks.

## Section settings

The layout settings are set once for the section and apply to every tab.

* **Make section full width:** Enable this setting to make the section span the full width of the screen.

#### Desktop version

* **Layout:** Show the products in a grid or a slider (options: Grid, Slider).
* **Items per row:** How many cards fit in one row (2 to 5).
* **Gap:** Space between the cards (2 to 24 px).

#### Mobile version

* **Layout:** Grid or Slider on mobile.
* **Items per row:** How many cards fit across the screen (1.1 to 2.5).
* **Gap:** Space between the cards (2 to 16 px).

#### Slider behavior

* **Enable loop:** Let the slider start again from the first card after the last one. Shown only when one of the layouts is set to **Slider**.

#### Buttons

* **Show "View all" button:** Show a button below the products that links to the tab's collection. It appears only when the tab uses a **Collection**, has no hand-picked **Products**, and the collection has more products than the tab shows.
* **"View all" button style:** The look of the button (options: Primary, Secondary, Link).

#### Pagination

* **Custom dots:** Enable this setting to style the slider dots for this section only. When it is off, the dots use [Theme settings → Sliders](/theme-settings/sliders).
* **Dot background color**, **Dot background blur** (0 to 20 px), **Active dot color** and **Inactive dot color:** The custom dot styles. Shown only when **Custom dots** is on.

#### Colors

* **Background color:** Set the background color of the section.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.
* **Text color:** Set the text color for the whole section.

#### Section spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Header block

* **Text alignment (desktop)** and **Text alignment (mobile):** Align the heading (options: Left, Center, Right).
* **Text container max width:** Limit the width of the heading area (0 to 1600 px). Set it to 0 to use the default maximum width.
* **Text color:** Override the section text color for the heading area.

You can add any theme block to the Header, for example a [Subheading](/blocks/subheading) or a [Text](/blocks/text) block.

## Tabs block

* **Tabs alignment:** Align the row of tabs on desktop (options: Left, Center, Right). On mobile the tabs start on the left and scroll sideways.

## Collection tab block

Each **Collection tab** block is one tab. Click **Add block** under **Tabs** to add more, and drag them to change the order.

* **Collection:** The collection to show products from.
* **Products:** Pick individual products instead. When you pick products here, they are shown instead of the collection.
* **Products to show:** The maximum number of products in this tab (3 to 24).
* **Tab label:** The text on the tab. Leave it empty to use the collection title.

:::note
A tab whose collection has no products is hidden in your online store. In the theme editor it stays visible with a short note, so you can fix it.
:::

### Product card block

Each tab has its own **Product card** block, with the image, vendor, title, price and rating as blocks inside it. This means you can style the cards differently per tab, but you also need to repeat a change in each tab if you want all tabs to match.

The card and its parts (Media, Vendor, Title, Price, Rating, Swatches, Tags and Quick buy button) work exactly as in the Featured collection section. See [Featured collection → Product card block](/sections/collections/featured-collection#product-card-block) for every setting.

## Mobile view example

{/* TODO: mobile screenshot */}
