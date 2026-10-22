---
title: "Standard variant picker vs. Product siblings"
sidebar_label: "Variant picker vs. Product siblings"
description: "Compare Shopify variants with the Variant picker block and separate products linked with the Product siblings block, and choose the right one for your catalog."
sidebar_position: 1
---

## Variant picker or Product siblings?

Wise gives you two ways to let customers choose between versions of a product, for example colors or sizes:

* The [Variant picker](/product-page/blocks/variant-picker) block, which shows the **variants** of one Shopify product.
* The [Product siblings](/product-page/blocks/product-siblings) block, which links **separate products** together and shows them like a variant picker. This is also known as *product variations* or *combined listings*.

This guide explains how the two differ, when to use which, and how swatches work for each.

{/* TODO: screenshot of a product page with Product siblings for the color and the Variant picker for the size */}

## The Variant picker (Shopify variants)

All versions live inside one product. You add options such as *Color* and *Size* to the product in your Shopify admin, and Shopify creates a variant for each combination. The [Variant picker](/product-page/blocks/variant-picker) block shows one row per option.

* **One product, one page:** Customers pick a color or size, and the price, image, SKU, stock status and add to cart button update without reloading the page.
* **No extra setup:** You only add options and variants in the Shopify admin. No metafields are needed.
* **Shared content:** All variants share the same title, description, reviews and page address. Only things like price, SKU and the variant image change per variant.
* **Flexible display:** Each option can be shown as tiles, a drawer, color swatches or small variant photos.

## Product siblings (separate products)

Each version is its own product, with its own page, for example one product per color. A product list metafield tells Wise which products belong together. The [Product siblings](/product-page/blocks/product-siblings) block then shows them as product images, swatches, tiles or a dropdown. Clicking a version opens that product's page.

* **Separate products, one look:** Customers see all versions in one place, but each version keeps its own product page.
* **Unique content per version:** Every version can have its own title, description, images, reviews, SEO settings and page address.
* **Metafields required:** You create a product list metafield to link the products, and usually an option value metafield to name each version. See [How to set up Product siblings](/guides/how-to-set-up-product-siblings).
* **Shown separately in collections:** Each version is a product, so each one can appear in your collections. Product cards can show the siblings as swatches.

## Comparison

| | Variant picker | Product siblings |
|---|---|---|
| **Structure** | One product with variants | Several products linked by a metafield |
| **Setup** | Add options and variants in the Shopify admin | Create metafields and fill them in on every product |
| **Page and address** | One page for all variants | One page per version |
| **Content per version** | Shared description and title. Variant image, price and SKU can differ | Everything can differ: title, description, images, reviews, SEO |
| **Switching** | Updates the page without reloading | Opens the other product's page |
| **Collections** | One product card for all variants | One product card per version |
| **Display styles** | Tiles, Drawer, Color swatches, Variant photos | Product image, Tiles, Swatch, Dropdown |
| **Swatch colors from** | Shopify's swatch for the option value, your custom colors or the value name | A metaobject, color or text metafield on each product, or the product image |
| **Product card swatches** | Swatches block set to **Product options** | Swatches block set to **Product siblings** |
| **Shopify plan** | All plans | All plans. Shopify's own combined listings feature needs Shopify Plus, the Wise block does not. |

## When to use which

**Use the Variant picker** when the versions only differ in simple ways, such as size or color, and one description fits all of them. For example, a T-shirt in four colors and five sizes. It is the quickest to set up and keeps stock and orders in one product.

**Use Product siblings** when each version needs to be its own product, for example:

* Each color has its own description, photos, reviews or SEO page.
* Your versions are really different models, editions or scents that you want to market separately.
* You need more options or variants than one Shopify product allows.
* You want each version to appear on its own in collections and search.

## Can I use both together?

Yes. A common setup is Product siblings for the color and the Variant picker for the size. For example, you create one product per color, and each of those products has variants for its sizes. On the product page, add the **Product siblings** block above the **Variant picker** block. Customers first choose the color (which opens that color's product) and then pick a size on that page.

:::tip
In this setup, don't add a *Color* option to the products. Each product only has the *Size* option, and the color comes from Product siblings.
:::

## How swatches work for each

### Variant picker swatches

The Variant picker shows an option as color swatches when its name is listed in **Options listed as Color Swatches** in [Theme settings > Color swatch](/theme-settings/color-swatches) (the default is *Color*), or in the block's own **Options shown as color swatches** field. Each swatch takes its color from the first source it finds:

1. Shopify's own swatch for the value, set in the Shopify admin on the product's option or from the category color metafield.
2. Your **Custom colors** list in theme settings, for example `Midnight Blue:#191970`.
3. The value name, when it is a standard color such as *Red* or *Navy*.

You can also show small photos of the variant instead of colors. See [How Wise picks the swatch color](/theme-settings/color-swatches#how-wise-picks-the-swatch-color) and [Variant image swatches](/theme-settings/color-swatches#variant-image-swatches).

### Product siblings swatches

The Product siblings block reads each product's **option value metafield**:

* A **metaobject** with a *label*, a *color* and an optional *image* field gives the name and the swatch. When an image is set, it is used instead of the color.
* A **Color** metafield paints the swatch directly.
* A **Single line text** metafield gives the name. The swatch color then comes from your **Custom colors** list or from the standard color name.

With the **Product image** picker style, the block shows each product's main image instead of a swatch. If a product has no option value, **Show fallback if value metafield is empty** in [Theme settings > Color swatch](/theme-settings/color-swatches#product-siblings) can show the product image or read a second metafield.

### On product cards

Add a **Swatches** block to the product card in your collection and product carousel sections. Set **Colors come from** to **Product options** for variant swatches, or to **Product siblings** for linked products. Siblings on cards use the **Option value metafield** and **Products metafield** from [Theme settings > Color swatch](/theme-settings/color-swatches#product-siblings).

## Related articles

* [A complete guide to customizing the variant picker](/guides/a-complete-guide-to-customizing-the-variant-picker)
* [How to set up Product siblings](/guides/how-to-set-up-product-siblings)
* [Variant picker](/product-page/blocks/variant-picker)
* [Product siblings](/product-page/blocks/product-siblings)
* [Color swatch](/theme-settings/color-swatches)
