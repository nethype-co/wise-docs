---
title: "Scrolling text banner"
sidebar_label: "Scrolling text banner"
description: "Show a line of text and icons that scrolls continuously across the screen, with an optional background image."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Scrolling text banner section?

<SectionMeta version="v1.0.0" />

The **Scrolling text banner** section shows a line of text that moves continuously across the screen, like a ticker. You can use large text on top of a background image as an eye-catching banner, or a slim strip of icons and short messages, for example "Free shipping" or "Easy returns".

![Scrolling text banner on desktop](/img/docs/sections/scrolling-text-banner-desktop.jpg)

The section is available in two presets, both found under **Banners** in the **Add section** menu:

* **Scrolling text banner:** One large scrolling text without an icon, on a fixed-height banner with room for a background image.
* **Scrolling icon with text:** Two items with an icon and a short text, on a slim strip without an image.

Both presets use the same blocks, so you can turn one into the other by changing the settings.

## Section structure

When you expand the section in the theme editor sidebar, you will see two fixed blocks:

* **Header:** An optional heading area above the banner. It contains a [Heading](/blocks/heading) block by default. Remove the heading if you do not need a section title.
* **Scrolling text container:** The scrolling strip, its speed, height and background image. Each text is a **Scrolling icon with text** block inside it.

See [How sections and blocks work](/getting-started/sections-and-blocks) for more about fixed blocks and theme blocks.

## Section settings

* **Make section full width:** Enable this setting to make the section span the full width of the screen.

#### Colors

* **Background color:** Set the background color of the section.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.
* **Text color:** Set the text color for the whole section.

#### Section spacing

* **Distance top (desktop):** Space above the section on desktop (0 to 100 px).
* **Distance bottom (desktop):** Space below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Header block

Click the **Header** block to style the heading area above the banner.

* **Text alignment (desktop)** and **Text alignment (mobile):** Align the heading (options: Left, Center, Right).
* **Text container max width:** Limit the width of the heading area (0 to 1600 px). Set it to 0 to use the default maximum width.
* **Text color:** Override the section text color for the heading area.

You can add any theme block to the Header, for example a [Subheading](/blocks/subheading) above the heading or a [Text](/blocks/text) block below it.

## Scrolling text container block

Click the **Scrolling text container** block to set up the strip.

* **Animation speed:** How fast the text scrolls (1 to 10). 1 is the slowest, 10 is the fastest.
* **Gap (between items):** The space between the scrolling items (20 to 120 px).
* **Enable dot separator:** Show a small dot between the items.
* **Dot size:** The size of the dot (options: Small, Medium, Large). Shown only when the dot separator is on.

:::note
The text pauses when a visitor hovers over it, or taps it on a phone.
:::

#### Section height

* **Height:** Choose how tall the banner is (options: Adapt to image, Fixed height, Fixed height and no image). **Adapt to image** follows the proportions of your image. **Fixed height and no image** hides the image settings, which is ideal for a slim strip.
* **Height (desktop)** and **Height (mobile):** Set the height (40 to 1000 px). Shown when a fixed height is selected.

#### Desktop version

* **Image:** A background image behind the scrolling text. Not shown with **Fixed height and no image**.
* **Text vertical position:** Place the scrolling text at the top, center or bottom of the banner.

#### Mobile version

* **Image:** A different background image for phones. Leave it empty to use the desktop image.
* **Text vertical position:** Place the scrolling text at the top, center or bottom on phones.

#### Colors

* **Content background color:** A color layer on top of the background image. A semi-transparent color helps make the text easier to read.

## Scrolling icon with text block

Click **Add block** under the **Scrolling text container** to add another item to the strip, then click it to edit it.

#### Icon

* **Image:** Upload your own icon image. It is used instead of the icon below.
* **Icon:** Or pick an icon from the theme's icon set. Choose **None** to show text only.
* **Align icon top:** Line up the icon with the top of the text instead of its middle. Useful when the text runs over several lines.
* **Icon advanced settings:** Enable this setting to set the icon height (10 to 100 px) and its top margin (0 to 16 px), separately for desktop and mobile.

#### Text

* **Text:** The text of the item.
* **Text scale (desktop)** and **Text scale (mobile):** Make the text smaller or larger (40 to 220%).

#### Spacing

* **Gap:** The space between the icon and the text (0 to 16 px).
