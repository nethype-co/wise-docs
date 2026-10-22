---
title: "Variant picker"
sidebar_label: "Variant picker"
description: "Let customers choose a size, color or other option with tiles, color swatches, variant photos or a drawer, plus an optional size guide."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Variant picker block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Variant picker** block lets customers choose between the variants of a product, for example a size and a color. Each option, such as *Size* or *Color*, gets its own row. You decide per option whether the values look like tiles, color swatches, small variant photos or a drawer that slides in. The block can also show a size guide link next to one option.

{/* TODO: screenshot of a variant picker with color swatches and size tiles */}

To add the block, open the **Product information** section and click **Add block**. See [Product information](/product-page/product-information) for how blocks work on the product page.

:::note
The block is hidden on products that have only one variant. It needs the [Buy buttons](/product-page/blocks/buy-buttons) block in the same section: the picker sends the chosen variant to the add to cart form there.
:::

## How the picker works

When a customer picks a value, the page updates without reloading: the price, SKU, inventory status, gallery image and add to cart button all switch to the new variant, and the page address changes so the link can be shared.

Every option row shows the option name and the selected value, for example **Color: Sage**. Values that are sold out stay visible but are marked as unavailable. Customers can still select them to see the variant, but the add to cart button then says *Sold out*.

## Picker styles

Each option uses one of four styles:

* **Tiles:** Buttons with the value text. This is the default style.
* **Drawer:** A single button with the selected value. Clicking it opens a panel listing all values. Useful for options with many values.
* **Color swatches:** Small round or square swatches in the color of each value.
* **Variant photos:** A small photo of each value, taken from the variant's image.

**Picker style** sets the style for all options. To give a specific option another style, enter its name in one of the lists under **Swatches**. For example, enter `Color` in **Options shown as color swatches** to show color swatches for Color while Size stays as tiles.

## Settings

* **Preselect the first available variant:** Select the first variant in stock when the page opens. When this is off, no value is selected until the customer picks one. A variant in the page address, for example from a link on a collection page, is always selected.
* **Picker style:** The default style for all options (options: Tiles, Drawer).
* **Hide unavailable option values:** Hide values of the second and third option that do not exist together with the values chosen above. For example, if the color Red only comes in sizes S and M, sizes L and XL are hidden while Red is selected. Values that exist but are sold out are still shown.
* **Unavailable value style:** Shown only for the Tiles style. How sold out values are marked (options: Strike through the text, Strike across the tile).

#### Button colors

Shown only for the Tiles style.

* **Enable custom button colors:** Enable this setting to choose the tile colors yourself. When it is off, the tiles use your theme colors.
* **Selected border**, **Selected background** and **Selected text:** The colors of the selected tile.
* **Unselected border** and **Unselected text:** The colors of the other tiles.

:::tip
If the unselected border is very close to the selected border, every tile would look selected. In that case the theme automatically makes the unselected border lighter, unless the selected tile has its own background color.
:::

#### Swatches

These lists work per block. When a list here is empty, the matching list from [Theme settings > Color swatches](/theme-settings/color-swatches) is used, so you usually only need to fill them in once in theme settings. Enter option **names** (one per line), not values: `Color`, not `Red`.

* **Options shown as color swatches:** Options shown as color swatches, for example `Color`.
* **Options shown as variant photos:** Options shown as small photos, for example `Color`.
* **Options shown as a drawer:** Options shown as a drawer, for example `Size`.
* **Swatch and photo size (desktop)** and **Swatch and photo size (mobile):** The size of the swatches and photos (20 to 100 px).
* **Corner radius:** Use the theme's corner radius or set your own (options: Theme default, Custom). With **Custom**, **Custom corner radius** appears (0 to 50 px).

If the same option name is in more than one list, variant photos win over color swatches, and color swatches win over the drawer.

## Setting up color swatches

A color swatch takes its color from the first source it finds:

1. **Shopify's own swatch for the value.** If your product options are linked to a category metafield such as *Color* (Shopify's standard product taxonomy), you can set a color or an image for each value in **Content > Metaobjects** or when editing the option in the product. This is the most reliable way.
2. **Your custom colors.** In [Theme settings > Color swatches](/theme-settings/color-swatches), turn on **Enable custom colors** and add a line per value in **Custom colors**, for example `Midnight Blue:#191970` or `Multicolor:multicolor_swatch.png`. For a two or three color swatch, write the colors one after another, for example `Black and White:#000000#ffffff`. Upload pattern images in **Content > Files** and use their file name.
3. **The value name as a color.** Simple names that are standard web colors, such as *Red*, *Navy* or *Dark Red*, are painted automatically. *Multicolor* and *Rainbow* get a rainbow swatch.

A value that matches none of these is shown as an empty swatch, so add it to one of the first two sources. Round or square swatches are set with **Enable round color swatches** in [Theme settings > Color swatches](/theme-settings/color-swatches).

## Setting up variant photos

Variant photos use the image assigned to each variant. In your Shopify admin, open the product, click a variant and choose its image. If a value has no variant image, the product's main image is shown instead.

## Size guide

The size guide adds a link next to one option, for example *Size guide* next to Size. Clicking it opens a drawer with a size table and the content of a page.

* **Icon:** An icon shown before the link text. Choose **None** to show only the text.
* **Link text:** The text of the link, for example *Size guide*.
* **Option name:** The option the link appears next to, for example `Size`. It must match the option name of the product.
* **Page:** A page whose content is shown in the drawer, below the table. Its title becomes the drawer heading. Without a page, the link text is used as the heading.
* **Size table metafield:** A product metafield with a size table, written as namespace and key, for example `custom.size_table`. See below.
* **Striped table rows:** Shade every other row of the table.

The link appears only when **Link text** and **Option name** are filled in and there is something to show: a page, or a size table for this product. In the theme editor it is always shown so you can see where it lands.

### Setting up the size table metafield

Each product can have its own size table:

1. In your Shopify admin, go to **Settings > Custom data > Products** and click **Add definition**.
2. Enter a name, for example *Size table*. Shopify creates the namespace and key, for example `custom.size_table`.
3. Choose the type **Multi-line text** and save.
4. Open a product, scroll to **Metafields** and write the table: one row per line, cells separated by `|`. Start a cell with `#` to make it a heading cell. For example:

   ```
   #Size | #Chest (cm) | #Waist (cm)
   S | 88 to 92 | 72 to 76
   M | 96 to 100 | 80 to 84
   L | 104 to 108 | 88 to 92
   ```

5. In the theme editor, enter `custom.size_table` in **Size table metafield**.

:::tip
If all products share one size chart, skip the metafield and put the table on a page instead. Choose that page in **Page**.
:::

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the block (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Products with more than one product page

If your versions are separate products, for example one product per color, use the [Product siblings](/product-page/blocks/product-siblings) block instead. It links the products together and looks like a variant picker.
