---
title: "Typography"
sidebar_label: "Typography"
sidebar_position: 5
description: "Choose fonts, sizes and letter spacing for text, headings, navigation, buttons and prices, and add your own custom fonts."
---

import SectionMeta from '@site/src/components/SectionMeta';

## Typography

<SectionMeta version="v1.0.0" />

The **Typography** settings control the fonts of your store. Wise uses separate fonts for body text, headings, subheadings, navigation, buttons and prices, so you can mix fonts and fine-tune each one. You can also load your own font files. You'll find these settings under **Theme settings** > **Typography** in the theme editor. To open theme settings, click the gear (settings) icon in the left sidebar of the theme editor.

{/* TODO: screenshot of the Typography settings */}

Each font group has a **Font** picker with the fonts from the Shopify font library. Click **Change** to browse the fonts and pick a style, for example Regular or Bold.

:::tip
Every extra font your store loads makes pages a little slower. System fonts (the ones at the top of the font picker) load instantly. Using the same font in several groups does not add extra load.
:::

## Settings

#### Body

Body text is the regular text of your store, such as paragraphs and product descriptions.

* **Font:** The body font.
* **Font transform:** Show the text as typed or in capital letters (options: none, Uppercase).
* **Body font size (desktop)** and **(mobile):** The size of body text (12 to 22 px on desktop, 12 to 18 px on mobile).
* **Line height (desktop)** and **(mobile):** The space between lines of text (1 to 2). 1 is tight, 1.5 is comfortable for reading.
* **Body letter spacing (desktop)** and **(mobile):** The space between letters (minus 3 to 5 px).
* **Breadcrumbs font size (desktop)** and **(mobile):** The size of the breadcrumb links, for example *Home / Collection / Product* (12 to 22 px on desktop, 12 to 18 px on mobile).

#### Headings

* **Font:** The heading font.
* **Font transform:** Show headings as typed or in capital letters (options: none, Uppercase).
* **Heading font size (desktop)** and **(mobile):** The base size of headings (16 to 60 px on desktop, 12 to 40 px on mobile). Heading blocks can scale this size up or down.
* **Line height (desktop)** and **(mobile):** The space between lines of a heading (1 to 2).
* **Headings letter spacing (desktop)** and **(mobile):** The space between letters (minus 3 to 5 px).
* **Set custom font for italic text:** Enable this setting to use a different font for italic words inside headings. This is a popular look where one or two words of a heading appear in an elegant serif or script font. When it is on, these settings appear:
  * **Font:** The font for italic text.
  * **Italic font scale (desktop)** and **(mobile):** Make the italic words smaller or larger than the rest of the heading (50 to 200%), to balance fonts that look bigger or smaller at the same size.

:::tip
To make a word italic, select it in the heading text field and click the italic button in the text editor.
:::

#### Subheadings

Subheadings are the short labels often shown above a heading.

* **Font:** The subheading font.
* **Font transform:** Show subheadings as typed or in capital letters (options: none, Uppercase). Uppercase is selected by default.
* **Line height (desktop)** and **(mobile):** The space between lines (1 to 2).
* **Subheading letter spacing (desktop)** and **(mobile):** The space between letters (minus 3 to 5 px).

#### Navigation

* **Font:** The font of the main menu in the header and the menu drawer.
* **Font transform:** Show menu links as typed or in capital letters (options: none, Uppercase).
* **Navigation font size (desktop)** and **(mobile):** The size of menu links (12 to 22 px on desktop, 12 to 18 px on mobile).
* **Navigation letter spacing (desktop)** and **(mobile):** The space between letters (minus 3 to 5 px).

#### Buttons

* **Font:** The button font.
* **Font transform:** Show button text as typed or in capital letters (options: none, Uppercase).
* **Button font size (desktop)** and **(mobile):** The size of button text (12 to 22 px on desktop, 12 to 18 px on mobile).
* **Button letter spacing (desktop)** and **(mobile):** The space between letters (minus 3 to 5 px).

#### Price

* **Font:** The font of prices.
* **Font transform:** Show prices as typed or in capital letters (options: none, Uppercase).
* **Price font size (desktop)** and **(mobile):** The size of prices (12 to 22 px on desktop, 12 to 18 px on mobile).
* **Price letter spacing (desktop)** and **(mobile):** The space between letters (minus 3 to 5 px).

#### Product card font sizes

These sizes apply to the product cards in collections, product carousels and search results.

* **Vendor font size (desktop)** and **(mobile):** The size of the brand name (12 to 22 px on desktop, 12 to 18 px on mobile).
* **Title font size (desktop)** and **(mobile):** The size of the product title (16 to 60 px on desktop, 12 to 40 px on mobile).
* **Price font size (desktop)** and **(mobile):** The size of the price (12 to 22 px on desktop, 12 to 18 px on mobile).

#### Custom fonts

Use these settings to load a font that is not in the Shopify font library, for example your brand font.

* **Fontfaces:** The code that loads your font files (see the steps below).
* **Base font name** and **Base font weight:** Use your custom font for body text.
* **Heading font name** and **Heading font weight:** Use your custom font for headings.
* **Subheading font name** and **Subheading font weight:** Use your custom font for subheadings.
* **Navigation font name** and **Navigation font weight:** Use your custom font for the menu.
* **Button font name** and **Button font weight:** Use your custom font for buttons.
* **Price font name** and **Price font weight:** Use your custom font for prices.

When a font name is filled in, it replaces the font chosen in the matching **Font** picker. The picker font is still used as a backup while your font loads or if it cannot be loaded, so pick a similar font there. Leave a name field empty to keep using the picker font for that group.

## How to add a custom font

Before you start, make sure your font license allows you to use the font on a website. You need the font files in **WOFF2** format (WOFF also works).

1. In your Shopify admin, go to **Content** > **Files** and upload your font files, for example *MyBrand-Regular.woff2* and *MyBrand-Bold.woff2*.
2. Click the link icon next to each file to copy its URL.
3. In the theme editor, open **Theme settings** > **Typography** and scroll down to **Custom fonts**.
4. In **Fontfaces**, add one block of code per font file. Replace the name and the URL with your own:

   ```css
   @font-face {
     font-family: "MyBrand";
     src: url("PASTE-THE-FILE-URL-HERE") format("woff2");
     font-weight: 400;
     font-style: normal;
     font-display: swap;
   }
   ```

   For a bold file, add a second block with the same **font-family** name, the bold file URL and **font-weight: 700**.
5. In the name field of each group where you want the font, enter the same family name you used in the code, for example **MyBrand** in **Heading font name**.
6. Optionally enter a weight in the matching weight field, for example **400** for regular or **700** for bold. The weight must match one of the files you loaded.
7. Click **Save** and check your store. If the font does not appear, check that the name is spelled exactly the same in both places and that the URL is correct.
