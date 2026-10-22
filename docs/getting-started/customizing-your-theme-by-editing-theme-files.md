---
title: "Customizing your theme by editing theme files"
sidebar_label: "Editing theme files"
description: "Edit the Wise theme code safely, learn where styles live and when to use Custom Liquid or custom CSS instead."
sidebar_position: 7
---

## Customizing your theme by editing theme files

Wise has a wide range of settings in the theme editor, but sometimes you need a change that no setting covers. If you are comfortable with HTML, CSS and Liquid, you can edit the theme code directly. This guide shows you how to do that safely, and when a simpler option is the better choice.

:::note
Code changes are your responsibility. Our support team can help with the theme's own settings and features, but not with problems caused by custom code.
:::

## Try the safer options first

Before you edit theme files, check whether one of these does the job. They live in the theme editor, so they are kept when you update the theme.

* **Custom Liquid section:** Add your own HTML, Liquid or an embed code as a separate section on any page. Find it under **Other** in the **Add section** menu. See [Custom Liquid section](/sections/other/custom-liquid).
* **Custom Liquid block:** Add code inside a section, exactly where you place the block, for example under a product's price. See [Custom Liquid block](/blocks/custom-liquid).
* **Custom CSS:** Add your own CSS without touching the code. Open a section and scroll to **Custom CSS** at the bottom of its settings to style only that section, or use **Custom CSS** in **Theme settings** to style the whole store.

## Step 1: Duplicate your theme

Always work on a copy, so you can go back if something breaks.

1. In your Shopify admin, go to **Online Store > Themes**.
2. Click the **...** button next to Wise and choose **Duplicate**.
3. Make your code changes in the copy. Preview it, and publish it only when everything works.

:::tip
You can also click **...** > **Download theme file** to keep a `.zip` backup of your theme.
:::

## Step 2: Open the code editor

1. Go to **Online Store > Themes**.
2. Click the **...** button next to the theme copy and choose **Edit code**.
3. Pick a file from the list on the left to open it. You can open several files in tabs.

Shopify keeps older versions of each file. If you need to undo a change, open the file and use the version menu above the editor to go back to an earlier version.

## How the Wise files are organized

* **layout:** The frame around every page, such as the `<head>` and the order of the header group, the page content and the footer group.
* **templates:** One file per page type, listing the sections and settings of that page.
* **sections:** One file per section, with its markup, its settings and its styles.
* **blocks:** One file per block. Wise is built from blocks, so this is where most of the markup lives.
* **snippets:** Small reusable pieces of code used by sections and blocks.
* **assets:** JavaScript files for each feature, such as the header, cart drawer or sliders, plus a small `base.css` with the global base styles.
* **config:** The theme settings and the preset values.
* **locales:** The texts of the theme in each language.

### Where the styles live

Wise does not keep its CSS in one large stylesheet. Each section, block and snippet carries its own styles in a stylesheet part at the end of its `.liquid` file, and Shopify combines them for you. To change how something looks:

1. Find the file of the section or block, for example `sections/header.liquid` or `blocks/button.liquid`.
2. Scroll to the stylesheet part near the end of the file and change the styles there.

Only styles that apply everywhere, such as the base page styles, are in `assets/base.css`.

## Updates and your code changes

When you install a new version of Wise, it is added as a new theme. Your theme editor settings and content can be carried over, but **changes you made to the theme files are not**. You have to apply them again in the new version.

To make updating easier:

* Prefer the Custom Liquid section and block and custom CSS, which are kept with your theme settings.
* Keep a list of every file and line you change.
* Add a short comment next to your changes in the code, so you can find them again.

## Related articles

* [Custom Liquid section](/sections/other/custom-liquid)
* [Custom Liquid block](/blocks/custom-liquid)
* [How sections and blocks work in Wise](/getting-started/sections-and-blocks)
* [Shopify Help Center: Editing theme code](https://help.shopify.com/en/manual/online-store/themes/theme-structure/extend/edit-theme-code)
