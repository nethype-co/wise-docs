---
title: "Pills navigation"
sidebar_label: "Pills navigation"
description: "A row of round image links or button-style pills that take customers to collections, products or pages."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Pills navigation section?

<SectionMeta version="v1.0.0" />

The **Pills navigation** section shows a row of links, either as round images with a label or as button-style pills. The pill for the page the customer is on is highlighted. Use it as visual category navigation on the home page or at the top of collection pages, similar to stories or category bubbles in shopping apps.

![Pills navigation on desktop](/img/docs/sections/pills-navigation-desktop.jpg)

The section is found under **Other** in the **Add section** menu. It starts with a heading and four pills.

## Section structure

When you expand the section in the theme editor sidebar, you will see two fixed blocks:

* **Header:** An optional heading area above the pills. It contains a [Heading](/blocks/heading) block by default. Remove the heading if you do not need a title.
* **Pills:** Holds the **Pill** blocks and controls how they look.

See [How sections and blocks work](/getting-started/sections-and-blocks) for more about fixed blocks and theme blocks.

## Section settings

* **Make section full width:** Enable this setting to make the section span the full width of the screen.

#### Colors

* **Text color:** Set the text color for the whole section.
* **Background color:** Set the background color of the section.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.

#### Section spacing

* **Distance top (desktop):** Space above the section on desktop (0 to 100 px).
* **Distance bottom (desktop):** Space below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Header block

Click the **Header** block to style the heading area above the pills.

* **Text alignment (desktop)** and **Text alignment (mobile):** Align the heading (options: Left, Center, Right).
* **Text container max width:** Limit the width of the heading area (0 to 1600 px). Set it to 0 to use the default maximum width.
* **Text color:** Override the section text color for the heading area.

You can add any theme block to the Header, for example a [Subheading](/blocks/subheading) or a [Text](/blocks/text) block.

## Pills block

Click the **Pills** block to style all pills at once.

#### Layout

* **Pill style:** Show each pill as an image with a label (Image) or as a button-shaped pill (Button). In the Button style, an image is optional and appears inside the pill with the label.
* **Direction:** Put the image above the label (Column) or beside it (Row).
* **Text style:** Use the body font or the heading font for the labels (options: Body, Heading).
* **Enable custom border radius:** Enable this setting to change how rounded the pills and images are.
* **Pill radius:** How rounded the pill outline and background are (0 to 50 px). Shown only when the custom border radius is on and **Pill style** is **Button**.
* **Image border radius:** How rounded the images and the ring around them are (0 to 50%). 50% is a circle. Shown only when the custom border radius is on.

#### Desktop version

* **Image size:** The size of the images (20 to 200 px).
* **Font size:** Make the labels smaller or larger (50 to 300%).
* **Gap between pills:** Space between the pills (0 to 48 px).
* **Layout:** Wrap the pills onto more lines when they do not fit (Grid) or keep them in one row that scrolls sideways (Slider).
* **Placement:** Place the pills on the left or in the center (options: Left, Center).

#### Mobile version

The same settings as the desktop version, for mobile: **Image size** (20 to 200 px), **Font size** (50 to 200%), **Gap between pills** (0 to 48 px), **Layout** and **Placement**.

#### Image style

* **Active ring color:** The color of the ring drawn around the image of the current page's pill, also shown on hover. Leave it empty to use the border color from Theme settings. Shown only when **Pill style** is **Image**.

#### Pill colors

These settings are shown only when **Pill style** is **Button**. The active colors are also used on hover.

* **Background color**, **Text color** and **Border color:** The colors of the pills.
* **Active background color**, **Active text color** and **Active border color:** The colors of the pill for the current page.

## Pill block

Each **Pill** block is one link. Add, duplicate, reorder or remove pills in the **Pills** block.

* **Image:** The image of the pill. Without an image, the Image style shows a placeholder and the Button style shows the label only.
* **Label:** The text of the pill.
* **Link:** The page the pill opens, for example a collection.
* **Open link as a new window:** Open the link in a new browser tab.

:::tip
A pill is highlighted when the customer is on the page it links to. A pill that links to a collection is also highlighted on the products of that collection, and a pill that links to a product type or vendor page is highlighted on that type or vendor.
:::

## Mobile view example

<div style={{display: "flex", justifyContent: "center", marginBottom: "20px"}}>
  <img src="/img/docs/sections/pills-navigation-mobile.jpg" alt="Pills navigation on mobile" style={{maxWidth: "320px", borderRadius: "8px"}} />
</div>
