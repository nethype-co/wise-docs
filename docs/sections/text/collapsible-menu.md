---
title: "Collapsible menu"
sidebar_label: "Collapsible menu"
description: "Show questions, answers and other details in rows that open and close, for example an FAQ."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Collapsible menu section?

<SectionMeta version="v1.0.0" />

The **Collapsible menu** section shows a list of rows that open to reveal more content when clicked. Use it for an FAQ, shipping and returns information or care instructions, so customers can find the answer they need without scrolling through a long page.

{/* TODO: desktop screenshot or video */}

The section is found under **Text** in the **Add section** menu. It starts with a heading and one collapsible row with a text block inside.

## Section structure

When you expand the section in the theme editor sidebar, you will see:

* **Header:** A fixed heading area above the rows. It contains a [Heading](/blocks/heading) block by default. Remove the heading if you do not need a section title.
* **Collapsible row** blocks: One block per row. Add, duplicate, reorder or remove rows as you need.

See [How sections and blocks work](/getting-started/sections-and-blocks) for more about fixed blocks and theme blocks.

## Section settings

* **Enable compact size for big screens:** Keep the rows in a narrower column (about 944 px wide) on large screens, which is easier to read. Turn it off to let the rows use the full content width.
* **Open one row at a time:** Opening a row closes the others.

#### Colors

* **Background color:** Set the background color of the section.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.
* **Text color:** Set the text color for the whole section. It also colors the dividers between rows.

#### Section spacing

* **Distance top (desktop):** Space above the section on desktop (0 to 100 px).
* **Distance bottom (desktop):** Space below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Header block

Click the **Header** block to style the heading area above the rows.

* **Text alignment (desktop)** and **Text alignment (mobile):** Align the heading (options: Left, Center, Right).
* **Text container max width:** Limit the width of the heading area (0 to 1600 px). Set it to 0 to use the default maximum width.
* **Text color:** Override the section text color for the heading area.

You can add any theme block to the Header, for example a [Subheading](/blocks/subheading) above the heading or a [Text](/blocks/text) block below it.

## Collapsible row block

Each **Collapsible row** shows a title that opens to reveal its content. The content inside a row is made of blocks: a [Text](/blocks/text) block by default. You can add any theme block, plus the content blocks listed below. When you add a row, you can also pick the **Collapsible row: file** preset (starts with a File block) or **Collapsible row: table** (starts with a Table block with two rows).

* **Open by default:** Show the row open when the page loads.

#### Title

* **Title font:** Use the body, heading or subheading font for the title (options: Body, Heading, Subheading).
* **Title:** The text shown on the row.
* **Text scale (desktop)** and **Text scale (mobile):** Make the title smaller or larger (50 to 300%).

#### Icon

* **Image:** Upload your own icon image to show before the title.
* **Icon:** Or pick an icon from the theme's icon set.
* **Icon advanced settings:** Enable this setting to adjust **Icon height** (10 to 100 px) and **Icon top margin** (0 to 16 px), separately for desktop and mobile.

#### Colors

* **Text color**, **Background color** and **Line color:** Colors of the row. Leave them empty to use the section colors.

#### Visibility

* **Hide if content is empty:** Hide the whole row when there is nothing inside it, for example when a block reads a metafield that is empty.

#### Block spacing

* **Distance top** and **Distance bottom:** Space above and below the row (0 to 60 px), with optional separate values for mobile when **Show custom mobile spacing** is on.

### Blocks inside a collapsible row

Besides the theme blocks, you can add these blocks inside a row:

* **Page content:** Shows the content of a Shopify page. Pick the page in the **Page** setting. Handy for reusing a shipping or returns policy you already keep as a page.
* **Media:** An image or a video. Choose the **Media type**, then the **Image** or **Video**. For a video you can turn on the **Custom play/pause button** and **Custom mute/unmute button**. **Height** follows the media (Adapt to media) or uses a **Fixed height** (200 to 1000 px, desktop and mobile).
* **Table:** A two-column table, for example specifications. With **Rows from** set to **Row blocks**, you add a **Row** block per line, each with a **Label** and a **Value**. With **Rows from** set to **Metafield**, the rows come from a product metafield instead (see the note below). You can set the text alignment, the mobile **Row layout** (Column or Row), the odd row background, text and label colors, and a **Row divider** with its color and thickness (1 to 4 px).
* **Feature icons list:** A grid of items, each with an icon, a title and a description. Add **Item** blocks, or fill it from a product metafield. You can set the columns (1 to 4 on desktop, 1 to 3 on mobile), the alignment, icon position (Top or Left), icon size (16 to 64 px) and the gaps.
* **Feature tags:** Small tags such as "Vegan" or "Gluten free", with an optional **Label** before them (for example "Free from") and an icon. Add **Tag** blocks, or fill it from a product metafield. You can set the **Maximum tags**, font size, text style and colors.
* **File:** A download link to a file stored in a product metafield. Enter the **Metafield** and an optional **Label**.

:::note
The **Table**, **Feature icons list**, **Feature tags** and **File** blocks can read a product metafield. Enter the namespace and key, for example `custom.specification`. A product metafield only has a value on a product page, so on a regular page use the row blocks, item blocks or tag blocks instead.
:::

## Mobile view example

{/* TODO: mobile screenshot */}
