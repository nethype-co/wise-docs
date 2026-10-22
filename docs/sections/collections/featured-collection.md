---
title: "Featured collection"
sidebar_label: "Featured collection"
description: "Show products from a collection, or a hand-picked list of products, in a grid or a slider."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Featured collection section?

<SectionMeta version="v1.0.0" />

The **Featured collection** section shows a row of product cards from one collection or from products you pick by hand. Use it on your home page to promote best sellers, new arrivals or a seasonal range, and link shoppers through to the full collection.

{/* TODO: desktop screenshot or video */}

You will find it under **Collections** in the **Add section** menu. It starts with a heading and product cards showing the image, vendor, title, price and rating.

## Section structure

When you expand the section in the theme editor sidebar, you will see two fixed blocks:

* **Header:** An optional heading area above the products. It contains a [Heading](/blocks/heading) block by default. Remove the heading if you do not need a section title.
* **Products container:** Chooses which products to show and how they are laid out. Inside it is the **Product card** block, which controls how every card looks.

See [How sections and blocks work](/getting-started/sections-and-blocks) for more about fixed blocks and theme blocks.

## Section settings

* **Make section full width:** Enable this setting to make the section span the full width of the screen.

#### Colors

* **Background color:** Set the background color of the section.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.
* **Text color:** Set the text color for the whole section. It is also used for the prices and rating stars on the cards, so the cards stay readable on a dark background.

#### Section spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Header block

Click the **Header** block to style the heading area above the products.

* **Text alignment (desktop)** and **Text alignment (mobile):** Align the heading (options: Left, Center, Right).
* **Text container max width:** Limit the width of the heading area (0 to 1600 px). Set it to 0 to use the default maximum width.
* **Text color:** Override the section text color for the heading area.

You can add any theme block to the Header, for example a [Subheading](/blocks/subheading) above the heading or a [Text](/blocks/text) block below it.

## Products container block

Click the **Products container** block to choose the products and the layout.

* **Collection:** The collection to show products from, in the collection's own sort order.
* **Products:** Pick individual products instead. When you pick products here, they are shown instead of the collection.
* **Products to show:** The maximum number of products (3 to 24).

:::note
If the selected collection has no products, the section is hidden in your online store. In the theme editor you see a short note instead, so you know why. When no collection and no products are selected, the section shows placeholder cards so you can style it before setup.
:::

#### Desktop version

* **Layout:** Show the products in a grid or a slider (options: Grid, Slider).
* **Items per row:** How many cards fit in one row (2 to 5).
* **Gap:** Space between the cards (2 to 24 px).

#### Mobile version

* **Layout:** Grid or Slider on mobile.
* **Items per row:** How many cards fit across the screen (1.1 to 2.5). A value like 2.1 shows a part of the next card, which hints that the slider can be swiped.
* **Gap:** Space between the cards (2 to 16 px).

#### Slider behavior

* **Enable loop:** Let the slider start again from the first card after the last one. Shown only when one of the layouts is set to **Slider**.

#### Buttons

* **Show "View all" button:** Show a button below the products that links to the collection. It appears only when a **Collection** is selected, no hand-picked **Products** are set, and the collection has more products than **Products to show**.
* **"View all" button style:** The look of the button (options: Primary, Secondary, Link).

#### Pagination

These settings appear when one of the layouts is set to **Slider**.

* **Custom dots:** Enable this setting to style the slider dots for this section only. When it is off, the dots use [Theme settings → Sliders](/theme-settings/sliders).
* **Dot background color**, **Dot background blur** (0 to 20 px), **Active dot color** and **Inactive dot color:** The custom dot styles. Shown only when **Custom dots** is on.

## Product card block

The **Product card** block sits inside the **Products container**. It is one card design that is repeated for every product, so any change you make here applies to all the cards in the section. The parts of the card (image, title, price and so on) are blocks inside it, described in [Product card content blocks](#product-card-content-blocks) below.

* **Text alignment:** Align the card text (options: Left, Center).
* **Height:** **Stretch** makes every card in a row as tall as the tallest one, so they end level. **Auto** lets each card end at its own content.

#### Quick buy

These settings control what happens when a shopper uses the **Quick buy button** block or the quick buy icon on the product image.

* **Action:** Choose what quick buy does (options: Add to cart, or open quick view for products with options; Always open quick view; Open the quick buy picker on the card). The quick view is a popup with the product's details, see [Quick view](/header-footer/quick-view). The quick buy picker opens a small panel on the card where the shopper picks a size and adds it to the cart without leaving the page.
* **Options shown in the picker:** The option names the picker can show, one per line, for example "Size". Shown only when **Action** is set to the quick buy picker.
* **Size guide link text:** The text of a size guide link in the picker header. Leave it empty to hide the size guide. Shown only for the quick buy picker.
* **Size guide page:** A page whose content is shown in the size guide, below the size table. Used only with the quick buy picker.
* **Size guide metafield:** The product metafield that holds the size table, for example `custom.size_chart`. Shown only for the quick buy picker.

:::tip
A product gets the quick buy picker for the first option in your list that it has, as long as every other option of that product is a color swatch option (set in [Theme settings → Color swatches](/theme-settings/color-swatches)) or has only one value. Any other product opens the quick view instead, so the picker never hides a choice from the shopper.

For the size table metafield, use a multi-line text metafield. Put each row on a new line, separate the cells with `|`, and start a cell with `#` to make it a header cell.
:::

#### Spacing

* **Padding top (desktop)** and **Padding bottom (desktop):** Space inside the top and bottom of the whole card, image included (0 to 40 px). The side padding follows the theme spacing and cannot be set here.
* **Show custom mobile spacing:** Enable this setting to use different padding on mobile. When it is on, **Padding top (mobile)** and **Padding bottom (mobile)** appear.

#### Colors

* **Text color:** The text color of the card.
* **Background color:** A background color behind the card.
* **Background blur:** Blur what is behind the card (0 to 35 px). This shows only when the background color is partly transparent.

## Product card content blocks

Click **Add block** under the **Product card** to add parts to the card. Drag the blocks to change their order on the card. You can also add a [Separator](/blocks/separator) between them. Each part is optional, so remove any you do not need.

### Media block

The **Media** block shows the product image at the top of the card, with the product badges and an optional quick buy icon on top.

* **Media (desktop):** What the image area does on desktop (options: One image, Second image on hover, Gallery). **Second image on hover** shows the product's second image when a shopper points at the card. **Gallery** lets the shopper browse several images inside the card.
* **Media (mobile):** One image or Gallery on mobile. Hover is not offered, because touch screens have no hover.
* **Media in gallery:** How many images and videos the gallery shows (2 to 10). Shown only when a gallery is used.
* **Gallery indicator:** How the gallery shows its position (options: Segmented bar, Dots, None).
* **Gallery navigation:** How a shopper with a mouse moves through the gallery on desktop (options: Arrows, Hover zones). **Hover zones** change the image as the pointer moves across it. Shown only when the desktop media is set to **Gallery**.
* **Custom dots**, **Dot background color**, **Dot background blur**, **Active dot color** and **Inactive dot color:** Style the gallery dots for this block. When **Custom dots** is off, the dot colors come from [Theme settings → Sliders](/theme-settings/sliders). Shown only when the gallery indicator is set to **Dots**.
* **Bar** and **Active segment:** Colors of the segmented bar. Leave **Bar** empty to use the background color at 90% opacity, and **Active segment** empty to use the action color. Shown only when the gallery indicator is set to **Segmented bar**.
* **Image ratio:** The shape of the image (options: Adapt to image, Portrait, Square, Landscape).
* **Image fit:** **Crop to fill** fills the shape and crops the edges. **Show whole image** fits the full image inside the shape.
* **Show video:** Play the product's first video, muted and looping. With one image or hover, the video replaces the image. In the gallery, it becomes one of the slides.
* **Badges position:** Where the product badges sit on the image (options: Top left, Top right, Bottom left, Bottom right). The badges themselves are set up in [Theme settings → Product badges](/theme-settings/product-badges).

**Quick buy icon.** A small round button on the image that triggers quick buy.

* **Show quick buy icon:** Show the icon. What it does is set on the **Product card** block under **Quick buy**, and the icon comes from [Theme settings → Icon set](/theme-settings/icon-set).
* **Icon position:** The corner of the image (options: Top left, Top right, Bottom left, Bottom right).
* **Visible on:** Show the icon on desktop and mobile, desktop only, or mobile only. Desktop starts at 1200 px screen width.
* **Button style:** Primary or Secondary button colors.
* **Icon color**, **Background color** and **Background blur** (0 to 20 px): Override the button colors. The blur shows only when the background color is partly transparent. At 0, the button style's own blur is kept.

### Vendor block

Shows the product's vendor (brand).

* **Link to the vendor's collection:** Make the vendor name a link to a page with all of that vendor's products.
* **Text scale (desktop)** and **Text scale (mobile):** Make the text smaller or larger (50 to 300% on desktop, 80 to 300% on mobile).

### Title block

Shows the product name, linked to the product page.

* **Heading tag:** The heading level used for the title (options: h2, h3, h4). This matters for search engines and screen readers, not for the look. Keep h3 unless your page structure needs another level.
* **Text scale (desktop)** and **Text scale (mobile):** Make the title smaller or larger (50 to 300%).

### Price block

Shows the product price, with the compare-at price when the product is on sale.

* **Text scale (desktop)** and **Text scale (mobile):** Make the price smaller or larger (50 to 300% on desktop, 80 to 300% on mobile).

Whether the compare-at price and the discount percentage are shown is set in [Theme settings → Product badges](/theme-settings/product-badges).

### Rating block

Shows the product's star rating. It reads Shopify's standard product rating metafield, which most reviews apps fill in for you.

* **Show review count:** Show the number of reviews next to the stars.
* **Hide when there are no reviews:** Hide the stars for products that have no rating yet.

:::note
If your reviews app does not write to Shopify's product rating metafield, the stars stay empty. Check your reviews app's settings for an option to sync ratings to Shopify metafields.
:::

### Swatches block

Shows small color swatches on the card. Clicking a swatch changes the card image to that color.

* **Colors come from:** **Product options** uses the product's own color option, with the option names set in [Theme settings → Color swatches](/theme-settings/color-swatches). **Product siblings** shows separate products that are linked as color versions of each other through a metafield, also set in Color swatches.
* **Picker style:** How each color is shown (options: Product image, Tiles, Swatch).
* **Swatch and photo size (desktop)** and **Swatch and photo size (mobile):** The size of each swatch (16 to 48 px).
* **Corner radius:** Use the theme's default rounding, or choose **Custom** and set **Custom corner radius** (0 to 50 px).
* **Maximum shown:** How many swatches are shown (2 to 10). Any further colors are summed up as a "+N" count.
* **Change card on:** Change the card when a swatch is clicked or hovered (options: Click, Hover). Hover works only with a mouse, click always works.

### Tags block

Shows a few short tags on the card, for example "Vegan" or "New".

* **Style:** Show the tags as pills or as plain text (options: Pill, Text).
* **Tags to show:** How many tags are shown (1 to 3).
* **Hide tags shown as badges:** Skip tags that are already used as a badge in [Theme settings → Product badges](/theme-settings/product-badges), so the same word is not shown twice.
* **Tags metafield:** A product metafield to take the tags from, as namespace and key, for example `custom.ingredients`.
* **Metaobject field:** If the metafield points to metaobjects, the field of the metaobject to show. Leave it empty to use the label, name or title field. Shown only when a tags metafield is set.
* **Custom tags:** Fixed tags, separated by commas. They are used when the tags metafield is empty. When both are empty, the product's own tags are shown.
* **Tag text style:** Use the body or button text style for pills (options: Body, Button). Shown only for the Pill style.
* **Tag font size** and **Tag font size (mobile):** Text size (10 to 20 px). Shown only for the Text style.
* **Tag text case:** Normal, Uppercase, Lowercase or Capitalize. Shown only for the Text style.
* **Tag letter spacing:** Space between letters (-3 to 5 px). Shown only for the Text style.
* **Tag background color**, **Tag text color** and **Tag border color:** The tag colors. The background and border colors are shown only for the Pill style.

### Quick buy button block

Shows a button on the card that adds the product to the cart, opens the quick view or opens the quick buy picker. What it does is set on the **Product card** block, under **Quick buy**.

* **Button style:** The look of the button (options: Primary, Secondary, Link).
* **Visible on:** Show the button on desktop and mobile, desktop only, or mobile only. Desktop starts at 1200 px screen width.

## Mobile view example

{/* TODO: mobile screenshot */}
