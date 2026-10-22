---
title: "Colors"
sidebar_label: "Colors"
sidebar_position: 3
description: "Set your color palette and the default colors for text, buttons, prices, forms, the header and the footer."
---

import SectionMeta from '@site/src/components/SectionMeta';

## Colors

<SectionMeta version="v1.0.0" />

The **Colors** settings define the default colors of your whole store: text, links, buttons, prices, form fields, the header and the footer. Sections and blocks use these colors unless you give them their own. You'll find them under **Theme settings** > **Colors** in the theme editor. To open theme settings, click the gear (settings) icon in the left sidebar of the theme editor.

{/* TODO: screenshot of the Colors settings */}

## How the color palette works

At the top of the **Colors** settings you'll find the **Palette**: a small set of brand colors you define once and reuse everywhere in the theme. The default palette contains colors such as primary, background, secondary, accent, sale, border, rating and sold out.

Every color picker in the theme editor, in theme settings and in sections and blocks, shows your palette colors at the top. When you pick a palette color, the setting is **linked** to the palette instead of storing a fixed color code. If you later change that palette color, every setting linked to it updates at once.

To set up your colors:

1. Open **Theme settings** > **Colors** and edit the palette colors to match your brand.
2. Go through the settings below and, where possible, pick palette colors rather than typing new codes.
3. When you rebrand or adjust a shade later, change it in the palette only.

:::tip
Several settings in the theme's default content are already linked to the palette, for example some header menu colors, footer lines and form backgrounds. Editing the palette is the quickest way to recolor the whole store.
:::

Sections and blocks with their own **Colors** settings (background, text color and similar) override the colors on this page for that section or block only. Leave those fields empty to use the theme colors.

## Settings

#### General

* **Background:** The page background color.
* **Heading text:** The color of headings.
* **Body text:** The color of regular text.
* **Body text, light:** A softer text color used for secondary information, such as hints, notes and less important labels.
* **Links:** The color of text links.
* **Links active / hover:** The link color when a customer hovers over a link or when the link is active.
* **Border:** The color of borders and divider lines.
* **Action text** and **Action background:** The colors of small indicators, for example the item count bubble on the cart icon.

#### Header, Navigation

* **Header text:** The default color of the header text and icons.
* **Header background:** The default header background color.

The [Header](/header-footer/header) section has more color settings of its own.

#### Buttons

These colors apply to every **Primary** and **Secondary** button in the theme, for example in the [Button](/blocks/button) block.

* **Primary button background**, **Primary button text** and **Primary button border:** The colors of primary buttons.
* **Primary button background hover**, **Primary button text hover** and **Primary button border hover:** The colors when a customer hovers over a primary button.
* **Primary button background blur** and **Primary button background blur hover:** Blur the page content behind the button (0 to 20 px), for a frosted glass look. The blur is only visible when the button background color is partly transparent.
* **Secondary button** settings: The same set of colors and blur settings for secondary buttons.

:::tip
To make a transparent or frosted button, open the background color picker and lower the opacity of the color. Then increase the blur.
:::

#### Product

* **Price:** The color of regular prices.
* **Sale price:** The color of the price of products on sale.
* **Brand:** The color of the brand (vendor) name.
* **Star rating:** The color of review stars.
* **Sold out text** and **Sold out background:** The colors of the **Sold out** badge on product images. See [Product badges](/theme-settings/product-badges).

#### Forms

* **Input text**, **Input background**, **Input border** and **Input placeholder:** The colors of form fields, such as the newsletter, contact and search fields. The placeholder is the hint text shown in an empty field.
* **Success message text**, **Success message background** and **Success message border:** The colors of confirmation messages, for example after a newsletter sign up.
* **Error message text**, **Error message background** and **Error message border:** The colors of error messages, for example when a required field is empty.

#### Footer

* **Background:** The default footer background color.
* **Text:** The default footer text color.

The [Footer](/header-footer/footer) section has more color settings of its own.

#### Overlay

The overlay is the layer that dims the page behind an open drawer or popup, for example the cart drawer, the menu drawer or the quick view.

* **Color:** The color of the overlay. Lower the opacity in the color picker for a lighter dim. A fully transparent color means no dimming.
* **Background blur:** Blur the page behind the overlay (0 to 20 px). Set it to 0 for no blur.
