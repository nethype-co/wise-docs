---
title: "A complete guide to customizing the variant picker"
sidebar_label: "Customize the variant picker"
description: "Show each product option as tiles, a drawer, color swatches or variant photos, and set up colors, sold out values and a size guide."
sidebar_position: 3
---

## What you will set up

The [Variant picker](/product-page/blocks/variant-picker) block lets customers choose a variant, for example a color and a size. In this guide you choose how each option looks, give your colors the right swatches and fine-tune how sold out values and the selection behave.

{/* TODO: screenshot of a variant picker with color swatches for Color and tiles for Size */}

## The four picker styles

Each option, such as *Color* or *Size*, can use its own style:

* **Tiles:** Buttons with the value text. This is the default.
* **Drawer:** A single button with the selected value. Clicking it opens a panel with all values. Good for options with many values.
* **Color swatches:** Small round or square swatches in the color of each value.
* **Variant photos:** A small photo of each value, taken from the variant's image.

{/* TODO: screenshot comparing the four styles */}

The block's **Picker style** setting (Tiles or Drawer) is the default for all options. Color swatches and variant photos are given to specific options by name, as shown below.

## Step 1: Open the Variant picker block

1. In your Shopify admin, go to **Online Store > Themes** and click **Customize**.
2. Open a product page from the page selector at the top.
3. In the **Product information** section, select the **Variant picker** block. If it is missing, click **Add block** and choose **Variant picker**.

:::note
The Variant picker needs the [Buy buttons](/product-page/blocks/buy-buttons) block in the same section. It is hidden on products that have no options.
:::

## Step 2: Set the default style

In **Picker style**, choose **Tiles** or **Drawer**. Every option that is not listed in one of the swatch lists uses this style.

## Step 3: Show an option as a drawer

To show only some options as a drawer and keep the others as tiles:

1. Keep **Picker style** on **Tiles**.
2. Under **Swatches**, enter the option name in **Options shown as a drawer**, for example `Size`. Put each name on its own line.
3. Click **Save**.

## Step 4: Show an option as color swatches

Color swatches are usually set once for the whole store:

1. In the theme editor, click the gear icon to open **Theme settings** and open **Color swatch**.
2. In **Options listed as Color Swatches**, enter the option names that should show swatches, one per line. The default is `Color`. Enter option names, not values: `Color`, not `Red`.
3. Click **Save**.

To use a different list on one product template only, fill in **Options shown as color swatches** in the Variant picker block. When this field has names, it replaces the theme settings list for that block.

### Give each value its color

Wise uses the first color it finds for each value:

1. **Shopify's own swatch.** In your Shopify admin, open the product, open the *Color* option and choose a color or upload a pattern image for each value. If the option is linked to the category *Color* metafield, the colors come from there. This is the most reliable way.
2. **Your custom colors.** In **Theme settings > Color swatch**, turn on **Enable custom colors** and add one line per value in **Custom colors**, for example `Midnight Blue:#191970`, `Black and White:#000000#ffffff` or `Leopard:leopard.png`.
3. **The value name.** Standard color names such as *Red*, *Navy* or *Dark Red* are painted automatically. *Multicolor* and *Rainbow* get a rainbow swatch.

A value that matches none of these shows an empty swatch with a dashed outline, so you can spot it. See [Color swatch](/theme-settings/color-swatches) for all formats and rules.

:::tip
To make swatches round instead of square, turn on **Enable round color swatches** in **Theme settings > Color swatch**.
:::

## Step 5: Show an option as variant photos

Variant photos work well for patterns, prints and materials, where a flat color doesn't show the difference.

1. In your Shopify admin, open the product, click each variant and choose its image.
2. In the theme editor, open **Theme settings > Color swatch** and enter the option name, for example `Pattern`, in **Options listed as Variant Images**. Or, for one template only, use **Options shown as variant photos** in the Variant picker block.
3. Click **Save**.

If a value has no variant image, the product's main image is shown instead.

:::note
If the same option name is in more than one list, variant photos win over color swatches, and color swatches win over the drawer.
:::

## Step 6: Fine-tune the look

In the Variant picker block:

* **Swatch and photo size (desktop)** and **Swatch and photo size (mobile):** Make swatches and photos smaller or larger (20 to 100 px).
* **Corner radius:** Keep the theme's corner radius or choose **Custom** to set your own.
* **Enable custom button colors:** For the Tiles style, choose your own border, background and text colors for selected and unselected tiles.

## Step 7: Decide how sold out and missing values behave

* **Unavailable value style:** For tiles, mark sold out values by striking through the text or striking across the tile.
* **Hide unavailable option values:** Hide combinations that don't exist. For example, if *Red* only comes in S and M, sizes L and XL are hidden while Red is selected. Sold out values that exist are still shown.
* **Preselect the first available variant:** Select the first variant in stock when the page opens. Turn it off if you want customers to make a choice first.

## Step 8: Add a size guide (optional)

The Variant picker can show a *Size guide* link next to one option, which opens a drawer with a size table and the content of a page. See [How to set up a size guide per product](/guides/how-to-set-up-size-guide-per-product).

## Swatches on product cards

To show the same color swatches on product cards, add a **Swatches** block to the product card in your collection and product carousel sections and set **Colors come from** to **Product options**. The card uses the option names from **Theme settings > Color swatch**, not the lists in the Variant picker block.

## Related articles

* [Variant picker](/product-page/blocks/variant-picker)
* [Color swatch](/theme-settings/color-swatches)
* [Standard variant picker vs. Product siblings](/guides/standard-variant-picker-vs-product-siblings)
* [How to set up a size guide per product](/guides/how-to-set-up-size-guide-per-product)
