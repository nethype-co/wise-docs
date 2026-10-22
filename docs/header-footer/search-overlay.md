---
title: "Search overlay"
sidebar_label: "Search overlay"
description: "Set up the full-screen search that opens from the header, with live results, trending searches and featured products."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Search overlay section?

<SectionMeta version="v1.0.0" />

The **Search overlay** opens when a customer clicks the search icon in the header. It covers the page below the header and shows results while the customer types: search suggestions, collections, products, pages and blog articles. Before anything is typed, it can show trending searches and a few featured products.

{/* TODO: desktop screenshot or video */}

## Where to find the search overlay

The search overlay is a section in the **Drawers & Popups** group at the bottom of the theme editor sidebar, next to the [Cart drawer](/header-footer/cart-drawer) and the [Quick view](/header-footer/quick-view). The search icon itself is the **Search** block in the [Header](/header-footer/header#search), where you only choose its position.

:::note
The live results come from Shopify's predictive search. You can turn it off and choose which page, article and collection fields are searched in **Theme settings > Predictive search**. See [Predictive search](/theme-settings/predictive-search).
:::

## Section structure

When you expand the section in the sidebar, you will see two fixed blocks:

* **Results:** What customers see while they type. It holds one block for each type of result.
* **Empty state:** What customers see before they type. It holds the **Trending searches** and **Products** blocks.

## Section settings

* **Placeholder text:** The hint shown in the empty search field, for example "Find a product...".
* **Products in results:** How many products appear in the results (2 to 10).
* **"View all" button style:** The style of the button that opens the full search results page (options: Primary, Secondary, Link).
* **Show empty state when nothing is found:** When a search has no results, show the trending searches and products under the "no results" message.
* **Content width:** The width of the search content on desktop (480 to 1200 px). On mobile it uses the full screen width.

#### Products

These settings apply to the products in the results and in the empty state.

* **Show vendor:** Show the product vendor.
* **Show price:** Show the price.
* **Show rating:** Show star ratings. This needs a product reviews app that fills Shopify's product rating metafield.
* **Hide rating when a product has no reviews:** Shown only when ratings are on.
* **Show review count:** Show the number of reviews next to the stars. Shown only when ratings are on.

#### Colors

These colors are used while the search is open, including the header behind it. Leave them empty to use the header colors.

* **Text color:** The text color of the search.
* **Background color:** The background of the search.
* **Background gradient:** A background gradient. It overrides the background color.
* **Background blur:** Blur the page behind the search (0 to 40 px). Works with a semi-transparent background.
* **Match highlight:** The color behind the letters that match what the customer typed.
* **Match highlight text:** The color of those matching letters.

## Results block

* **Text scale (desktop)** and **Text scale (mobile):** Make the result headings and text smaller or larger (50 to 300%).

Inside the Results block there is one block for each type of result: **Suggestions**, **Collections**, **Products**, **Pages** and **Articles**. They have no settings. Drag them to change the order of the result groups, or remove a block to leave that type out of the results.

## Empty state block

The content shown when the search opens, before the customer types anything.

### Trending searches block

A list of popular search terms. A click on a term fills the search field and shows its results.

* **Heading:** The title above the terms.
* **Text scale (desktop)** and **Text scale (mobile):** Make the heading and terms smaller or larger (50 to 300%).
* **Search terms:** The terms to show, one per line.

### Products block

A few products to inspire customers, for example your bestsellers.

* **Heading:** The title above the products.
* **Text scale (desktop)** and **Text scale (mobile):** Make the heading smaller or larger (50 to 300%).
* **Source:** Pick the products by hand or show a collection (options: Products, Collection).
* **Products:** The products to show. Used when **Source** is **Products**.
* **Collection:** The collection to show. Used when **Source** is **Collection**.
* **Products to show (desktop):** How many products appear on desktop (2 to 8).
* **Products to show (mobile):** How many products appear on mobile (1 to 8).

## Mobile view example

{/* TODO: mobile screenshot */}
