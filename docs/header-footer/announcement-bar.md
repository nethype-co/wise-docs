---
title: "Announcement bar"
sidebar_label: "Announcement bar"
description: "Show short messages, such as free shipping or returns, in a bar above the header."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Announcement bar section?

<SectionMeta version="v1.0.0" />

The **Announcement bar** is a thin bar above the header for short messages, for example "Free delivery from $100" or "30 days free returns". You can show several messages at once, let them scroll as a marquee or let them take turns.

![Announcement bar on desktop](/img/docs/sections/announcement-bar-desktop.jpg)

The announcement bar lives in the **Header** group at the top of the theme editor sidebar, so it shows on every page. If you removed it, click **Add section** in the Header group and choose **Announcement bar**. It can only be added to the Header group.

## Section structure

The section has no fixed blocks. Each message is an **Announcement** block. Click **Add block** under the section to add another message, and drag the blocks to change their order.

## Section settings

#### Behavior

* **Animation style:** How the messages move (options: None, Marquee, Vertical). **None** shows the messages without animation. **Marquee** scrolls all messages across the bar in a continuous line; it pauses when a customer points at it on desktop. **Vertical** shows one message at a time and then changes to the next one with a vertical slide.
* **Animation speed:** How fast the marquee scrolls (options: Very slow, Slow, Normal, Fast). Shown only for **Marquee**.

#### General

* **Show close button:** Show an X that lets customers close the bar. Once closed, the bar stays hidden for that customer for 24 hours, also on other pages.

#### Colors

* **Text color:** The color of the messages.
* **Background color:** The bar's background color.
* **Background gradient:** A background gradient. It overrides the background color.

#### Desktop version

* **Text scale:** Make the messages smaller or larger on desktop (50 to 200%).
* **Gap:** The space between messages in the marquee on desktop (40 to 200 px). Shown only for **Marquee**.

#### Mobile version

* **Text scale:** Make the messages smaller or larger on mobile (50 to 200%).
* **Gap:** The space between messages in the marquee on mobile (40 to 200 px). Shown only for **Marquee**.

## Announcement block

Each **Announcement** block is one message.

#### Icon

* **Image:** Upload your own small icon shown before the text.
* **Icon:** Or pick an icon from the theme's icon set, for example a truck or a return arrow. Choose **None** for no icon.

#### Text

* **Text:** The message. You can use bold, italic and links.
* **Link:** Make the whole message a link, for example to your shipping page.
* **Open link as a new window:** Open the link in a new browser tab.

:::tip
Keep each message short. On phones the bar is narrow, so a long message can take up a lot of space. **Vertical** is a good choice when you have two or three messages and want each to be read in full.
:::

## Mobile view example

<div style={{display: "flex", justifyContent: "center", marginBottom: "20px"}}>
  <img src="/img/docs/sections/announcement-bar-mobile.jpg" alt="Announcement bar on mobile" style={{maxWidth: "320px", borderRadius: "8px"}} />
</div>
