---
title: "Maximizing SEO potential within your theme"
sidebar_label: "Maximizing SEO potential"
description: "Use Wise's headings, structured data, alt text and breadcrumbs to help search engines understand and rank your store."
sidebar_position: 8
---

## Maximizing SEO potential within your theme

Wise already does a lot for search engines in the background. This guide shows the parts you control in the theme editor and in your Shopify admin: heading levels, structured data, image alt text and breadcrumbs. At the end you'll find general Shopify SEO tips that apply to every store.

## 1. Use the right heading levels

Search engines and screen readers use headings (H1 to H6) to understand how a page is organised. Each page should have one H1, the main title, followed by H2 headings for its main parts and H3 headings below those.

In Wise, the heading level is not tied to the text size. You choose the level in the [Heading](/blocks/heading) block's text editor, and set the size separately with the block's scale settings. So you can make a heading look big without making it an H1, or the other way round.

Wise sets the H1 for you on these pages:

* **Product pages:** the product title in the [Title](/product-page/blocks/title) block. When a product is shown inside another page, for example in the Featured product section, its title becomes an H2 so it doesn't compete with the page's own H1.
* **Blog posts, pages, blogs, the cart, search results and the 404 page:** the page title.

On the **home page** and **collection pages**, the H1 is whatever Heading block you mark as H1. Check these templates:

1. Open the home page in the theme editor and go through the Heading blocks of your sections. Keep H1 only on the main heading at the top, usually in your first banner, and change the others to H2 or H3.
2. Open **Collections > Default collection**. Find the Heading block that shows the collection title and make sure it is set to H1.

:::tip
A quick way to check a page: right-click it in your browser, choose **View page source**, and search for `<h1`. You should find exactly one.
:::

## 2. Add your store details to structured data

Structured data is information in your page code that customers don't see, but search engines read. It can give your store richer search results, such as your return window or delivery time.

Wise adds this automatically:

* **Your store:** store name, logo and the social media profiles from [Theme settings > Social media](/theme-settings/social-media).
* **Products:** name, images, price, variants and availability, provided by Shopify on every product page.
* **Blog posts:** the article details on each blog post.
* **Breadcrumbs:** the page trail on collection, product, page, blog and blog post pages (see step 4).

You can add more in **Theme settings > Store policies (structured data)**: your customer service email and phone number, your return policy and your shipping policy. See [Store policies (structured data)](/theme-settings/structured-data) for every setting.

#### Product ratings

If you use a reviews app, search engines can show stars next to your products. Many review apps add their own rating markup. If yours doesn't, open the [Rating](/product-page/blocks/rating) block in the Product information section and turn on **Add rating to structured data**. Turn it on only when your app doesn't add the rating itself, to avoid duplicate data.

:::tip
Test any page of your store with [Google's Rich Results Test](https://search.google.com/test/rich-results) to see which structured data Google finds.
:::

## 3. Write alt text for your images

Alt text describes an image for people who use screen readers, and it helps your images appear in Google image search. Wise uses the alt text you set in your Shopify admin wherever the image appears in the theme.

* **Product images:** open the product in your Shopify admin, click an image and choose **Add alt text**.
* **Images in sections and blocks:** these come from **Content > Files** in your Shopify admin. Open the file there and add its alt text. You can also edit the alt text when you select the image in the theme editor's image picker.

Describe what the image shows in a few plain words, for example *Green linen shirt with rolled sleeves*. Avoid stuffing it with keywords.

:::note
If you use hashtags in alt text to show media per variant (for example `#red`), Wise removes the hashtags before showing the alt text to customers and search engines. See [Showing media per variant](/product-page/product-information#showing-media-per-variant).
:::

## 4. Keep breadcrumbs on

Breadcrumbs show a trail such as *Home / Skincare / Daily serum*. They help customers move back up a level, and Google may show the trail in search results instead of the bare page address.

You can show breadcrumbs in two ways:

* The [Breadcrumbs](/pages/breadcrumbs) section, which you can add to collection, product, page, blog and blog post templates.
* The [Breadcrumbs](/blocks/breadcrumbs) theme block, to place the trail inside another section, such as a collection banner.

Wise adds breadcrumb structured data to these pages automatically, even when no trail is visible.

#### Products in several collections

When a customer opens a product from a collection, the trail includes that collection, for example *Home / Creams / Firming face serum*. Because a product can be in several collections, it can be reached through several addresses:

* `yourstore.com/collections/creams/products/firming-face-serum`
* `yourstore.com/collections/women/products/firming-face-serum`

This does not cause duplicate content problems. Shopify gives every product one main (canonical) address, `yourstore.com/products/firming-face-serum`, and tells search engines to use it.

## 5. General Shopify SEO tips

* **Write unique titles and descriptions:** in your Shopify admin, open a product, collection or page, scroll to **Search engine listing** and click **Edit**. Give each one its own title and description.
* **Set your home page title and description:** go to **Online Store > Preferences** in your Shopify admin.
* **Keep URL handles short and clear:** for example `/products/linen-shirt` rather than `/products/linen-shirt-new-copy-2`. If you change a handle, tick the option to create a redirect from the old address.
* **Submit your sitemap:** add `yourstore.com/sitemap.xml` to Google Search Console. Shopify creates and updates it for you.
* **Keep your store fast:** speed affects both rankings and sales. See [Unlocking page speed mastery for your Shopify store](/guides/unlocking-page-speed-mastery-for-your-shopify-store).

## Related articles

* [Heading](/blocks/heading)
* [Store policies (structured data)](/theme-settings/structured-data)
* [Social media](/theme-settings/social-media)
* [Rating](/product-page/blocks/rating)
* [Breadcrumbs section](/pages/breadcrumbs)
* [Breadcrumbs block](/blocks/breadcrumbs)
* [Unlocking page speed mastery for your Shopify store](/guides/unlocking-page-speed-mastery-for-your-shopify-store)
