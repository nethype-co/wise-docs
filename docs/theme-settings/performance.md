---
title: "Performance"
sidebar_label: "Performance"
sidebar_position: 17
description: "Speed up page changes with link preloading and choose how images look while they load."
---

import SectionMeta from '@site/src/components/SectionMeta';

## Performance

<SectionMeta version="v1.0.0" />

The **Performance** settings help your store feel faster: pages can start loading before a customer clicks, and image areas show a calm placeholder until the image arrives. You'll find them under **Theme settings** > **Performance** in the theme editor. To open theme settings, click the gear (settings) icon in the left sidebar of the theme editor.

{/* TODO: video of the image loading placeholder */}

## Settings

* **Enable link preloading on hover:** When a customer hovers over a link, or presses it on a touch screen, the browser starts loading that page in the background. By the time the click completes, the page is often already there, so moving between pages feels almost instant.

How link preloading works:

* It works in Chrome, Edge and on Android. Safari and Firefox ignore it, and the store works as usual there.
* The cart, checkout, customer account and app pages are never preloaded, nor are links with extra parameters, links that open in a new tab and links marked as *nofollow*.
* It does not run in the theme editor.

:::tip
If an app on your store counts page views or does something when a page is loaded, and you notice strange results, turn link preloading off to check whether it is the cause.
:::

#### Image loading

* **Placeholder color:** The color that fills an image area until the image appears. Choose a light, partly transparent color for a subtle effect. Clear the color for no fill and no animation.
* **Image loading:** The animation shown in the placeholder while the image loads (options: None, Pulse, Shimmer, Blur).
  * **None:** A plain placeholder color.
  * **Pulse:** The placeholder gently fades in and out.
  * **Shimmer:** A light band moves across the placeholder.
  * **Blur:** Product, slideshow and banner images first show a tiny blurred preview of the image, which sharpens when the full image arrives. Other images use the shimmer.
