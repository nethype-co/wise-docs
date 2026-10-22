---
title: "Group"
sidebar_label: "Group"
description: "Hold other blocks together and lay them out in a row or a column, for example to build two columns."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Group block?

<SectionMeta version="v1.0.0" availability="Theme block" />

The **Group** block is a container for other blocks. It shows nothing on its own: it arranges the blocks inside it in a **row** (side by side) or a **column** (stacked), with separate settings for desktop and mobile. Use it to put a heading next to a paragraph, to place two buttons or icons side by side, or to build a layout with two or more columns.

{/* TODO: screenshot of a two-column layout built with groups */}

## Where can I use it?

Group is a theme block, so you can add it to any section or block that shows **Add block** in the theme editor, for example:

* [Rich text](/sections/text/rich-text): the **Rich text: two columns** preset is built from groups
* [Countdown timer](/sections/text/countdown-timer)
* [Image with text](/sections/storytelling/image-with-text), inside the **Image with text container**
* [Image banner](/sections/banners/image-banner) and [Slideshow](/sections/banners/slideshow) content, and the **Header** block of most sections

A Group can also hold other Group blocks. This is how you build columns.

See [How sections and blocks work](/getting-started/sections-and-blocks) for how to add a block.

## Presets

When you add a Group, you can choose between two starting points:

* **Group:** An empty group. Click **Add block** under it to fill it.
* **Two columns:** A group set to **Row** on desktop and **Column** on mobile, with two column groups inside it, the first holding a [Heading](/blocks/heading) and the second a [Text](/blocks/text) block. Add more blocks to either column, or add a third group for a third column.

## How rows and columns work

* In a **row**, the blocks sit side by side and share the width equally. Content alignment moves them along the row, and vertical alignment lines them up at the top, center or bottom.
* In a **column**, the blocks are stacked. Content alignment moves them to the left, center or right.
* A Group inside a column always stretches to the full width, so a stacked group lines up with the rest of the content.

For two columns, use a Group set to **Row**, and put two Groups inside it, each set to **Column**. Each inner group is one column, and you can give it its own width with **Width in a row**. On mobile, set the outer group's direction to **Column** so the two columns stack.

## Settings

#### Desktop version

These settings apply from a screen width of 900 px.

* **Direction:** Lay out the blocks inside side by side or stacked (options: Row, Column).
* **Gap:** Space between the blocks inside the group (0 to 120 px).
* **Content alignment:** Align the blocks and their text left, center or right (options: Left, Center, Right).
* **Vertical alignment:** Line the blocks in a row up at the top, center or bottom (options: Top, Center, Bottom). Shown only when the desktop or mobile direction is set to **Row**. It is used for rows on both desktop and mobile.
* **Width in a row:** The width this group takes when it sits inside another group set to **Row** (0 to 100%). Set it to 0 to share the row equally with the other blocks. This setting works on desktop only. On mobile, groups in a row always share the width equally.

#### Mobile version

These settings apply below a screen width of 900 px.

* **Direction:** Lay out the blocks side by side or stacked on mobile (options: Row, Column).
* **Gap:** Space between the blocks inside the group on mobile (0 to 80 px).
* **Content alignment:** Align the blocks and their text left, center or right on mobile (options: Left, Center, Right).

:::tip
If a column in your layout looks too narrow, check the **Width in a row** setting of the groups inside the row. When some groups have a width and others are set to 0, the groups with 0 share the space that is left.
:::
