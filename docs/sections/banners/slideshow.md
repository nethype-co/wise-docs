---
title: "Slideshow"
sidebar_label: "Slideshow"
description: "Show several full-width images in a looping slideshow, each with its own text, buttons and product cards."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Slideshow section?

<SectionMeta version="v1.0.0" />

The **Slideshow** section shows several large images one after another, each with its own heading, text and buttons on top. Use it at the top of your home page to feature several collections, campaigns or offers in the same space. Each slide can also show floating product cards so customers can shop straight from the image.

![Slideshow on desktop](/img/docs/sections/slideshow-desktop.jpg)

You will find the section under **Banners** in the **Add section** menu. It starts with a heading and three slides, each with a subheading, heading, button and a product card.

## Section structure

When you expand the section in the theme editor sidebar, you will see:

* **Header:** An optional heading area above the slideshow. It contains a [Heading](/blocks/heading) block by default. Remove the heading if you do not need a section title.
* **Slide** blocks: One block per slide. Click **Add block** at the section level to add another slide, and drag slides to change their order. Each slide has its own content blocks and a fixed **Floating card** block.

See [How sections and blocks work](/getting-started/sections-and-blocks) for more about fixed blocks and theme blocks.

## Section settings

* **Make section full width:** Enable this setting to make the section span the full width of the screen.
* **Show section behind header:** Show the section behind a transparent header. This works only when the section is the first one on the page, right after the header, on a page type ticked in the header's **Transparent header** settings. For the best result, turn on full width, leave the section heading and spacing empty and give the header a semi-transparent background. See [Header](/header-footer/header).
* **Transition style:** How one slide changes to the next (options: Slide, Fade).
* **Autoplay:** Move to the next slide automatically.
* **Change slide every:** How long each slide is shown (1 to 10 seconds). Shown only when **Autoplay** is on.
* **Cursor navigation:** On desktop, replace the arrows with a cursor that follows the mouse. Visitors click the left or right half of the slideshow to go back or forward.
* **Cursor size:** The size of that cursor (32 to 80 px). Shown only when **Cursor navigation** is on.

The look of the arrows and dots follows your [Sliders](/theme-settings/sliders) theme settings.

#### Section height

* **Slide height:** Choose **Adapt to first image** to let the first slide's image set the height of the slideshow, or **Fixed height** to set the height yourself.
* **Desktop height** and **Mobile height:** Set the fixed height (200 to 1000 px). Shown only when **Fixed height** is selected.

#### Optimization

* **Optimize loading if this is the first section on the page:** Load the first image right away instead of when it scrolls into view, which makes the page appear faster. It is on by default. Turn it off if the slideshow is further down the page.

#### Colors

* **Background color:** Set the background color of the section.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.
* **Text color:** Set the text color for the whole section.

#### Pagination

The dots follow your [Sliders](/theme-settings/sliders) theme settings unless you turn on custom dots.

* **Custom dots:** Enable this setting to style the dots for this section only.
* **Dot background color**, **Dot background blur** (0 to 20 px), **Active dot color** and **Inactive dot color:** Style the dots. Shown only when **Custom dots** is on.

#### Mobile version

* **Show content below image on mobile:** Move the content of every slide out of the image and show it below on phones. The colors of the content below the image are set on each slide.

#### Section spacing

* **Distance top (desktop):** Space above the section on desktop (0 to 100 px).
* **Distance bottom (desktop):** Space below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Header block

Click the **Header** block to style the heading area above the slideshow.

* **Text alignment (desktop)** and **Text alignment (mobile):** Align the heading (options: Left, Center, Right).
* **Text container max width:** Limit the width of the heading area (0 to 1600 px). Set it to 0 to use the default maximum width.
* **Text color:** Override the section text color for the heading area.

You can add any theme block to the Header, for example a [Subheading](/blocks/subheading) above the heading or a [Text](/blocks/text) block below it.

## Slide block

Click a **Slide** block to set its image and how its content is placed.

#### Desktop version

* **Desktop image:** The image of the slide.
* **Text vertical position:** Place the content at the top, center or bottom of the slide.
* **Text alignment:** Align the content left, center or right.
* **Text container max width:** Limit the width of the content (0 to 1600 px). Set it to 0 to use the default maximum width.

#### Mobile version

* **Show different media on mobile:** Enable this setting to use a different image on phones, for example a portrait crop.
* **Mobile image:** The image for phones. Shown only when the setting above is on.
* **Text vertical position** and **Text alignment (mobile):** Position and align the content on phones.

#### Colors

* **Text color:** Override the text color of this slide.
* **Overlay color:** A color layer on top of the image, behind the content. A semi-transparent color helps make text easier to read.
* **Background color (below image)** and **Text color (below image):** The colors of the content area when it is shown below the image on phones. Shown only when **Show content below image on mobile** is on in the section settings.

## Slide content blocks

Click **Add block** under a slide to add content on top of its image. You can use any theme block, such as [Subheading](/blocks/subheading), [Heading](/blocks/heading), [Text](/blocks/text) and [Button](/blocks/button), and the **Countdown timer** block.

### Countdown timer block

The **Countdown timer** block counts down to a date and time, for sales, launches and limited offers.

* **End date and time:** The date and time the countdown ends, in the format `YYYY-MM-DD HH:MM`.
* **Expired message:** The text shown once the countdown has ended.
* **Style:** Show the timer in a large headline style or in the body text style.
* **Show labels below the timer:** Place the days, hours, minutes and seconds labels below the numbers.
* **Show d/h/m/s labels:** Show or hide the labels.
* **Timer scale (desktop)** and **Timer scale (mobile):** Make the timer smaller or larger (50 to 500% on desktop, 50 to 300% on mobile).
* **Set custom item width:** Set the width of each counter item yourself, separately for desktop and mobile. Available only when labels are shown below the timer.

## Floating card block

Each slide has a fixed **Floating card** block that shows small product cards on top of the slide image, for example the products your model is wearing. A card appears once its product is set. More than one card stacks in a column. If you do not want a card on a slide, remove the **Compact product card** inside it.

* **Gap:** The space between cards (0 to 32 px).
* **Vertical position (desktop)** and **Horizontal position (desktop):** Place the cards in a corner of the slide (options: Top, Bottom and Left, Right).
* **Vertical position (mobile):** Place the cards at the top or bottom of the slide on phones.

### Compact product card block

Click **Add block** under **Floating card** to add a **Compact product card**. It shows a small product card with a thumbnail, the product details and a quick buy button.

* **Product:** The product the card shows. The card appears on the storefront once a product is set.
* **Vertical alignment:** Line up the thumbnail and the details at the top or in the center of the card (options: Top, Center).
* **Gap:** The space between the parts of the card (0 to 32 px).
* **Text color** and **Background color:** The colors of the card.
* **Background blur:** Blur what is behind the card (0 to 20 px). It needs a background color with some transparency to show. Shown only when a background color is set.
* **Show shadow:** Show a soft shadow under the card.

The card is made of smaller blocks that you can reorder, remove or add again:

* **Thumbnail:** The product image. Set its **Size (desktop)** and **Size (mobile)** (60 to 160 px), its **Image ratio** (options: Square, Portrait, Adapt to image) and whether it links to the product.
* **Vendor:** The product vendor, optionally linked to the vendor's collection, with a text scale for desktop and mobile.
* **Badge:** The first badge that applies to the product: Sold out, then the tag badges from [Product badges](/theme-settings/product-badges). You can override the badge background and text color and blur the image behind the badge.
* **Title:** The product title, with a choice of heading tag (h2, h3, h4) for SEO and a text scale for desktop and mobile.
* **Price:** The product price, with a text scale for desktop and mobile. The compare-at price and discount are set in [Product badges](/theme-settings/product-badges).
* **Rating:** The product's star rating from Shopify's product rating metafield, which a reviews app fills in. Choose whether to show the review count and whether to hide the rating when there are no reviews.
* **Button:** A quick buy button, shown as an icon or as text (options: Icon, Text) in the primary or secondary button style. A product with one variant is added to the cart straight away. For a product with several variants, quick view opens so the customer can choose.

## Mobile view example

<div style={{display: "flex", justifyContent: "center", marginBottom: "20px"}}>
  <img src="/img/docs/sections/slideshow-mobile.jpg" alt="Slideshow on mobile" style={{maxWidth: "320px", borderRadius: "8px"}} />
</div>
