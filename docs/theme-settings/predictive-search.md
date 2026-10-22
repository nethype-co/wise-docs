---
title: "Predictive search"
sidebar_label: "Predictive search"
sidebar_position: 11
description: "Turn instant search results on or off and choose which product details the search looks in."
---

import SectionMeta from '@site/src/components/SectionMeta';

## Predictive search

<SectionMeta version="v1.0.0" />

Predictive search shows matching products, collections, pages and articles while the customer is still typing in the search field. You'll find its settings under **Theme settings** > **Predictive search** in the theme editor. To open theme settings, click the gear (settings) icon in the left sidebar of the theme editor.

{/* TODO: screenshot of the search overlay with predictive results */}

## Settings

* **Enable predictive search:** Show results while the customer types. When it is off, the search field still works, but customers only see results after they press Enter, on the [Search page](/pages/search).

#### Searchable properties

Choose which details of your products and content the search looks in. These choices apply both to the predictive results in the [Search overlay](/header-footer/search-overlay) and to the full search results page.

* **Include author:** Search the author name of blog articles.
* **Include body:** Search the description of products and the content of pages and articles. This finds more results, but also less relevant ones.
* **Include tag:** Search product and article tags.
* **Include title:** Search the titles of products, collections, pages and articles. On by default.

:::note
The search only looks in the properties you tick. If you untick all four, Shopify's default search fields are used instead.
:::

:::tip
Tags are a good way to make products findable by words that are not in their title, such as *gift* or *vegan*. Tick **Include tag** and add those words as product tags.
:::
