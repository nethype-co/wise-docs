---
title: "Rating"
sidebar_label: "Rating"
description: "Show the product's star rating and review count from your reviews app."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Rating block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Rating** block shows stars for the average rating of the product and the number of reviews, for example ★★★★☆ 4.3 (12 reviews). It is a quick trust signal near the title and price.

{/* TODO: screenshot of the rating stars under the product title */}

To add the block, open the **Product information** section and click **Add block**. See [Product information](/product-page/product-information) for how blocks work on the product page.

## Where the rating comes from

The block reads Shopify's standard product rating metafields:

* `reviews.rating`: the average rating (type **Rating**).
* `reviews.rating_count`: the number of reviews (type **Integer**).

You do not create these yourself. Most review apps, such as Judge.me, Okendo or Shopify Product Reviews, fill them in automatically once they are installed and have collected reviews. Check your app's settings for an option such as "Sync ratings to Shopify metafields" if the stars stay empty.

When a product has no rating yet, the block shows empty stars and "(no reviews)".

## Settings

* **Show average rating value:** Show the average number, for example 4.3, next to the stars. The review count is always shown.
* **Add rating to structured data:** Add the rating to the product's structured data, so search engines can show stars in search results. Turn this on only if your review app does not already add its own rating markup, to avoid duplicate data.

#### Visibility

* **Hide if content is empty:** Hide the block when the product has no rating, instead of showing empty stars. In the theme editor the block stays visible with a short note, so you can still select it.

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the block (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.
