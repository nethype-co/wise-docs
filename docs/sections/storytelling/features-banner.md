---
title: "Features banner"
sidebar_label: "Features banner"
description: "Show a row of icons with short headings and text, such as free shipping or easy returns."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Features banner section?

<SectionMeta version="v1.0.0" />

The **Features banner** section shows a row of features, each with an icon, a heading and a short text. Use it for store promises such as free shipping, easy returns or secure payment, or link each feature to a page, for example your account or contact page.

![Features banner on desktop](/img/docs/sections/features-banner-desktop.jpg)

The section is available in two presets, both found under **Storytelling** in the **Add section** menu:

* **Features banner:** A heading and four features with the icon above the text.
* **Features with links:** A heading and two linked features, two per row, with the icon beside the text.

Both presets use the same blocks, so you can turn one into the other by changing the settings of the **Features list**.

## Section structure

When you expand the section in the theme editor sidebar, you will see two fixed blocks:

* **Header:** An optional heading area above the features. It contains a [Heading](/blocks/heading) block by default.
* **Features list:** The layout of the features. You add, remove and reorder the **Feature** blocks here.

See [How sections and blocks work](/getting-started/sections-and-blocks) for more about fixed blocks.

## Section settings

* **Make section full width:** Stretch the background to the edge of the screen. The features themselves keep their normal width.

#### Colors

* **Background color:** Set the background color of the section.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.
* **Text color:** Set the text color for the whole section.

#### Section spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Header block

Click the **Header** block to style the heading area above the features.

* **Text alignment (desktop)** and **Text alignment (mobile):** Align the heading (options: Left, Center, Right).
* **Text container max width:** Limit the width of the heading area. Set it to 0 to use the default maximum width.
* **Text color:** Override the section text color for the heading area.

## Features list block

Click the **Features list** block to set up the layout of the features.

#### Layout

* **Icon position:** Show the icon above the text or beside the text.
* **Text alignment (desktop)** and **Text alignment (mobile):** Align the features (options: Left, Center, Right). Shown only when the icon is above the text.

#### Desktop version

* **Layout:** Show the features in a grid or in a slider. The slider only starts when there are more features than **Items per row**.
* **Items per row:** How many features fit in one row (2 to 6).
* **Icon width:** The width of each icon (28 to 200 px).
* **Heading scale (desktop):** Make the feature headings smaller or larger (50 to 200%).
* **Gap:** The space between features (0 to 100 px).

#### Mobile version

* **Layout:** Show the features in a grid or in a slider. In the grid, phones show one feature per row and tablets show two.
* **Icon width:** The width of each icon on mobile (20 to 120 px).
* **Heading scale (mobile):** Make the feature headings smaller or larger on mobile (50 to 200%).
* **Gap:** The space between features on mobile (0 to 100 px).

#### Colors

* **Icon color:** The color of the icons.
* **Icon background color:** Show a colored background behind each icon. Leave it empty for no background. Setting a color also adds padding and the theme's corner radius around the icon.
* **Background blur:** Blur what is behind the icon background (0 to 20 px). Shown only when an icon background color is set, and visible only when that color is partly transparent.

#### Pagination

These settings appear when one of the layouts is set to **Slider**. By default, the dots use the style set in [Theme settings > Sliders](/theme-settings/sliders).

* **Custom dots:** Enable this setting to style the dots for this section only. When it is on, the settings below appear.
* **Dot background color** and **Dot background blur:** A background behind the dots, and how much it blurs what is behind it (0 to 20 px).
* **Active dot color** and **Inactive dot color:** The color of the current dot and of the other dots.

## Feature block

Each feature is a **Feature** block inside the **Features list**.

* **Image:** Upload your own icon image. It replaces the icon when set.
* **Icon:** Pick an icon from the theme's icon set. Shown only when no image is uploaded.
* **Heading:** The feature title, for example "Free shipping".
* **Text:** A short line below the heading.
* **Link:** Optional. Makes the whole feature clickable.
* **Open link as a new window:** Open the link in a new browser tab. Shown only when a link is set.

## Mobile view example

<div style={{display: "flex", justifyContent: "center", marginBottom: "20px"}}>
  <img src="/img/docs/sections/features-banner-mobile.jpg" alt="Features banner on mobile" style={{maxWidth: "320px", borderRadius: "8px"}} />
</div>
