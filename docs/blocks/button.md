---
title: "Button"
sidebar_label: "Button"
description: "Add one or two buttons or text links to any section."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Button block?

<SectionMeta version="v1.0.0" availability="Theme block" />

The **Button** block adds a call to action to a section. One block can show **two buttons side by side**, for example *Shop now* and *Learn more*, and each one can be a filled button or a simple text link.

{/* TODO: screenshot of a primary and a secondary button */}

## Where can I use it?

Button is a theme block, so you can add it to any section or block that shows **Add block** in the theme editor, for example:

* [Image with text](/sections/storytelling/image-with-text), inside the **Image with text container**
* Image banner, Slideshow, Rich text and Video section
* Multicolumn and Grid view items
* The product page, to link to a size guide or another page

See [How sections and blocks work](/getting-started/sections-and-blocks) for how to add a block.

## Settings

#### Button 1

* **Style:** Choose how the button looks (options: Primary, Secondary, Link). **Primary** and **Secondary** are filled buttons. **Link** shows plain text styled as a link.
* **Text:** The text on the button.
* **Link:** The page the button opens. You can pick a product, collection or page, or paste any URL.
* **Open link as a new window:** Open the link in a new browser tab.

#### Button 2

The same settings as Button 1, for an optional second button shown next to the first one. The second button stays hidden until you enter its **Text**.

:::tip
To hide a button, clear its **Text** field. When both text fields are empty, the block shows nothing.
:::

## Changing how buttons look

The Button block only chooses the style. The look of each style is set once for the whole store in **Theme settings**, so every button in the theme stays consistent:

* **Colors → Buttons:** Background, text and border colors of primary and secondary buttons, including their hover colors and background blur.
* **Typography → Buttons:** Button font, font weight, font size and letter spacing.
* **Layout → Buttons border radius:** How rounded the button corners are.
* **Animations → Button hover effect:** The animation shown when a customer hovers over a button.

The **Link** style uses the link color of the section or of your color settings.
