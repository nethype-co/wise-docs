---
title: "Collection list"
sidebar_label: "Collection list"
description: "Show a set of collections as image cards or buttons, in a grid or a slider."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Collection list section?

<SectionMeta version="v1.0.0" />

The **Collection list** section shows the collections you choose as cards with an image and a title, each linking to its collection page. Use it on your home page to help shoppers jump straight into your main categories. You can also hide the images and show the collections as a row of buttons.

{/* TODO: desktop screenshot or video */}

You will find it under **Collections** in the **Add section** menu. It starts with a heading and six collection items.

## Section structure

When you expand the section in the theme editor sidebar, you will see two fixed blocks:

* **Header:** An optional heading area above the collections. It contains a [Heading](/blocks/heading) block by default. Remove the heading if you do not need a section title.
* **Collection list container:** Sets the image shape and the layout. Each collection is a **Collection item** block inside it.

See [How sections and blocks work](/getting-started/sections-and-blocks) for more about fixed blocks and theme blocks.

## Section settings

* **Hide images, list collections as buttons:** Show each collection as a button with its title instead of an image card.
* **Button style:** The look of the buttons (options: Primary, Secondary, Link). Shown only when the setting above is on.

#### Animation

* **Animate images on hover:** Lift the image slightly when a shopper points at a card on desktop. It works only when animations are turned on in [Theme settings → Animations](/theme-settings/animations). Shown only when images are used.

#### Colors

* **Background color:** Set the background color of the section.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.
* **Text color:** Set the text color for the whole section.

#### Section spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Header block

Click the **Header** block to style the heading area above the collections.

* **Text alignment (desktop)** and **Text alignment (mobile):** Align the heading (options: Left, Center, Right).
* **Text container max width:** Limit the width of the heading area (0 to 1600 px). Set it to 0 to use the default maximum width.
* **Text color:** Override the section text color for the heading area.

You can add any theme block to the Header, for example a [Subheading](/blocks/subheading) or a [Text](/blocks/text) block.

## Collection list container block

Click the **Collection list container** block to set up the layout.

* **Image ratio:** The shape of every image (options: Adapt to image, Portrait, Square, Landscape, Custom).
* **Custom ratio width** and **Custom ratio height:** Set your own shape, for example 3 by 2 (1 to 16 each). Shown only when **Image ratio** is set to **Custom**.

#### Desktop version

* **Layout:** Show the collections in a grid or a slider (options: Grid, Slider).
* **Items per row:** How many collections fit in one row (3 to 12).
* **Items alignment:** Align the items to the left or center when a row is not full. Shown only for the Grid layout.
* **Gap:** Space between the items (0 to 32 px).

#### Mobile version

* **Layout:** Grid or Slider on mobile.
* **Items per row:** How many collections fit across the screen (1.1 to 3.5). A value like 2.1 shows a part of the next item, which hints that the slider can be swiped.
* **Items alignment:** Left or Center. Shown only for the Grid layout.
* **Gap:** Space between the items (0 to 16 px).

#### Slider behavior

These settings appear when one of the layouts is set to **Slider**.

* **Move by:** Move the slider by one item or by a full view at a time (options: One slide, Full view). Shown only when loop is off.
* **Enable loop:** Let the slider start again from the first item after the last one.

#### Pagination

* **Custom dots:** Enable this setting to style the slider dots for this section only. When it is off, the dots use [Theme settings → Sliders](/theme-settings/sliders).
* **Dot background color**, **Dot background blur** (0 to 20 px), **Active dot color** and **Inactive dot color:** The custom dot styles. Shown only when **Custom dots** is on.

## Collection item block

Each **Collection item** block shows one collection. Click **Add block** under the **Collection list container** to add more, and drag them to change the order.

* **Collection:** The collection to link to.
* **Image:** Use your own image instead of the collection's image. When it is empty, the collection image is used, and if the collection has no image, the image of its first product.
* **Custom title:** Use your own title instead of the collection's title.

## Mobile view example

{/* TODO: mobile screenshot */}
