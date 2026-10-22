---
title: "Collapsible row"
sidebar_label: "Collapsible row"
description: "Add an expandable row with product details, care instructions, downloads or a specification table."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Collapsible row block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Collapsible row** block shows a title that opens to reveal more content when clicked. Use several rows to keep long product information tidy, for example *Details*, *Care*, *Shipping and returns* or *Downloads*. The content of a row is built from blocks, so it can hold text, a store page, an image, a specification table, file downloads and more.

{/* TODO: screenshot of three collapsible rows, one of them open */}

To add the block, open the **Product information** section and click **Add block**. See [Product information](/product-page/product-information) for how blocks work on the product page. The block can also be placed in the **Below gallery** area.

The block comes in three presets:

* **Collapsible row:** A row with a [Text](/blocks/text) block inside.
* **Collapsible row: file:** A row with a **File** block, for downloads such as a manual.
* **Collapsible row: table:** A row with a **Table** block and two rows.

:::tip
If you want the content to slide in from the side of the screen instead of opening in place, use the [Collapsible drawer](/product-page/blocks/collapsible-drawer).
:::

## Settings

* **Open by default:** Show the row open when the page loads.

#### Title

* **Title font:** Use the body, heading or subheading font for the title.
* **Title:** The text shown on the row.
* **Text scale (desktop)** and **Text scale (mobile):** Make the title smaller or larger (50 to 300%).

#### Icon

* **Image:** Upload your own icon, shown before the title.
* **Icon:** Or pick an icon from the theme's icon set.
* **Icon advanced settings:** Enable this setting to adjust **Icon height** (10 to 100 px) and **Icon top margin** (0 to 16 px), separately for desktop and mobile.

The arrow or plus sign on the right of the row is set for the whole store in [Icon set](/theme-settings/icon-set), under **Accordion indicator** (options: Arrow, Plus / minus).

#### Colors

* **Text color:** The color of the title and content.
* **Background color:** A background color for the row.
* **Line color:** The color of the divider lines. Leave it empty to use the theme border color, or make it transparent to hide the line.

#### Visibility

* **Hide if content is empty:** Hide the whole row when its content has no text, image or video, for example when a block inside it is connected to a metafield that is empty for this product. In the theme editor the row stays visible with a note.

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the row (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Content blocks

Click **Add block** inside the Collapsible row to build its content. You can add theme blocks such as [Text](/blocks/text), [Heading](/blocks/heading), [Button](/blocks/button) or [Icon with text](/blocks/icon-with-text), plus the blocks below. A [Feature icons list](/product-page/blocks/feature-icons-list) and [Feature tags](/product-page/blocks/feature-tags) can also go inside a row.

:::tip
A [Text](/blocks/text) block can be connected to a product metafield with the **Connect dynamic source** button next to its text field. This is the easiest way to show different content on each product.
:::

### Page content block

Shows the content of one of your store pages inside the row. Handy for text you reuse on many products, such as shipping or return information: edit the page once in **Online Store > Pages** and every row updates.

* **Page:** The page whose content is shown. With no page selected, nothing is shown on the storefront.

### Media block

Shows an image or a video inside the row.

* **Media type:** Show an image or a video.
* **Image** or **Video:** Upload the image, or select a video uploaded to Shopify. The video plays muted and on a loop.
* **Custom play/pause button** and **Custom mute/unmute button:** Show the theme's own buttons on the video. Shown only for a video.
* **Height:** Choose **Adapt to media** to keep the media's own shape, or **Fixed height** to crop it to a set height.
* **Height (desktop)** and **Height (mobile):** The fixed height (200 to 1000 px). Shown only when **Fixed height** is selected.

### File block

Shows download links for files stored in a product metafield, for example a user manual, a size chart PDF or a certificate.

* **Metafield:** The namespace and key of the metafield, for example `custom.manual`.
* **Label:** The link text for a single file. Leave it empty to show the file name. For a list of files, each link always shows its file name.

To set up the metafield:

1. In your Shopify admin, go to **Settings > Custom data > Products** and click **Add definition**.
2. Enter a name, for example *Manual*, and choose the type **File**. Select **One value** for one file, or **List of values** for several files. Save.
3. Open a product and upload the file in its **Metafields** area.
4. In the theme editor, enter the namespace and key, for example `custom.manual`, in the File block's **Metafield** setting.

:::tip
For a different file per variant, also create a **Variants** metafield with exactly the same namespace and key (**Settings > Custom data > Variants**). When a variant has its own file, it wins over the product's file, and the link updates when the customer picks another variant.
:::

### Table block

Shows a two-column table, for example a specification list with *Material*, *Weight* and *Dimensions*. The rows can be **Row** blocks you type in, or come from a product metafield.

* **Rows from:** Use **Row blocks** to type the rows in the editor, or **Metafield** to read them from the product. With Metafield, the Row blocks are not shown.
* **Metafield:** The namespace and key of the product metafield, for example `custom.specification`. Shown only when **Rows from** is set to Metafield.

**Desktop version.**

* **Text alignment:** Align the table text (options: Left, Center, Right, Space between). Space between puts the labels on the left and the values on the right.

**Mobile version.**

* **Row layout:** Show the label and value stacked (Column) or side by side (Row).
* **Text alignment (mobile):** Align the table text on mobile.

**Colors.**

* **Odd row background:** The color of every other row.
* **Odd row text:** The text color of those rows.
* **Label text:** The color of the label column.

**Table borders.**

* **Row divider:** Draw a line below, above, or above and below each row, or no line (None).
* **Row divider color** and **Row divider thickness:** Style the line (1 to 4 px). Leave the color empty to use the rows' text color. Shown only when a divider is selected.

**Row block.** With **Rows from** set to Row blocks, each **Row** is one line of the table.

* **Label:** The left column, for example *Material*.
* **Value:** The right column, for example *100% organic cotton*.

**Setting up a table metafield.** The metafield can be one of two types:

* **A list of metaobjects (recommended).** Create a metaobject definition in **Settings > Custom data > Metaobjects** with a text field whose key is `name` (or `label`) and a text field whose key is `value`. Then add a product metafield in **Settings > Custom data > Products** of type **Metaobject**, pointing to that definition, with **List of values**. On each product, pick or create the rows.
* **Multi-line text.** Add a product metafield of type **Multi-line text**. Type each row as a label on the first line and the value on the next line(s), and leave an empty line between rows.

When the metafield is empty for a product, the table shows nothing. Turn on **Hide if content is empty** on the row to hide the whole row in that case.

## Mobile view example

{/* TODO: mobile screenshot */}
