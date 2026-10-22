---
title: "Color swatch"
sidebar_label: "Color swatch"
sidebar_position: 13
description: "Show colors and patterns as swatches on product pages, product cards and filters, and link separate products as color variations."
---

import SectionMeta from '@site/src/components/SectionMeta';

## Color swatch

<SectionMeta version="v1.0.0" />

Color swatches show a product option, such as *Color*, as small colored circles or squares instead of text buttons. Wise can show swatches in the variant picker on the product page, on product cards in collections and in collection filters. It can also show separate products, for example one product per color, as swatches of one product (product siblings). You'll find these settings under **Theme settings** > **Color swatch** in the theme editor. To open theme settings, click the gear (settings) icon in the left sidebar of the theme editor.

{/* TODO: screenshot of color swatches on a product page and on product cards */}

## Quick start

For most stores, three steps are enough:

1. In your Shopify admin, name the product option **Color** (or another name you list in **Options listed as Color Swatches**).
2. Give each color value its swatch. The easiest way is Shopify's built-in swatches: on the product page in the admin, open the **Color** option and pick a color or upload a pattern image for each value. Values named after a standard color, such as *Red* or *Navy*, work even without this step.
3. Check the product page. The **Color** option now shows swatches in the [Variant picker](/product-page/blocks/variant-picker).

To show swatches on product cards too, add a **Swatches** block to the product card in your collection and product carousel sections.

## Settings

* **Enable color swatch in filters:** Show colored swatches instead of checkboxes in the collection and search filters. See [Swatches in filters](#swatches-in-filters).
* **Enable round color swatches:** Make swatches round instead of square, in the variant picker, on product cards, in product siblings and in filters. Blocks set to a **Custom** corner radius keep their own radius.
* **Enable custom colors:** Turn on the **Custom colors** list below, where you set colors and pattern images by value name.
* **Custom colors:** Your own color rules, one per line. Shown only when **Enable custom colors** is on. See [Custom colors](#custom-colors).
* **Options listed as Color Swatches:** The option names that are shown as color swatches, one per line, for example **Color**. Enter option names, not values: write *Color*, not *Light Grey* or *Magenta*.
* **Options listed as Variant Images:** The option names that are shown as small photos of the variant instead of a color, one per line. See [Variant image swatches](#variant-image-swatches).

#### Product siblings / variations

Also known as combined listings or product variations. See [Product siblings](#product-siblings) for the full setup.

* **Option value metafield:** The product metafield that holds each product's color or option value, for example **custom.color**. Used by product card swatches set to product siblings.
* **Show fallback if value metafield is empty:** When a product's option value metafield is empty, show something else instead of a blank swatch.
* **Fallback:** What to show when the metafield is empty (options: Product image, Custom metafield). Shown only when the setting above is on.
* **Fallback metafield:** A second metafield to read when the first one is empty, for example **custom.fragrance**. Shown only when **Fallback** is **Custom metafield**.
* **Products metafield:** The product metafield that lists all the products in a group, for example **custom.product_variations**. Used by product card swatches set to product siblings.

## How Wise picks the swatch color

For each option value, Wise uses the first of these that exists:

1. **Shopify's built-in swatch** for the value: a pattern image, then a color. You set these in the Shopify admin on the product's option, or they come from the product's category color metafield.
2. **Your Custom colors list**, when **Enable custom colors** is on.
3. **The value name as a standard color name.** Names such as *Red*, *Navy*, *Olive* or *Dark Red* paint on their own. Spaces are ignored, so *Dark Red* works like *darkred*. The values *Multicolor*, *Multicolour* and *Rainbow* show a rainbow swatch.

When none of these gives a color, the swatch is shown empty with a dashed outline, so you can spot values that still need a color.

:::note
Shopify's built-in swatches come first. If you set a color both in the Shopify admin and in **Custom colors**, the admin color is used. To change the color of such a value, edit it in the admin.
:::

## Custom colors

Use **Custom colors** for values that have no built-in Shopify swatch, for values whose name is not a standard color (for example *Dusty sage*), and for pattern images in filters.

1. Turn on **Enable custom colors**.
2. In **Custom colors**, add one line per value, in the format **Value name:color**.
3. Click **Save**.

You can use these formats:

* **One color:** `Midnight Blue:#191970`
* **Two colors**, shown as a diagonal split: `Black and White:#000000#ffffff`
* **Three colors**, shown as three diagonal stripes: `Tricolor:#0055a4#ffffff#ef4135`
* **An image**, for patterns and textures: `Leopard:leopard.png`

Rules to keep in mind:

* The name before the colon must match the option value exactly, but capital letters do not matter: *midnight blue* matches *Midnight Blue*.
* Write colors as six-digit hex codes with the # sign, for example **#191970**. Short codes such as *#fff* and color names are not read. For two or three colors, write the codes one after another with no spaces.
* Each rule must be on its own line.

**To use an image swatch:**

1. In your Shopify admin, go to **Content** > **Files** and upload the image, for example *leopard.png*. A small square image works best, at least 72 x 72 px.
2. In **Custom colors**, write the value name, a colon and the exact file name, including the extension: `Leopard:leopard.png`.
3. If the swatch stays empty, check that the file name is spelled exactly as it appears in **Files**. Shopify sometimes adds a suffix such as *_1* when a file with the same name already exists.

## Variant image swatches

Instead of a color, a swatch can show a small photo of the variant. This works well for patterns, materials or prints, where a flat color does not show the difference.

1. In your Shopify admin, open the product and assign an image to each variant (click a variant and choose its image).
2. In **Options listed as Variant Images**, enter the option name, for example **Color** or **Pattern**.
3. Click **Save**.

For each value, the swatch shows the image of the first variant with that value. If no variant with that value has an image, the product's main image is shown.

When an option name is in both lists, the variant picker shows it as variant images.

:::tip
The [Variant picker](/product-page/blocks/variant-picker) block has its own **Options shown as color swatches** and **Options shown as variant photos** fields. When you fill them in, they replace the theme setting lists for that block only, which is useful when one product template needs a different setup.
:::

## Swatches in filters

To show color filters as swatches:

1. Set up a color filter in the **Search & Discovery** app, for example a filter on the **Color** option or on the color category metafield.
2. Turn on **Enable color swatch in filters**.

A filter shows swatches when its values have Shopify swatches, when the filter is set to show swatches in the Search & Discovery app, or when the filter name matches one of the names in **Options listed as Color Swatches**.

:::note
Filters built from a variant option, such as *Color*, have no built-in Shopify swatches. Their colors come from your **Custom colors** list or from standard color names, so add a rule for every value whose name is not a standard color.
:::

## Product siblings

Some stores create a separate product for each color, for example to give every color its own page, description and reviews. Product siblings link these products together, so they appear as swatches of one product. Shopify calls this combined listings.

**Step 1. Create the metafield definitions.** In your Shopify admin, go to **Settings** > **Metafields and metaobjects** > **Products** and add two definitions:

* **Option value**, for example *custom.color*. Choose one of these types:
  * **Metaobject** (recommended): a reference to a color entry with a **label**, a **color** and an optional **image** field. Shopify's standard **Color** metaobject has these fields, so you can use it directly.
  * **Color:** a single color.
  * **Single line text:** the color name, for example *Midnight Blue*. The swatch color then comes from **Custom colors** or from the standard color name.
* **Products**, for example *custom.product_variations*, of type **Product**, set to **List of products**.

**Step 2. Fill in the metafields on every product in the group.**

* Set the option value, for example *Black* on the black product and *Sand* on the sand product.
* In the products list, select every product of the group, including the product itself.

**Step 3. Connect the metafields in the theme.**

* For product cards: in **Theme settings** > **Color swatch**, enter the two metafields as *namespace.key* in **Option value metafield** and **Products metafield**. Then, in the **Swatches** block of the product card, set **Colors come from** to **Product siblings**.
* For the product page: add a [Product siblings](/product-page/blocks/product-siblings) block and enter the same metafields in the block's own **Option value metafield** and **Products metafield** fields.

**Step 4. Choose a fallback (optional).** If some products have no option value yet, turn on **Show fallback if value metafield is empty** and choose **Product image** to show the product photo in the swatch, or **Custom metafield** to read a second metafield, for example *custom.fragrance* for products that vary by scent instead of color. The fallback applies to both product cards and the Product siblings block.

:::tip
When a list metafield is used for the option value, Wise takes its first entry. When a metaobject has both an image and a color, the image is shown.
:::
