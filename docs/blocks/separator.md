---
title: "Separator"
sidebar_label: "Separator"
description: "Add a divider line or extra space between blocks."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Separator block?

<SectionMeta version="v1.0.0" availability="Theme block" />

The **Separator** block adds a thin horizontal line, extra space, or both, between other blocks. Use it to split content into clear parts, for example between a product's price and its description, or to add breathing room where a section feels crowded.

{/* TODO: screenshot of a separator line between two blocks */}

## Where can I use it?

Separator is a theme block, so you can add it to any section or block that shows **Add block** in the theme editor, for example:

* The [product page](/product-page/product-information), between product information blocks
* [Rich text](/sections/text/rich-text): the **Separator** preset adds a Rich text section with only a separator, which you can use as a divider between two sections
* [Image with text](/sections/storytelling/image-with-text), inside the **Image with text container**
* [Image banner](/sections/banners/image-banner) content, product cards and the [footer](/header-footer/footer)

See [How sections and blocks work](/getting-started/sections-and-blocks) for how to add a block.

## Settings

* **Visible on:** Show the block on desktop and mobile, on desktop only or on mobile only (options: Desktop and mobile, Desktop only, Mobile only). This hides the whole block, spacing included. Desktop starts at a screen width of 1200 px.

#### Line

* **Show line:** Show the divider line. Turn it off to use the block as empty space only.
* **Show line on:** Show the line on desktop and mobile, on desktop only or on mobile only. The space stays on both. Shown only when the line is on and **Visible on** is set to **Desktop and mobile**.
* **Line color:** The color of the line. Shown only when the line is on.
* **Full-width line:** Let the line reach past the side padding of the section, to the edges of its container. Shown only when the line is on. This works in sections that support it, such as [Rich text](/sections/text/rich-text) with **Make section full width** on, where the line then runs from one edge of the screen to the other.

#### Spacing

* **Distance top (desktop):** Space above the line (0 to 100 px).
* **Distance bottom (desktop):** Space below the line (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.
