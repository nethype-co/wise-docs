---
title: "How to set up Product siblings"
sidebar_label: "Set up Product siblings"
description: "Link separate products, such as one product per color, and show them as swatches or images on the product page and on product cards."
sidebar_position: 2
---

## What you will set up

**Product siblings** (also known as *product variations* or *combined listings*) link separate products that are versions of each other, for example a T-shirt that you sell as one product per color. When you finish this guide:

* The product page shows all versions as product images, swatches, tiles or a dropdown, and clicking one opens that product.
* Product cards in your collections can show the same versions as swatches.

{/* TODO: screenshot of product siblings shown as product images on the product page */}

Not sure whether you need siblings or normal variants? Read [Standard variant picker vs. Product siblings](/guides/standard-variant-picker-vs-product-siblings) first.

You will need two product metafields:

* An **option value** metafield, which names each version (for example *Sage* or *Navy*) and can hold its swatch color.
* A **products** metafield, a list of all products in the family.

## Step 1: Choose the option value type

The option value metafield can be one of three types. Pick the one that fits how you want the versions to look.

| Type | Best for | What it gives |
|---|---|---|
| **Metaobject** (recommended) | Color swatches, pattern swatches | A name, a color and an optional swatch image, set up once and reused on many products |
| **Single line text** | Tiles, dropdowns, product images with a name | A name. Standard color names such as *Red* also paint a swatch |
| **Color** | Plain color swatches | A color. The product title is used as the name |

:::tip
If you only want to show each version's product image with a name, a **Single line text** metafield is all you need. If you don't create an option value metafield at all, the product title is used as the name.
:::

## Step 2: Create the metafield definitions

### Option A: a metaobject for colors

Use this when you want proper color or pattern swatches.

**Use Shopify's standard Color metaobject.** When you set a product category such as *Clothing > Shirts*, Shopify adds a **Color** category metafield (namespace and key `shopify.color-pattern`) that uses Shopify's standard Color metaobject. Its entries already have a label, a color and an optional image, so Wise can read them directly. The metafield is a list: Wise uses the first entry.

**Or create your own metaobject:**

1. In your Shopify admin, go to **Settings > Custom data > Metaobject definitions** and click **Add definition**. Name it, for example *Color swatch*.
2. Add these fields, using exactly these keys:
   * `label`: **Single line text**, the name shown to customers, for example *Sage*.
   * `color`: **Color**, the swatch color.
   * `image`: **File** (image), optional. A pattern or fabric photo. When it is set, it is used instead of the color.
3. Save, then go to **Content > Metaobjects** and add an entry for each color.
4. Go to **Settings > Custom data > Products** and click **Add definition**. Name it, for example *Color*. Shopify creates the namespace and key, for example `custom.color`.
5. Choose the type **Metaobject**, select your *Color swatch* definition and save.

{/* TODO: screenshot of the metaobject definition with label, color and image fields */}

### Option B: single line text or color

1. Go to **Settings > Custom data > Products** and click **Add definition**.
2. Enter a name, for example *Color*. Shopify creates `custom.color`.
3. Choose the type **Single line text** or **Color** and save.

With text values, a name that is not a standard color, such as *Dusty sage*, needs a line in **Custom colors** to show as a swatch. See [Custom colors](/theme-settings/color-swatches#custom-colors).

### The products list metafield

1. Go to **Settings > Custom data > Products** and click **Add definition**.
2. Enter a name, for example *Siblings*. Shopify creates the namespace and key, for example `custom.siblings`.
3. Choose the type **Product** and select **List of products**. Save.

{/* TODO: screenshot of the product list metafield definition */}

## Step 3: Fill in the metafields on every product

Repeat this for every product in the family.

1. In your Shopify admin, open the product and scroll to **Metafields**.
2. In the option value metafield, enter or pick this product's value, for example the *Sage* entry on the sage product.
3. In the *Siblings* metafield, select every product in the family, including this product itself.
4. Click **Save**.

:::tip
Use the same list, in the same order, on every product in the family. That way the selection looks the same whichever version the customer lands on.
:::

:::note
On the product page, a product that is missing from its own list is added at the start automatically. Product cards don't do this, so always include the product itself in the list.
:::

{/* TODO: screenshot of the two metafields filled in on a product */}

## Step 4: Add the Product siblings block

1. In your Shopify admin, go to **Online Store > Themes** and click **Customize**.
2. Open a product page from the page selector at the top.
3. In the **Product information** section, click **Add block** and choose **Product siblings**. Drag it to where you want it, usually above the [Variant picker](/product-page/blocks/variant-picker).
4. In **Option name**, enter the name shown above the versions, for example *Color*.
5. In **Products metafield**, enter the namespace and key of your list, for example `custom.siblings`.
6. In **Option value metafield**, enter the namespace and key of your option value, for example `custom.color` or `shopify.color-pattern`.
7. Choose a **Picker style**:
   * **Product image:** Each version's main image. Works without a color metafield.
   * **Swatch:** A color swatch from the option value metafield.
   * **Tiles** or **Dropdown:** The name of each version. With **Show swatch or image** you can add a swatch or the product image in front of the name.
8. Click **Save**.

{/* TODO: video of adding the Product siblings block and choosing the picker style */}

Instead of typing the products metafield, you can click the **Connect dynamic source** icon next to **Products** and choose your *Siblings* metafield. Typing it in **Products metafield** is the better choice if you also use the block in quick view, where a dynamic source cannot be connected.

For every setting, including size, corner radius, image fit and the subtitle metafield, see [Product siblings](/product-page/blocks/product-siblings).

:::tip
You can use Product siblings and the Variant picker on the same page, for example siblings for the color and the Variant picker for the size of each color.
:::

## Step 5: Show siblings on product cards

Product cards read their sibling metafields from theme settings, so you set them once for the whole store.

1. In the theme editor, click the gear icon to open **Theme settings** and open **Color swatch**.
2. Under **Product siblings / variations**, enter the same metafields as in the block:
   * **Option value metafield**, for example `custom.color`.
   * **Products metafield**, for example `custom.siblings`.
3. Open a section with product cards, for example the collection page, and select the **Product card**.
4. Add a **Swatches** block to the card, or select the one already there.
5. Set **Colors come from** to **Product siblings** and choose a **Picker style** (Product image, Tiles or Swatch).
6. Click **Save**.

Clicking a swatch on the card switches the card to that product: image, title, price and link change. Use **Change card on** to switch on hover instead of click. See [Product siblings in Color swatch](/theme-settings/color-swatches#product-siblings) for details.

{/* TODO: screenshot of product cards with sibling swatches */}

## Step 6: Choose a fallback (optional)

Some products may not have an option value yet. In **Theme settings > Color swatch**, **Show fallback if value metafield is empty** is on by default:

* **Product image:** The swatch shows the product's image.
* **Custom metafield:** The value is read from a second metafield in **Fallback metafield**, for example `custom.fragrance` for products that vary by scent.

The fallback applies to both the Product siblings block and product card swatches.

## Troubleshooting

* **The block shows nothing:** The product has no products list, or the **Products metafield** in the block is misspelled. When **Products metafield** is filled in, the **Products** picker is ignored.
* **Every version shows the product title:** The **Option value metafield** is empty or misspelled, or the products have no value in it.
* **A swatch is empty:** The value has no color. Use a metaobject with a color, or add the name to **Custom colors** in [Theme settings > Color swatch](/theme-settings/color-swatches#custom-colors).
* **Card swatches are missing:** Check the two metafields in **Theme settings > Color swatch** and that the card's Swatches block is set to **Product siblings**.

## Related articles

* [Standard variant picker vs. Product siblings](/guides/standard-variant-picker-vs-product-siblings)
* [Product siblings](/product-page/blocks/product-siblings)
* [Color swatch](/theme-settings/color-swatches#product-siblings)
* [Variant picker](/product-page/blocks/variant-picker)
* [Collection product grid](/pages/collection-product-grid)
