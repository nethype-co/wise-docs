---
title: "Testimonials"
sidebar_label: "Testimonials"
description: "Show customer reviews one at a time in a simple slider with a rating, image and author."
slug: /sections/testimonials/testimonials
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Testimonials section?

<SectionMeta version="v1.0.0" />

The **Testimonials** section shows customer reviews one at a time, centered on the page. Each testimonial can have a star rating or a quote icon, a short text, an image and the author's name. Use it to build trust on your home page or on a landing page.

![Testimonials on desktop](/img/docs/sections/testimonials-desktop.jpg)

You will find the section under **Testimonials** in the **Add section** menu. It starts with a heading and two testimonials.

## Section structure

When you expand the section in the theme editor sidebar, you will see two fixed blocks:

* **Header:** An optional heading area above the testimonials. It contains a [Heading](/blocks/heading) block by default. Remove the heading if you do not need a section title.
* **Testimonials container:** Holds the testimonials and controls how they look. Each review is a **Testimonial** block inside it.

See [How sections and blocks work](/getting-started/sections-and-blocks) for more about fixed blocks and theme blocks.

## Section settings

#### Colors

* **Background color:** Set the background color of the section.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.
* **Text color:** Set the text color for the whole section.

#### Section spacing

* **Distance top (desktop):** Space above the section on desktop (0 to 100 px).
* **Distance bottom (desktop):** Space below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Header block

Click the **Header** block to style the heading area above the testimonials.

* **Text alignment (desktop)** and **Text alignment (mobile):** Align the heading (options: Left, Center, Right).
* **Text container max width:** Limit the width of the heading area (0 to 1600 px). Set it to 0 to use the default maximum width.
* **Text color:** Override the section text color for the heading area.

You can add any theme block to the Header, for example a [Subheading](/blocks/subheading) above the heading or a [Text](/blocks/text) block below it.

## Testimonials container block

Click the **Testimonials container** block to set the look of all testimonials at once. When the container holds more than one testimonial, they are shown as a slider with pagination dots. With a single testimonial, no slider is used.

* **Image shape:** Choose how the testimonial images are shown (options: Circle, Square, Natural, No image). **Natural** keeps the image's own proportions.
* **Text style:** The font used for the testimonial text (options: Heading, Subheading, Body, Custom).
* **Custom font:** Pick any font from the Shopify font library. Shown only when **Text style** is set to **Custom**. A different font can affect the speed of your store.
* **Text scale (desktop)** and **Text scale (mobile):** Make the text smaller or larger (50 to 200% on desktop, 50 to 150% on mobile).
* **Star color:** The color of the rating stars. Leave it empty to use the theme star color.

#### Pagination

The dots follow your [Sliders](/theme-settings/sliders) theme settings unless you turn on custom dots.

* **Custom dots:** Enable this setting to style the dots for this section only.
* **Dot background color**, **Dot background blur** (0 to 20 px), **Active dot color** and **Inactive dot color:** Style the dots. Shown only when **Custom dots** is on.

## Testimonial block

Click **Add block** under the **Testimonials container** to add another testimonial, then click it to edit it.

* **Rating:** Show a star rating above the text, a quote icon below the author, or nothing (options: None, Quote, 4 stars, 4.5 stars, 5 stars).
* **Text:** The review itself.
* **Image:** A photo of the customer or a logo. When it is empty, a placeholder image is shown, so pick **No image** as the **Image shape** if you do not use images.
* **Author:** The name of the customer.

#### Image sizing

These settings only work when **Image shape** is set to **Circle** or **Square**.

* **Image width (desktop)** and **Image width (mobile):** The width of the image (50 to 250 px).

## Mobile view example

<div style={{display: "flex", justifyContent: "center", marginBottom: "20px"}}>
  <img src="/img/docs/sections/testimonials-mobile.jpg" alt="Testimonials on mobile" style={{maxWidth: "320px", borderRadius: "8px"}} />
</div>
