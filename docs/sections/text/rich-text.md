---
title: "Rich text"
sidebar_label: "Rich text"
description: "Add headings, text, buttons, an email signup form or a countdown timer in one or two columns."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Rich text section?

<SectionMeta version="v1.0.0" />

The **Rich text** section is a simple, flexible block of content with no image. Use it for a short message, an introduction to a page, a call to action, a newsletter signup or a spacer between other sections. Everything inside is built from blocks, and on desktop you can split the blocks into two columns.

{/* TODO: desktop screenshot or video */}

The section is available in five presets:

* **Rich text** (under **Text**): Subheading, heading and text.
* **Rich text: two columns** (under **Text**): A two-column [Group](/blocks/group), with a subheading and heading on the left and text and a button on the right.
* **Email signup** (under **Forms**): Heading, text and an email form.
* **Button** (under **Other**): A single [Button](/blocks/button) block, handy for placing a button between two sections.
* **Separator** (under **Other**): A single [Separator](/blocks/separator) block, to add a line or extra space between two sections.

All presets are the same section, so you can turn one into another by adding or removing blocks.

## Section structure

The Rich text section has no fixed blocks. Every block in it can be added, moved and removed. See [How sections and blocks work](/getting-started/sections-and-blocks) for more about blocks.

## Section settings

* **Make section full width:** Enable this setting to make the section span the full width of the screen. A [Separator](/blocks/separator) block with **Full-width line** turned on then runs from one edge of the screen to the other.
* **Text container max width:** Limit the width of the content (0 to 1600 px). Set it to 0 to use the default maximum width.
* **Text alignment (desktop)** and **Text alignment (mobile):** Align the content left, center or right.
* **Desktop layout:** Show the blocks in one column or in two columns on desktop (options: One column, Two columns). On mobile, the blocks are always stacked in one column.
* **Blocks in the left column:** How many of the first blocks go in the left column (1 to 4). The remaining blocks go in the right column. Shown only when **Desktop layout** is set to **Two columns**.
* **Left column width:** How much of the width the left column takes up (30 to 70%). Shown only when **Desktop layout** is set to **Two columns**.

:::tip
The **Two columns** layout follows the order of the blocks in the sidebar. To move a block from one column to the other, drag it up or down, or change **Blocks in the left column**. For more control, use the **Rich text: two columns** preset, which builds the columns with [Group](/blocks/group) blocks instead.
:::

#### Colors

* **Background color:** Set the background color of the section.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.
* **Text color:** Set the text color for the whole section.

#### Section spacing

* **Distance top (desktop):** Space above the section on desktop (0 to 100 px).
* **Distance bottom (desktop):** Space below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Content blocks

Click **Add block** under the section to add content. You can use any theme block, such as [Subheading](/blocks/subheading), [Heading](/blocks/heading), [Text](/blocks/text), [Button](/blocks/button), [Icon with text](/blocks/icon-with-text), [Separator](/blocks/separator), [Group](/blocks/group) or [Custom Liquid](/blocks/custom-liquid), and the two blocks below.

### Email form block

The **Email form** block shows an email field and a subscribe button. Customers who sign up are added to your Shopify customer list with the tag **newsletter**, so you can reach them with Shopify Email or your email app.

* **Button style:** Use the primary or secondary button style (options: Primary, Secondary).
* **Button label:** The text on the button. Leave it empty to show **Subscribe**.

**Consent checkbox.**

* **Show consent checkbox:** Add a checkbox the customer must tick before they can subscribe.
* **Consent checkbox label:** The text next to the checkbox, for example a short note about what they will receive. Shown only when the checkbox is on.
* **Consent validation message:** The message shown when a customer tries to subscribe without ticking the box. Shown only when the checkbox is on.

After a customer subscribes, a thank-you message appears below the form.

### Countdown timer block

The **Countdown timer** block counts down to a date and time. Use it for sales, launches and limited offers.

* **End date and time:** The date and time the countdown ends, in the format `YYYY-MM-DD HH:MM`.
* **Expired message:** The text shown once the countdown has ended.
* **Show labels below the timer:** Place the days, hours, minutes and seconds labels below the numbers.
* **Style:** Show the timer in the heading font (Headline) or in the body text style (Text).
* **Show d/h/m/s labels:** Show or hide the labels.
* **Timer scale (desktop)** and **Timer scale (mobile):** Make the timer smaller or larger (50 to 500% on desktop, 50 to 300% on mobile).
* **Set custom item width:** Set the width of each counter item yourself with **Counter item width (desktop)** (30 to 80 px) and **Counter item width (mobile)** (20 to 80 px). Available only when labels are shown below the timer.

:::note
In the theme editor, a countdown with an empty or past date shows a sample countdown so you can style it. On your live store, the **Expired message** is shown instead.
:::

## Mobile view example

{/* TODO: mobile screenshot */}
