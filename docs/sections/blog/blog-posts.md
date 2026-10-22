---
title: "Blog posts"
sidebar_label: "Blog posts"
description: "Show the latest posts from one of your blogs as cards in a grid or a slider."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Blog posts section?

<SectionMeta version="v1.0.0" />

The **Blog posts** section shows the latest posts from a blog you choose, as cards with an image, title, excerpt and a *Read more* button. Use it on your home page or a landing page to bring your newest stories, guides or news in front of shoppers.

{/* TODO: desktop screenshot or video */}

You will find it under **Blog** in the **Add section** menu. It starts with a heading and cards showing the image, tags, details, title, excerpt and button.

## Section structure

When you expand the section in the theme editor sidebar, you will see two fixed blocks:

* **Header:** An optional heading area above the posts. It contains a [Heading](/blocks/heading) block by default.
* **Blog posts container:** Chooses the blog and the layout. Inside it is the **Blog card** block, which controls how every card looks.

See [How sections and blocks work](/getting-started/sections-and-blocks) for more about fixed blocks and theme blocks.

## Section settings

* **Make section full width:** Enable this setting to make the section span the full width of the screen. In full width, the cards sit edge to edge with no gap between them.

#### Colors

* **Background color:** Set the background color of the section.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.
* **Text color:** Set the text color for the whole section.

#### Section spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Header block

* **Text alignment (desktop)** and **Text alignment (mobile):** Align the heading (options: Left, Center, Right).
* **Text container max width:** Limit the width of the heading area (0 to 1600 px). Set it to 0 to use the default maximum width.
* **Text color:** Override the section text color for the heading area.

You can add any theme block to the Header, for example a [Subheading](/blocks/subheading) or a [Text](/blocks/text) block.

## Blog posts container block

* **Blog:** The blog to show posts from. The newest posts are shown first.
* **Posts to show:** How many posts to show (1 to 9).

:::note
Until you choose a blog, the section shows placeholder cards. If the chosen blog has no posts, the section is hidden in your online store.
:::

#### Desktop version

* **Layout:** Show the posts in a grid or a slider (options: Grid, Slider).
* **Items per row:** How many cards fit in one row (1 to 4).
* **Gap:** Space between the cards (0 to 24 px). Hidden when the section is full width.

#### Mobile version

* **Layout:** Grid or Slider on mobile.
* **Items per row:** How many cards fit across the screen (1 to 2). A value like 1.2 shows a part of the next card in a slider.
* **Gap:** Space between the cards (0 to 16 px). Hidden when the section is full width.

#### Buttons

* **Show "View all" button:** Show a button below the posts that links to the blog. It appears only when the blog has more posts than **Posts to show**.
* **"View all" button style:** The look of the button (options: Primary, Secondary, Link).

#### Slider behavior

* **Enable loop:** Let the slider start again from the first card after the last one. Shown only when one of the layouts is set to **Slider**.

#### Pagination

* **Custom dots:** Enable this setting to style the slider dots for this section only. When it is off, the dots use [Theme settings → Sliders](/theme-settings/sliders).
* **Dot background color**, **Dot background blur** (0 to 20 px), **Active dot color** and **Inactive dot color:** The custom dot styles. Shown only when **Custom dots** is on.

## Blog card block

The **Blog card** block is one card design repeated for every post, so changes here apply to all the cards.

* **Text alignment:** Align the card text (options: Left, Center).

Click **Add block** under the **Blog card** to add parts to the card, and drag them to change their order. You can also add a [Separator](/blocks/separator).

### Image block

Shows the post's featured image. Posts without a featured image show a placeholder.

* **Image ratio:** The shape of the image (options: Adapt to image, Portrait, Square, Landscape, Custom).
* **Custom ratio width** and **Custom ratio height:** Set your own shape (1 to 16 each). Shown only when **Image ratio** is set to **Custom**.

**Tags.** You can show the post's tags on top of the image, in the bottom left corner.

* **Show tags on the image:** Show the tags on the image. Use the **Tags** block instead to show them below the image.
* **Tags to show:** How many tags are shown (1 to 3).
* **Tag text style:** Use the body or button text style (options: Body, Button).
* **Tag background color**, **Tag text color** and **Tag border color:** The tag colors.
* **Tag background blur:** Blur the image behind each tag (0 to 20 px). This shows only when the tag background color is partly transparent.

### Tags block

Shows the post's tags as small pills.

* **Tags to show:** How many tags are shown (1 to 3).
* **Tag text style:** Use the body or button text style (options: Body, Button).
* **Tag background color**, **Tag text color** and **Tag border color:** The tag colors.

### Details block

* **Show date:** Show the date the post was published.
* **Show author:** Show the name of the post's author.

### Title block

Shows the post title, linked to the post.

* **Heading scale (desktop)** and **Heading scale (mobile):** Make the title smaller or larger (50 to 300%).

### Excerpt block

Shows a short summary of the post. The text comes from the post's excerpt, or from the start of its content when no excerpt is set.

* **Excerpt length:** The maximum number of words (10 to 60).

:::tip
Write a custom excerpt for each post in **Online Store → Blog posts** in your Shopify admin. It gives you full control over the summary shown on the card.
:::

### Button block

Shows a *Read more* button that links to the post.

* **Button style:** The look of the button (options: Primary, Secondary, Link).

## Mobile view example

{/* TODO: mobile screenshot */}
