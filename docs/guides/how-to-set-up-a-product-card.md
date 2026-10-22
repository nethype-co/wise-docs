---
title: "How to set up a product card"
sidebar_label: "How to set up a product card"
description: "Build the product card from blocks, reorder its parts, and set up quick buy, color swatches and badges on your collection pages and product sections."
sidebar_position: 7
---

The **product card** is the small preview of a product that customers click to open the product page: the image, title, price and anything else you add. In Wise, the card is a **Product card** block made of smaller blocks, so you decide which parts it shows and in which order.

In this guide you will find the card in the theme editor, build it from its parts, and set up quick buy, swatches and badges. For every single setting, see the full reference in [Featured collection → Product card block](/sections/collections/featured-collection#product-card-block).

{/* TODO: screenshot of a product card with gallery, swatches, title, price and a quick buy button */}

## Where product cards appear

These sections and blocks show products with the Product card block:

* **Collection pages:** the [Collection product grid](/pages/collection-product-grid).
* **Search results:** the [Search results](/pages/search) page.
* **Product sections:** [Featured collection](/sections/collections/featured-collection), [Featured collections tabs](/sections/collections/featured-collections-tabs), [Product recommendations](/sections/collections/product-recommendations), [Recently viewed products](/sections/collections/recently-viewed-products) and [Product slider](/sections/collections/product-slider).
* **Storytelling sections:** [Shop the look](/sections/storytelling/shop-the-look) and the results of the [Quiz](/sections/storytelling/quiz).
* **Product page blocks:** [Complementary products](/product-page/blocks/complementary-products) and [Upsell](/product-page/blocks/upsell).

:::note
**Each section has its own card.** Changes you make to the card in one section do not affect the others. The collection page and the search page each have their own card too. In Shop the look, the Quiz and the Product slider, every look item, result or slide has its own card, so you can style one product differently.

A few places use a smaller **compact card** with fixed parts instead, for example [Complementary products: compact card](/product-page/blocks/complementary-products-compact) and the product hotspots in [Shoppable image](/sections/storytelling/shoppable-image). This guide does not apply to them.
:::

## Step 1: Find the card in the theme editor

1. In your Shopify admin, go to **Online Store > Themes** and click **Customize**.
2. Open the page with the cards. For the collection page, choose **Collections > Default collection** in the page selector at the top.
3. In the sidebar, expand the section. The **Product card** sits inside the block that holds the products:
   * Collection page: **Product grid > Product card**.
   * Search page: **Search grid > Product card**.
   * Featured collection: **Products container > Product card**.
   * Other sections: look for the products block, for example **Recommended products** or **Recently viewed products**.
4. Click **Product card** to open its settings, or expand it to see its parts.

{/* TODO: screenshot of the theme editor sidebar with Product grid > Product card expanded */}

## Step 2: Build the card from its parts

Expand the **Product card** to see its parts. Each part is a block:

| Block | What it shows |
| --- | --- |
| **Media** | The product image, with a second image on hover or a small gallery, the badges and an optional quick buy icon |
| **Vendor** | The brand, optionally linked to all its products |
| **Title** | The product name |
| **Price** | The price, with the compare-at price and discount when on sale |
| **Rating** | The star rating from your reviews app |
| **Swatches** | Small color swatches that change the card |
| **Tags** | Short tags such as *Vegan* or *New* |
| **Quick buy button** | A button that adds to cart, opens quick view or opens the quick buy picker |
| [Separator](/blocks/separator) | A line or space between parts |

* **Add a part:** click **Add block** under the Product card and pick it.
* **Reorder:** drag the blocks in the sidebar. The order in the sidebar is the order on the card, top to bottom. The Media block can move too, for example to put the vendor above the image.
* **Remove or hide:** click a block and choose **Remove block**, or use the eye icon to hide it.

Then click the **Product card** itself for the settings of the whole card: **Text alignment** (Left or Center), **Height** (**Stretch** keeps all cards in a row the same height), padding and colors.

:::tip
Start simple: Media, Title and Price. Add Swatches and a Quick buy button on collection pages, where customers compare many products, and keep cards in small sections such as Recently viewed lean.
:::

## Step 3: Choose how the image behaves

Click the **Media** block:

1. In **Media (desktop)**, choose **One image**, **Second image on hover** or **Gallery**. In **Media (mobile)**, choose **One image** or **Gallery** (touch screens have no hover).
2. For a gallery, set **Media in gallery** (2 to 10), the **Gallery indicator** and, on desktop, **Gallery navigation** (Arrows or Hover zones).
3. Set **Image ratio** and **Image fit** so the cards line up nicely.
4. Turn on **Show video** to play the product's first video, muted and looping.

Full details are in the [Media block reference](/sections/collections/featured-collection#media-block).

## Step 4: Set up quick buy

Quick buy lets customers buy without opening the product page. It has two triggers that do the same thing: the **Quick buy button** block, and the **Show quick buy icon** setting in the Media block (a small round button on the image). Add one or both.

What they do is set once on the **Product card** block, under **Quick buy > Action**:

| Action | One variant | Several variants |
| --- | --- | --- |
| **Add to cart, or open quick view for products with options** | Added to the cart | Opens the [Quick view](/header-footer/quick-view) |
| **Always open quick view** | Opens the quick view | Opens the quick view |
| **Open the quick buy picker on the card** | Added to the cart | Opens the picker when the product qualifies, otherwise the quick view |

The button label follows the product: *Add to cart*, *Choose options*, *Quick view* or *Sold out*.

### The quick buy picker

The picker is a small panel with one row per value, for example one row per size. Each row has its own add to cart button, and sold-out values are shown crossed out. On desktop the panel slides up over the product image. On mobile it opens as a sheet from the bottom of the screen.

1. Set **Action** to **Open the quick buy picker on the card**.
2. In **Options shown in the picker**, list the option names the picker can show, one per line, for example *Size* and *Shoe size*. Capital letters do not matter.
3. Optionally, add a size guide: enter the **Size guide link text**, choose a **Size guide page**, and enter the **Size guide metafield** that holds your size table, for example `custom.size_chart`.

A product gets the picker for the first option in your list that it has, as long as every other option is either a color swatch option or has only one value. So a product with **Color** and **Size** gets a size picker for the color shown on the card, provided **Color** is listed under **Options listed as Color Swatches** in [Theme settings > Color swatches](/theme-settings/color-swatches). Products with another open choice, such as Size and Material, open the quick view instead, so the picker never hides a choice from the customer.

:::note
Products with a subscription are never added straight to the cart. The quick buy opens the quick view, so customers can choose between a one-time purchase and a subscription first. Custom options from the [Custom option](/product-page/blocks/custom-option) block are not part of quick buy.
:::

## Step 5: Add color swatches

1. Under the **Product card**, click **Add block** and choose **Swatches**. Drag it to where it should appear, for example under the image.
2. In **Colors come from**, choose the source:
   * **Product options:** the product's own color option. The option names that count as colors are set in **Options listed as Color Swatches** (and **Options listed as Variant Images**) in [Theme settings > Color swatches](/theme-settings/color-swatches).
   * **Product siblings:** separate products linked as color versions of each other through metafields. Set the metafields once in Theme settings > Color swatches, see [Product siblings](/theme-settings/color-swatches#product-siblings).
3. Choose the **Picker style** (Product image, Tiles or Swatch), the size, and **Maximum shown**. Extra colors are summed up as "+N".
4. In **Change card on**, choose **Click** or **Hover**. Hover only works with a mouse.

What changes when a customer picks a swatch:

* **Product options:** the image changes to the image assigned to that variant in your Shopify admin, and the price and links follow the variant. The hover image becomes a photo whose alt text ends with `#` and the value, for example `#Red`, or else the product's second photo. In gallery mode, the first slide changes and the gallery goes back to the start.
* **Product siblings:** the card switches to the other product: its images (up to five in the gallery), title, price, link and sold out badge.

:::tip
Assign an image to every color variant in your Shopify admin. Without it, a swatch has no image of its own to show and the card keeps the product's main image.
:::

## Step 6: Show badges

Badges are set up once for the whole store in [Theme settings > Product badges](/theme-settings/product-badges):

* **Sold out** appears automatically on sold-out products.
* **Badge 1 to Badge 4** appear on products with a matching product tag, for example *new* or *bestseller*.
* The **discount percentage** is shown next to the price, not on the image. Turn it on with **Show discount percentage** in Product badges.

On the card, the badges sit on the image in the **Media** block. Choose the corner with **Badges position**. If you also use the **Tags** block, turn on **Hide tags shown as badges** so the same word does not appear twice.

## The card on the collection page and in sections

The card works the same everywhere, but a few things differ:

| | Collection page and search | Product sections |
| --- | --- | --- |
| Where to find the card | **Product grid** (or **Search grid**) **> Product card** | Inside the products block of the section |
| Columns and gaps | Set on the **Product grid** block, with the optional grid density switch in the section | Set on the products block, for example **Products container** |
| Links within the collection | **Product links within collection** in the section settings keeps the collection in the product link and breadcrumbs | Not available, cards link to the plain product page |
| Extra tiles | **Promo tile** blocks between the products | Not available |

The [Product slider](/sections/collections/product-slider) uses a simplified card: it always shows one large image, so the media mode, **Image fit**, **Show video**, **Badges position**, card **Height** and card **Colors** are hidden there.

## Related articles

* [Featured collection → Product card block](/sections/collections/featured-collection#product-card-block)
* [Collection product grid](/pages/collection-product-grid)
* [Quick view](/header-footer/quick-view)
* [Color swatches](/theme-settings/color-swatches)
* [Product badges](/theme-settings/product-badges)
* [Multi-images variant gallery](/guides/multi-images-variant-gallery)
