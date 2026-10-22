---
title: "Which reviews app should you use on Shopify? (Free and paid options)"
sidebar_label: "Choosing a reviews app"
description: "Compare popular Shopify review apps and learn how to show their star ratings in Wise."
sidebar_position: 10
---

## Which reviews app should you use on Shopify?

Star ratings and customer reviews build trust and help customers decide. Shopify doesn't collect reviews on its own, so you need a reviews app. This guide compares popular options and shows how to connect any of them to Wise's star ratings.

## How Wise shows review stars

Wise doesn't depend on one specific app. Its stars read Shopify's standard product rating fields (metafields):

* `reviews.rating`: the product's average rating.
* `reviews.rating_count`: the number of reviews.

Any reviews app that fills in these two fields works with Wise's built-in stars. These places use them:

* The [Rating](/product-page/blocks/rating) block on the product page.
* The **Rating** block in product cards, for example in [Featured collection](/sections/collections/featured-collection) and the [collection product grid](/pages/collection-product-grid).
* Product results in the [Search overlay](/header-footer/search-overlay), when **Show rating** is on.

The star color comes from the rating color in [Theme settings > Colors](/theme-settings/colors).

:::note
The stars in the [Testimonials](/sections/testimonials/testimonials) section and the [Testimonials](/product-page/blocks/product-testimonials) product block are different: you pick them by hand for each quote. They don't come from a reviews app.
:::

## Popular reviews apps

All of these apps can write the product rating to Shopify's standard rating fields, so their ratings appear in Wise's stars. On some apps you need to turn this on in the app's settings first.

#### Judge.me

* Free plan available, with a low-cost paid plan for more features.
* Star ratings, photo and video reviews, automatic review request emails.
* Many widget styles and Google Shopping support on the paid plan.
* **Best for:** stores of every size that want a lot for little or no money.

#### Loox

* Paid plans, often with a free trial.
* Photo and video reviews in a visual layout, review request emails, referral and upsell features.
* **Best for:** stores that sell visual products, such as fashion or beauty.

#### Yotpo

* Free plan available, with growth plans for larger stores.
* Review collection and display, plus links to Yotpo's loyalty and SMS tools.
* **Best for:** brands planning to grow with a wider marketing toolkit.

#### Okendo and Stamped

* Paid plans with advanced features such as customer questions and answers, review attributes and loyalty programs.
* **Best for:** larger stores that want detailed review data.

:::tip
Prices and plans change often. Check each app's listing in the Shopify App Store for current pricing before you decide.
:::

## How to connect your reviews app

1. Install the app from the Shopify App Store and follow its setup.
2. In the app's settings, look for an option such as **Sync ratings to Shopify metafields** or **Product reviews metafields** and turn it on, if the app has one.
3. Show the full review list on the product page. Open the product template in the theme editor, then add the app's block to the **Product information** section or to its **Below gallery** area. See [Product information](/product-page/product-information).
4. Add the [Rating](/product-page/blocks/rating) block under the product title, so customers see the average rating at a glance.
5. Check that the **Rating** block is in your product cards, so ratings show on collection pages too.

:::note
The stars stay empty until a product has at least one review and the app has written its rating to Shopify. If they stay empty after that, contact the app's support and ask whether it fills in Shopify's `reviews.rating` metafield.
:::

#### Products without reviews

New products have no rating yet. You can hide empty stars:

* In the product page **Rating** block, turn on **Hide if content is empty**.
* In product cards, turn on **Hide when there are no reviews** in the card's Rating block.

#### Stars in Google search results

Many reviews apps add their own rating information for search engines. If yours doesn't, turn on **Add rating to structured data** in the product page [Rating](/product-page/blocks/rating) block. Use only one of the two, so Google doesn't see the rating twice.

## Related articles

* [Rating](/product-page/blocks/rating)
* [Product information](/product-page/product-information)
* [Featured collection](/sections/collections/featured-collection)
* [Search overlay](/header-footer/search-overlay)
* [Maximizing SEO potential within your theme](/guides/maximizing-seo-potential-within-your-theme)
