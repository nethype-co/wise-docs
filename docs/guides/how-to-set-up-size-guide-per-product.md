---
title: "How to set up a size guide per product"
sidebar_label: "Size guide per product"
description: "Show a size table that is different for each product, a shared size guide page, or both, on the product page and in the quick buy picker on product cards."
sidebar_position: 4
---

## What you will set up

Wise can show a size guide as a link that opens a drawer or popup. The content can come from:

* **A size table metafield:** A table you type into each product, so every product shows its own sizes.
* **A page:** One store page, for example *How to measure*, shared by all products.
* **Both:** The product's own table followed by the shared page.

{/* TODO: screenshot of the Size guide link next to the Size option and the open drawer */}

## Where the size guide can appear

| Where | Block or setting | Content |
|---|---|---|
| Next to an option in the Variant picker | **Size guide** settings of the [Variant picker](/product-page/blocks/variant-picker#size-guide) block | Size table metafield and a page |
| Anywhere in the product information | [Popup](/product-page/blocks/information-popup) block | Metafield table, page content, text, images and more |
| As a row that opens a side drawer | [Collapsible drawer](/product-page/blocks/collapsible-drawer) block | Page content, text, images and more |
| In the quick buy picker on product cards | **Size guide** settings of the product card, under **Quick buy** | Size table metafield and a page |

Pick the Variant picker when the guide belongs next to the *Size* option. Pick the Popup when the product has no size option, or when you want the link somewhere else. You can use more than one place at the same time with the same metafield.

## Step 1: Create the size table metafield

Skip this step if you only want a shared page.

1. In your Shopify admin, go to **Settings > Custom data > Products** and click **Add definition**.
2. Enter a name, for example *Size chart*. Shopify creates the namespace and key, for example `custom.size_chart`.
3. Choose the type **Multi-line text** (one value) and save.

{/* TODO: screenshot of the Size chart metafield definition */}

## Step 2: Fill in the table on each product

1. Open a product in your Shopify admin and scroll to **Metafields**.
2. In **Size chart**, type the table:
   * Put each row on its own line.
   * Separate the cells with a vertical bar `|`.
   * Start a cell with `#` to make it a heading cell.
   * Empty lines are ignored.
3. Click **Save**, and repeat for each product that needs its own table.

For example:

```
#Size | #Chest (cm) | #Waist (cm)
S | 88 to 92 | 72 to 76
M | 96 to 100 | 80 to 84
L | 104 to 108 | 88 to 92
XL | 112 to 116 | 96 to 100
```

This shows a table with a heading row and four size rows. Rows don't need the same number of cells, and wide tables scroll sideways on small screens.

{/* TODO: screenshot of the metafield filled in on a product */}

:::tip
Products without a value simply show no table. If you also choose a page, those products still show the page content.
:::

## Step 3 (optional): Create a shared page

If you want text that is the same for every product, such as measuring tips, create it once:

1. Go to **Online Store > Pages** and click **Add page**.
2. Give it a title, for example *Size guide*, and add your content: text, tables or images.
3. Click **Save**.

## Step 4: Add the size guide link

### Option A: next to the Size option (Variant picker)

1. In your Shopify admin, go to **Online Store > Themes** and click **Customize**, then open a product page.
2. In the **Product information** section, select the **Variant picker** block.
3. Scroll to **Size guide** and fill in:
   * **Link text:** for example *Size guide*.
   * **Option name:** the option the link appears next to, for example `Size`. It must match the product's option name. Capital letters don't matter, but *Shoe size* does not match *Size*.
   * **Icon:** for example **Ruler**, or **None** for text only.
   * **Size table metafield:** `custom.size_chart`.
   * **Page:** your shared page, if you made one.
   * **Striped table rows:** shade every other row of the table.
4. Click **Save**.

The link appears only when **Link text** and **Option name** are filled in and the product has a size table or a page is chosen. The drawer heading is the page title, or the link text when no page is chosen. The table comes first, then the page content.

{/* TODO: screenshot of the Size guide settings in the Variant picker */}

### Option B: as a standalone link (Popup)

1. In the **Product information** section, click **Add block** and choose **Popup**.
2. Set **Link text**, for example *Size guide*, and an **Icon**. The link text is also the title of the popup.
3. Remove the starting Heading and Text blocks inside the Popup if you don't need them.
4. Inside the Popup, click **Add block** and add a **Metafield table**. Enter `custom.size_chart` in **Table metafield** and choose **Striped table rows**.
5. To show a shared page too, add a **Page content** block and choose the page. Drag the blocks into the order you want.
6. Drag the Popup to where you want the link and click **Save**.

The link is hidden on products where none of the blocks inside the Popup shows anything, for example when the popup holds only a Metafield table and the product has no table. See [Popup](/product-page/blocks/information-popup#metafield-table-block).

{/* TODO: screenshot of the Popup block with a Metafield table */}

### Option C: as a row with a side drawer (Collapsible drawer)

Use this for a long, shared size guide, for example with images.

1. In the **Product information** section, click **Add block** and choose **Collapsible drawer**.
2. Set the **Title**, for example *Size guide*, and an icon.
3. In the **Page content** block inside the drawer, choose your size guide page. Remove the Heading and Text blocks you don't need.
4. Click **Save**.

The Collapsible drawer has no metafield table block, so use it for a shared page. For a per product table, use Option A or B. See [Collapsible drawer](/product-page/blocks/collapsible-drawer).

:::note
The Variant picker, Popup and Collapsible drawer blocks are also available in the [Featured product](/sections/collections/featured-product) section, with the same settings.
:::

## Step 5 (optional): Size guide on product cards

If your product cards use the quick buy picker, customers can open the size guide from the card without leaving the collection page.

1. Open a section with product cards, for example the collection page, and select the **Product card**.
2. Under **Quick buy**, set **Action** to **Open the quick buy picker on the card**.
3. Fill in:
   * **Size guide link text:** for example *Size guide*. Leave it empty to hide the size guide.
   * **Size guide metafield:** `custom.size_chart`.
   * **Size guide page:** your shared page, if you made one.
4. Click **Save**.

The link appears in the picker header when the product has a table or a page is chosen. See [Collection product grid](/pages/collection-product-grid#quick-buy).

## Related articles

* [Variant picker](/product-page/blocks/variant-picker#size-guide)
* [Popup](/product-page/blocks/information-popup)
* [Collapsible drawer](/product-page/blocks/collapsible-drawer)
* [Collection product grid](/pages/collection-product-grid)
* [A complete guide to customizing the variant picker](/guides/a-complete-guide-to-customizing-the-variant-picker)
