---
title: "Shoppable image"
sidebar_label: "Shoppable image"
description: "Add hotspots to a large image that open a product card or a short benefit text."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Shoppable image section?

<SectionMeta version="v1.0.0" />

The **Shoppable image** section shows one large image with hotspot markers on it. Each marker opens a small card: a product the shopper can add to the cart, or a short text about a benefit or a feature. Use it for a styled room, an outfit or a close-up product shot where you want to point out what is in the picture.

{/* TODO: desktop screenshot or video */}

The section is available in two presets, both found under **Storytelling** in the **Add section** menu:

* **Shoppable image:** A heading, two product hotspots and one benefit hotspot.
* **Benefits image:** A heading, one product hotspot and two benefit hotspots. Use it to explain the features of a product.

Both presets use the same blocks, so you can turn one into the other by adding or removing hotspots.

## Section structure

When you expand the section in the theme editor sidebar, you will see:

* **Header:** A fixed heading area above the image. It contains a [Heading](/blocks/heading) block by default. Remove the heading if you do not need a section title.
* The hotspots: **Product hotspot** and **Benefit hotspot** blocks. Click **Add block** under the section to add more.

See [How sections and blocks work](/getting-started/sections-and-blocks) for more about fixed blocks and theme blocks.

## How the hotspots open

On desktop (900 px and wider), clicking a marker opens the card as a small pop-up next to the marker. On smaller screens, the card slides up from the bottom of the screen as a sheet, in the theme colors. Product hotspots show a ring marker, benefit hotspots show a plus marker.

## Section settings

* **Image (desktop):** The image the hotspots sit on.
* **Image (mobile):** A different image for screens narrower than 900 px, for example a portrait crop. Leave it empty to use the desktop image. Below 900 px the hotspots use their mobile positions, so check them whenever you change the mobile image.
* **Make section full width:** Enable this setting to make the section span the full width of the screen.

#### Colors

* **Text color:** Set the text color for the whole section.
* **Background color:** Set the background color of the section.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.

#### Section spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Header block

Click the **Header** block to style the heading area above the image.

* **Text alignment (desktop)** and **Text alignment (mobile):** Align the heading (options: Left, Center, Right).
* **Text container max width:** Limit the width of the heading area (0 to 1600 px). Set it to 0 to use the default maximum width.
* **Text color:** Override the section text color for the heading area.

You can add any theme block to the Header, for example a [Subheading](/blocks/subheading) or a [Text](/blocks/text) block.

## Product hotspot block

A **Product hotspot** marks a product on the image and opens a compact product card with an add to cart button.

* **Product:** The product the hotspot shows.

#### Desktop version

* **Horizontal position:** Where the marker sits, measured from the left of the image (20 to 87%).
* **Vertical position:** Where the marker sits, measured from the top of the image (5 to 95%).

#### Mobile version

* **Horizontal position** and **Vertical position:** The marker position on screens narrower than 900 px (13 to 87% across, 13 to 95% down).

### Compact product card block

Every product hotspot contains a fixed **Compact product card** block: a small card with a thumbnail on one side and the product details on the other. Leave its **Product** setting empty: the card uses the product picked on the hotspot.

* **Vertical alignment:** Align the details with the top or the center of the thumbnail (options: Top, Center).
* **Gap:** Space between the thumbnail and the details (0 to 32 px).
* **Text color** and **Background color:** Colors of the card.
* **Background blur:** Blur the image behind the card (0 to 20 px). Shown when a background color is set, and visible only when the color has some transparency.
* **Show shadow:** Show a shadow under the card.

The gap, colors, blur and shadow apply to the desktop pop-up. On mobile, the card opens in the bottom sheet with the theme colors.

The parts of the card are blocks. Click **Add block** under the **Compact product card** to add, remove or reorder them:

* **Thumbnail:** The product image. **Size (desktop)** and **Size (mobile)** set its width (60 to 160 px), **Image ratio** its shape (options: Square, Portrait, Adapt to image), and **Link to product** makes it open the product page.
* **Vendor:** The product's vendor. **Link to the vendor's collection** makes it a link, and the text scales make it smaller or larger.
* **Title:** The product name. **Heading tag** sets the heading level for search engines (options: h2, h3, h4), and the text scales set its size (50 to 300%).
* **Price:** The product price, with text scales for desktop and mobile. The compare-at price and discount are set in [Theme settings → Product badges](/theme-settings/product-badges).
* **Rating:** The star rating from your reviews app, with **Show review count** and **Hide when there are no reviews**.
* **Badge:** The first badge that applies to the product: Sold out, then the tag badges from [Theme settings → Product badges](/theme-settings/product-badges). **Badge background color** and **Text color** override the theme badge colors, and **Background blur** (0 to 20 px) blurs the image behind a semi-transparent badge.
* **Button:** The add to cart button. **Display** shows a bag icon or a full-width text button (options: Icon, Text), and **Button style** picks Primary or Secondary colors. The icon comes from [Theme settings → Icon set](/theme-settings/icon-set).

:::note
The **Button** adds a product with a single variant straight to the cart. For a product with options, such as size or color, it opens the quick view so the shopper can choose. A sold out product shows a disabled button.
:::

## Benefit hotspot block

A **Benefit hotspot** marks a detail on the image with a plus marker and opens a card with a short text. Use it to explain a material, an ingredient or a feature.

* **Image:** An optional small image shown in the card.
* **Heading:** The title of the card.
* **Text:** The text of the card.

#### Colors

* **Text color (desktop)** and **Background color (desktop):** Colors of the card in the desktop pop-up.
* **Background blur:** Blur the image behind the card (0 to 20 px). Shown when a background color is set, and visible only when the color has some transparency.
* **Show shadow (desktop):** Show a shadow under the desktop pop-up. The mobile sheet has no shadow.

#### Desktop version

* **Horizontal position:** Where the marker sits, measured from the left of the image (20 to 87%).
* **Vertical position:** Where the marker sits, measured from the top of the image (5 to 95%).

#### Mobile version

* **Horizontal position** and **Vertical position:** The marker position on screens narrower than 900 px (13 to 87% across, 13 to 95% down).

## Mobile view example

{/* TODO: mobile screenshot */}
