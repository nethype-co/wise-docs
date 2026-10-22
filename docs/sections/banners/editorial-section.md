---
title: "Editorial"
sidebar_label: "Editorial"
description: "Combine a banner at the top with columns, grids, products or text stacked below it in one section."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Editorial section?

<SectionMeta version="v1.0.0" />

The **Editorial** section starts with a large image or video banner and continues with a stack of content below it, such as columns, image grids, a collage, product cards or a features list. A gradient can fade the bottom of the banner into the content area, so the whole section reads like one magazine page. Use it for lookbooks, campaign pages and brand stories.

{/* TODO: desktop screenshot or video */}

You will find the section under **Banners** in the **Add section** menu. It starts with a banner holding a subheading, heading and button, a gradient, and a row of four columns below.

:::tip
The [Editorial banner](/sections/banners/editorial-banner) section uses the same content blocks, but places all of them on top of one background image instead of below a banner.
:::

## Section structure

When you expand the section in the theme editor sidebar, you will see two fixed blocks at the top, followed by the content blocks:

* **Banner content:** The image or video banner at the top and the content placed on it.
* **Gradient:** A color overlay painted on the banner, for example a fade from the image into the content background.
* Content blocks, such as the **Multicolumn container** of the preset: everything you add at the section level is stacked below the banner. See [Content blocks](#content-blocks).

See [How sections and blocks work](/getting-started/sections-and-blocks) for more about fixed blocks and theme blocks.

## Section settings

* **Make section full width (desktop)** and **Make section full width (mobile):** Make the section span the full width of the screen, separately on desktop and on mobile.

#### Colors

* **Background color:** Fills the whole section, including the space around it.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.
* **Text color:** Set the text color for the whole section.
* **Content background:** Fills only the content area: the banner and the stack below it, without the space around it.
* **Content background gradient:** A gradient for the content area. It overrides the content background.

#### Section spacing

* **Distance top (desktop):** Space above the section on desktop (0 to 100 px).
* **Distance bottom (desktop):** Space below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Banner content block

Click the **Banner content** block to set up the banner at the top of the section.

* **Text container max width:** Limit the width of the content on the banner (0 to 1600 px). Set it to 0 to use the default maximum width.
* **Align content with page width:** Keep the content within the normal page width while the banner spans the full screen. Shown only when **Make section full width (desktop)** is on.

#### Section height

* **Height:** Choose **Adapt to media** to follow the height of your image or video, or **Fixed height** to set the height yourself.
* **Height (desktop)** and **Height (mobile):** Set the fixed height (200 to 1000 px). Shown only when **Fixed height** is selected.

#### Desktop version

* **Media type:** Show an image or a video.
* **Image** or **Video:** Upload the image, or select a video uploaded to Shopify.
* **Text vertical position:** Place the content at the top, center or bottom of the banner.
* **Text alignment:** Align the content left, center or right.

#### Mobile version

* **Show different media on mobile:** Enable this setting to use a different image or video on mobile. When it is off, the desktop media is used on all devices.
* **Media type**, **Image** and **Video:** The mobile media. Shown only when the setting above is on.
* **Text vertical position** and **Text alignment:** Position and align the content on mobile.

#### Mobile content position

* **Show content below media on mobile:** Move the banner content out of the image and show it below on phones.
* **Background color** and **Text color:** The colors of the content area below the media. Shown only when the setting above is on.

#### Video URL

* **Video URL:** A YouTube or Vimeo link. It is used when **Media type** is set to **Video** and no Shopify video is selected.

#### Video behavior

These settings appear when the media type is set to **Video**.

* **Autoplay:** Start the video automatically, muted.
* **Show default video controls:** Show the browser's standard video controls.
* **Custom play/pause button** and **Custom mute/unmute button:** Show the theme's own buttons on top of the video. Available only when the default controls are off. They only work with a video uploaded to Shopify.

#### Optimization

* **Optimize loading if this is the first section on the page:** Load the media right away instead of when it scrolls into view. Use it when the section is at the top of the page.

#### Colors

* **Text color:** Override the text color of the banner content.
* **Content background color:** A color layer over the image or video, behind the content.

You can add any theme block to the Banner content, such as [Subheading](/blocks/subheading), [Heading](/blocks/heading), [Text](/blocks/text) and [Button](/blocks/button), and a **Countdown timer** block that counts down to a date and time you choose.

## Gradient block

The **Gradient** block paints a color overlay on the banner image or video only. It does not affect the content stacked below the banner. Leave all colors empty if you do not want an overlay.

* **Base color:** A flat tint across the whole banner, painted under the two fades. Use the color's opacity to keep the image visible.
* **Top color:** Fades from this color at the top edge to transparent.
* **Top fade size:** How far the top fade reaches into the banner (0 to 100%). Shown only when a top color is set.
* **Bottom color:** Fades from transparent into this color at the bottom edge.
* **Bottom fade size:** How far the bottom fade reaches into the banner (0 to 100%). Shown only when a bottom color is set.

:::tip
For a banner that melts into the content below it, set the **Bottom color** to the same color as **Content background** in the section settings.
:::

## Content blocks

Click **Add block** at the section level to add content below the banner. Blocks are shown one below the other, in the order you see them in the sidebar, and you can drag them to change that order. Besides the [Separator](/blocks/separator) theme block, you can add the blocks below.

Several of these blocks are the same building pieces that make up other Wise sections. Their settings are described in short here; the linked articles explain them in full.

### Rich text block

A group of text content: it starts with a [Heading](/blocks/heading), a [Text](/blocks/text) and a [Button](/blocks/button) block, and you can add any other theme block inside it.

* **Text alignment (desktop)** and **Text alignment (mobile):** Align the content (options: Left, Center, Right).
* **Text color:** Override the section text color for this block.
* **Text container max width:** Limit the width of the text (0 to 1600 px). Set it to 0 to use the default maximum width.

### Multicolumn container block

A row of columns, each with an image or video and its own text blocks. It works like the [Multicolumn](/sections/storytelling/multicolumn) section.

* **Image ratio:** The shape of the column images (options: Adapt to image, Portrait, Square, Landscape, Custom). With **Custom**, set your own **Custom ratio width** and **Custom ratio height** (1 to 16).
* **Desktop version** and **Mobile version:** Choose a **Layout** (options: Grid, Slider), the number of **Items per row** (2 to 5 on desktop, 1 to 2 on mobile), the **Items alignment** in grid layout and the **Gap** between items.
* **Enable loop:** Let the slider start again from the first item after the last one. Shown only when a layout is set to **Slider**.
* **Pagination:** Custom colors for the slider dots. The dots follow your [Sliders](/theme-settings/sliders) theme settings unless **Custom dots** is on.

Each **Multicolumn item** inside the container has its own image or video (with an optional different one on mobile), text alignment, video behavior and colors, and holds theme blocks such as a heading, text and button.

### Grid view container block

A grid of image or video tiles with text on top. It works like the [Grid view](/sections/storytelling/grid-view) section.

* **Image ratio**, **Desktop version**, **Mobile version**, **Enable loop** and **Pagination:** The same as for the Multicolumn container. Up to 6 items per row on desktop.

Each **Grid item** has a **Link** that makes the whole tile clickable, its own image or video for desktop and mobile, the position and alignment of the text (including **Space between**, which spreads the blocks from top to bottom), colors and an optional blurred **Text background** behind the text.

### Grid view with drawer block

A grid of tiles where each tile opens a side drawer with more content. It works like the [Grid view with drawer](/sections/storytelling/grid-view-drawer) section. The container has the same layout settings as the Grid view container.

Each **Tile** has its own media, text position and colors. Inside each tile is a fixed **Drawer** block: set the **Drawer heading**, the **Content alignment** and the style and position of the button that opens the drawer. Fill the drawer with **Media**, **Page content** (the content of a page you pick) and theme blocks.

### Grid view with modal block

The same as the Grid view with drawer block, but each tile opens a pop-up window (modal) in the middle of the screen. It works like the [Grid view with modal](/sections/storytelling/grid-view-modal) section. Two extra settings control the window:

* **Modal width:** The width of the pop-up window (480 to 960 px).
* **Modal animation:** How the window appears (options: Fade and rise, Slide up).

### Collage container block

One large image next to smaller ones, built from Grid items. It works like the [Collage](/sections/storytelling/collage) section.

* **Large image position:** Show the large image on the left or the right.
* **Columns (desktop):** With 2 columns the large image takes half of the width, with 3 it takes two thirds.
* **Height (desktop):** **Fixed height** or **Adapt to large image**, which lets the large image keep its proportions and set the collage height.
* **Fixed height (desktop):** The height relative to the screen width (30 to 70%). Shown only with **Fixed height**.
* **Gap (desktop)** and **Gap (mobile):** The space between the images.

### Products container block

A grid or slider of product cards. It works like the [Featured collection](/sections/collections/featured-collection) section.

* **Collection:** The collection to show products from.
* **Products:** Pick products by hand to show instead of the collection's own order.
* **Products to show:** The maximum number of products (3 to 24).
* **Desktop version** and **Mobile version:** Choose a **Layout** (options: Grid, Slider), the number of **Items per row** and the **Gap**.
* **Enable loop:** Let the slider start again from the first product. Shown only when a layout is set to **Slider**.
* **Show "View all" button** and **"View all" button style:** A button that links to the collection. It only appears when the collection has more products than are shown.
* **Pagination:** Custom colors for the slider dots.

The container holds one fixed **Product card** block that sets the look of every card: text alignment, the **Quick buy** action, spacing and colors. Inside the card you can arrange the **Media**, **Vendor**, **Title**, **Price** and **Rating** blocks, and add **Tags**, **Swatches** and a **Quick buy button**.

### Features list block

A row of features, each with an icon or image, a heading and a short text. It works like the [Features banner](/sections/storytelling/features-banner) section.

* **Icon position:** Show the icon above or beside the text. With **Above the text**, you can also set the **Text alignment** for desktop and mobile.
* **Desktop version** and **Mobile version:** Choose a **Layout** (options: Grid, Slider), the **Items per row** on desktop (2 to 6), the **Icon width**, the **Heading scale** and the **Gap**.
* **Icon color**, **Icon background color** and **Background blur:** Style the icons. Leave the background color empty for no background.
* **Pagination:** Custom colors for the slider dots.

Each **Feature** has an **Image** or an **Icon** from the theme's icon set, a **Heading**, a **Text** and an optional **Link**.

## Mobile view example

{/* TODO: mobile screenshot */}
