---
title: "Product siblings"
sidebar_label: "Product siblings"
description: "Link separate products that are versions of each other, such as one product per color, and show them like a variant picker."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Product siblings block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Product siblings** block links products that are versions of each other, for example a T-shirt that you sell as one product per color. On the product page they look like a variant picker: the customer sees an image, swatch or tile for each version and clicks one to go to that product. This is also known as *combined listings* or *product variations*.

{/* TODO: screenshot of product siblings shown as product images with the current one selected */}

To add the block, open the **Product information** section and click **Add block**. See [Product information](/product-page/product-information) for how blocks work on the product page.

## When to use siblings instead of variants

Use normal variants and the [Variant picker](/product-page/blocks/variant-picker) when all versions can live in one product. Use siblings when each version needs to be its own product, for example:

* Each color has its own description, reviews or SEO page.
* You need more options than one product allows.
* You want each version to appear separately in collections.

Siblings and the Variant picker can be used together: for example siblings for the color and the Variant picker for the size.

## How it works

The block needs two things from you:

1. **The list of versions:** Which products belong together.
2. **The option value of each product:** What to call each version, for example *Sage* or *Navy*, and optionally its color or swatch image.

Each version is a link to its product page. The product the customer is on is marked as selected. If you leave the current product out of the list, it is added at the start automatically. When the list is empty for a product, the block shows nothing.

## Step 1: Create the option value metafield

This metafield holds the name of the version, for example the color, on every product. You can choose one of three types.

**Option A: single line text (simplest).** Good for tiles and dropdowns.

1. In your Shopify admin, go to **Settings > Custom data > Products** and click **Add definition**.
2. Enter a name, for example *Color*. Shopify creates the namespace and key, for example `custom.color`.
3. Choose the type **Single line text** and save.
4. Open each product, scroll to **Metafields** and enter its value, for example *Sage*.

A text value can also be shown as a swatch: simple color names such as *Red* or *Navy* are painted automatically, and you can map any other name to a color in [Theme settings > Color swatches](/theme-settings/color-swatches) with **Enable custom colors** and **Custom colors**.

**Option B: a metaobject (best for swatches).** Each color is set up once and reused on many products.

1. In your Shopify admin, go to **Content > Metaobjects** (or **Settings > Custom data > Metaobject definitions**) and click **Add definition**. Name it, for example *Color swatch*.
2. Add these fields, using exactly these keys:
   * `label`: **Single line text**, the name shown to customers, for example *Sage*.
   * `color`: **Color**, the swatch color.
   * `image`: **File** (image), optional. A pattern or fabric photo. When it is set, it is used instead of the color.
3. Save, then add an entry for each color.
4. Go to **Settings > Custom data > Products**, add a definition named for example *Color* (`custom.color`) and choose the type **Metaobject**, referencing your *Color swatch* definition.
5. Open each product and pick its color entry in the metafield.

**Option C: a color.** A product metafield of type **Color** paints the swatch directly. The product title is used as the name.

List metafields (for example a list of metaobjects) also work: the first entry is used.

## Step 2: Choose the list of versions

There are two ways to tell the block which products belong together.

**With a product list metafield (recommended).** Every product keeps its own list, so one template works for all your product families.

1. Go to **Settings > Custom data > Products** and add a definition named for example *Siblings*. Shopify creates `custom.siblings`.
2. Choose the type **Product** and select **List of products**. Save.
3. Open each product and select all its versions in the metafield, including the product itself.
4. In the theme editor, enter `custom.siblings` in the block's **Products metafield** setting.

Instead of typing the metafield, you can also click the **Connect dynamic source** icon next to the **Products** setting and choose your *Siblings* metafield. Typing it in **Products metafield** is needed if the block is also used in quick view, where a dynamic source cannot be connected.

**By picking products in the block.** Select the products in **Products**. This list is the same for every product that uses the template, so it only suits a template that you assign to one product family.

:::tip
Fill in the siblings metafield on every product in the family with the same list. That way the selection looks the same whichever version the customer lands on.
:::

## Settings

* **Option name:** The name shown above the versions, for example *Color* or *Style*. With the Product image and Swatch styles it is followed by the current value, for example **Color: Sage**. Leave it empty to hide the heading.
* **Picker style:** How the versions are shown (options: Product image, Tiles, Swatch, Dropdown).
  * **Product image:** A small image of each product, taken from its main image.
  * **Tiles:** Buttons with the option value of each product, like the tiles of the Variant picker.
  * **Swatch:** A color swatch for each product, from the option value metafield.
  * **Dropdown:** A button with the current version that opens a list of all versions.
* **Show swatch or image:** Shown only for Tiles and Dropdown. Add a swatch or the product image in front of each name (options: None, Swatch, Product image).
* **Swatch and photo size:** The size of the swatches and images (20 to 100 px).
* **Image fit:** Shown only for the Product image style (options: Fixed size, Use image ratio). **Fixed size** crops each image to the swatch shape. **Use image ratio** keeps the width from the size setting and adjusts the height so the whole image is visible.
* **Corner radius:** Use the theme's corner radius or set your own (options: Theme default, Custom). With **Custom**, **Custom corner radius** appears (0 to 50 px).
* **Option value metafield:** The namespace and key of the option value metafield from step 1, for example `custom.color`. When it is empty or a product has no value, the product title is used as the name.
* **Subtitle metafield:** Shown only for Tiles and Dropdown. A **Single line text** product metafield, for example `custom.subtitle`, shown under each name. Use it for a short note such as *Limited edition*.
* **Products metafield:** The namespace and key of the product list metafield from step 2, for example `custom.siblings`. When it is set, **Products** is ignored, and a product without the metafield shows no siblings.
* **Products:** The products to link, including the current product. Ignored when **Products metafield** is set.

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the block (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Related theme settings

The **Product siblings / variations** group in [Theme settings > Color swatches](/theme-settings/color-swatches) affects this block too:

* **Show fallback if value metafield is empty:** What to show for a product that has no option value. With **Fallback** set to **Product image**, the swatch shows the product's image. With **Custom metafield**, the value is read from the **Fallback metafield** instead, for example `custom.fragrance`.
* **Enable round color swatches:** Makes the swatches and images round.

The **Option value metafield** and **Products metafield** in theme settings are used for the swatches on product cards in collections. Use the same metafields there and in this block so both show the same versions.
