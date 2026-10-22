---
title: "Countdown timer"
sidebar_label: "Countdown timer"
description: "Count down to a sale, a launch or any other date, with a heading and a button."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Countdown timer section?

<SectionMeta version="v1.0.0" />

The **Countdown timer** section shows a timer that counts down to a date and time you choose. Use it to build urgency for a sale, announce a product launch or show when a limited offer ends.

{/* TODO: desktop screenshot or video */}

The section is found under **Text** in the **Add section** menu. It starts with a heading, a countdown timer and a button.

## Section structure

When you expand the section in the theme editor sidebar, you will see:

* **Header:** A fixed heading area. It contains a [Heading](/blocks/heading) block by default.
* **Countdown timer** block: The timer itself.
* [Button](/blocks/button) block: A call to action next to or below the timer.

You can add more blocks to the section, including more timers. See [How sections and blocks work](/getting-started/sections-and-blocks) for more about fixed blocks and theme blocks.

## Section settings

#### Layout

* **Layout (desktop):** Stack the heading, timer and button on top of each other (Vertical) or place them side by side in one row (Horizontal). On smaller screens, the items wrap onto new lines when they do not fit.
* **Timer spacing left (desktop)** and **Timer spacing right (desktop):** Add space on each side of the timer (0 to 50 px). Shown only when **Layout (desktop)** is set to **Horizontal**.

#### Colors

* **Background color:** Set the background color of the section.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.
* **Text color:** Set the text color for the whole section.
* **Heading color:** Set a separate color for the heading area.
* **Timer number background:** Show a colored box behind each number of the timer. Leave it empty for no box.

#### Section spacing

* **Distance top (desktop):** Space above the section on desktop (0 to 100 px).
* **Distance bottom (desktop):** Space below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Header block

Click the **Header** block to style the heading area.

* **Text alignment (desktop)** and **Text alignment (mobile):** Align the heading (options: Left, Center, Right).
* **Text container max width:** Limit the width of the heading area (0 to 1600 px). Set it to 0 to use the default maximum width. In the horizontal layout, the heading takes up at most 40% of the row.
* **Text color:** Override the text color for the heading area.

You can add any theme block to the Header, for example a [Subheading](/blocks/subheading) or a [Text](/blocks/text) block.

## Countdown timer block

* **End date and time:** The date and time the countdown ends, in the format `YYYY-MM-DD HH:MM`, for example `2026-12-31 23:59`. The time is read in each shopper's own time zone, so a shopper in another country sees the countdown end at their local time.
* **Expired message:** The text shown once the countdown has ended. Leave it empty to show nothing.
* **Show labels below the timer:** Place the days, hours, minutes and seconds labels below the numbers. When it is off, short labels (d, h, m, s) appear next to the numbers.
* **Style:** Show the timer in the heading font (Headline) or in the body text style (Text).
* **Show d/h/m/s labels:** Show or hide the labels.
* **Timer scale (desktop)** and **Timer scale (mobile):** Make the timer smaller or larger (50 to 500% on desktop, 50 to 300% on mobile).
* **Set custom item width:** Set the width of each counter item yourself with **Counter item width (desktop)** (30 to 80 px) and **Counter item width (mobile)** (20 to 80 px). Available only when labels are shown below the timer.

:::note
In the theme editor, a timer with an empty or past date shows a sample countdown, so you can style it before you set the real date. On your live store, the **Expired message** is shown instead.
:::

## Content blocks

Click **Add block** to add more content. You can use any theme block, such as [Subheading](/blocks/subheading), [Text](/blocks/text), [Button](/blocks/button), [Icon with text](/blocks/icon-with-text) or [Separator](/blocks/separator), and more **Countdown timer** blocks.

## Mobile view example

{/* TODO: mobile screenshot */}
