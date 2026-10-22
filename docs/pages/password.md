---
title: "Password"
sidebar_label: "Password"
description: "Design the page visitors see while your store is protected with a password."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Password section?

<SectionMeta version="v1.0.0" />

The **Password** section is the main content of your password page: the page visitors see while your store is locked with a password, for example before launch. Use it to show your logo, tell visitors what is coming and collect email addresses so you can let them know when you open.

{/* TODO: desktop screenshot or video */}

## Where to find it

The section sits on the **Password** template. In the theme editor, open the page selector at the top of the screen and choose **Password** (in some stores it is listed under **Others**). The page is only shown to visitors while password protection is on in your Shopify admin, under **Online Store > Preferences**.

The password page uses its own, simpler layout without the regular header and footer. Below the Password section you will find the [Password footer](/pages/password-footer), which holds the link visitors use to enter the store with the password.

## Section structure

The section has no fixed blocks. It starts with:

* A **Logo** block.
* A [Heading](/blocks/heading) block.
* A [Text](/blocks/text) block.
* An **Email form** block.

You can reorder or remove these blocks and add any theme block, a **Countdown timer** block or more of the blocks above. The content is always centered.

:::note
The message you enter in your Shopify admin under **Online Store > Preferences > Password protection** is shown automatically below the blocks. Leave it empty if you would rather write your message in a Text block.
:::

## Section settings

#### Colors

* **Background color:** Set the background color of the section.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.
* **Text color:** Set the text color for the whole section.

#### Section spacing

* **Distance top (desktop):** Space above the section on desktop (0 to 100 px).
* **Distance bottom (desktop):** Space below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Content blocks

Click **Add block** under the section to add content. Besides theme blocks such as [Heading](/blocks/heading), [Text](/blocks/text) and [Button](/blocks/button), you can use the three blocks below.

### Logo block

The **Logo** block shows your logo and links to the home page.

* **Logo:** Upload a logo for the password page. When it is empty, the logo from your brand settings in the Shopify admin is used, and if there is none, your store name is shown as text.
* **Logo width (desktop)** and **Logo width (mobile):** The width of the logo (50 to 250 px).

### Email form block

The **Email form** block lets visitors sign up with their email address. Sign ups are saved as customers in your Shopify admin with the tag `newsletter`.

* **Button style:** The style of the submit button (options: Primary, Secondary).
* **Button label:** The text on the submit button.

**Consent checkbox.**

* **Show consent checkbox:** Add a checkbox that visitors must tick before they can sign up.
* **Consent checkbox label:** The text next to the checkbox. Shown only when the checkbox is on.
* **Consent validation message:** The message shown when a visitor tries to sign up without ticking the box. Shown only when the checkbox is on.

### Countdown timer block

The **Countdown timer** block counts down to a date and time, for example your launch.

* **End date and time:** The date and time the countdown ends, in the format `YYYY-MM-DD HH:MM`.
* **Expired message:** The text shown once the countdown has ended.
* **Show labels below the timer:** Place the days, hours, minutes and seconds labels below the numbers.
* **Style:** Show the timer in a large headline style or in the body text style (options: Headline, Text).
* **Show d/h/m/s labels:** Show or hide the labels.
* **Timer scale (desktop)** and **Timer scale (mobile):** Make the timer smaller or larger (50 to 500% on desktop, 50 to 300% on mobile).
* **Set custom item width:** Set the width of each counter item yourself with **Counter item width (desktop)** (30 to 80 px) and **Counter item width (mobile)** (20 to 80 px). Available only when labels are shown below the timer.
