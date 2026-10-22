---
title: "Blog page"
sidebar_label: "Blog"
description: "Set up the page that lists all posts of a blog, with an optional tag filter."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Blog page section?

<SectionMeta version="v1.0.0" />

The **Blog page** section lists the posts of a blog in a grid, with page numbers when there are more posts than fit on one page. You can show a row of tags above the grid so readers can filter posts by topic.

{/* TODO: desktop screenshot or video */}

## Where to find it

The section sits on the **Default blog** template. In the theme editor, open the page selector at the top of the screen and choose **Blogs > Default blog**.

## Section structure

When you expand the section in the theme editor sidebar, you will see two fixed blocks:

* **Tags navigation:** An optional row of tags above the posts.
* **Blog grid:** The grid of posts. It contains one **Blog card** that sets how every post card looks.

The blog title is shown above both blocks. You can turn it off in the section settings.

## Section settings

* **Show blog title:** Show the name of the blog at the top of the page.
* **Make section full width:** Let the grid span the full width of the screen.

#### Colors

* **Background color:** Set the background color of the section.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.
* **Text color:** Set the text color for the whole section.

#### Section spacing

* **Distance top (desktop):** Space above the section on desktop (0 to 100 px).
* **Distance bottom (desktop):** Space below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Tags navigation block

Shows the tags used on the blog's posts as buttons. Clicking a tag shows only the posts with that tag. The row only appears when at least one post has a tag.

* **Show tags filter:** Turn on the tag row. All the settings below appear only when it is on.
* **Tag style:** The style of the tag buttons (options: Primary, Secondary).
* **Tag text style:** Use the body text style or the button text style for the tags (options: Body, Button).
* **Placement:** Align the tags left or center on desktop. This applies when all the tags fit in one row. On smaller screens, the tags scroll sideways from the left.
* **Active background color**, **Active text color** and **Active text color on hover:** The colors of the tag that is currently selected.

:::tip
Add tags to your blog posts in your Shopify admin to group them, for example by *Recipes*, *Guides* and *News*.
:::

## Blog grid block

* **Posts per page:** How many posts are shown on each page (3 to 24). Page numbers appear below the grid when there are more posts.

#### Desktop version

* **Items per row:** How many posts are shown next to each other (1 to 4).
* **Gap:** The space between posts (0 to 24 px). Shown only when **Make section full width** is off.

#### Mobile version

* **Items per row:** Show 1 or 2 posts per row.
* **Gap:** The space between posts (0 to 16 px). Shown only when **Make section full width** is off.

## Blog card

Click the **Blog card** inside the Blog grid to style every post card at once. The card is made of small blocks that you can reorder or remove. By default it contains Image, Tags, Details, Title, Excerpt and Button, and you can also add a [Separator](/blocks/separator).

* **Text alignment:** Align the card text left or center.

**Image.**

* **Image ratio:** The shape of the image (options: Adapt to image, Portrait, Square, Landscape, Custom). With **Custom**, set **Custom ratio width** and **Custom ratio height** (1 to 16 each), for example 3 and 2. Posts without a featured image show a placeholder.
* **Show tags on the image:** Show the post's tags on top of the image, bottom left. When it is on, you can set **Tags to show** (1 to 3), **Tag text style**, **Tag background color**, **Tag background blur** (0 to 20 px), **Tag text color** and **Tag border color**. The blur only shows when the tag background color is partly transparent.

**Tags.** Shows the post's tags below the image.

* **Tags to show:** The maximum number of tags (1 to 3).
* **Tag text style:** Use the body or button text style.
* **Tag background color**, **Tag text color** and **Tag border color:** The colors of the tags.

**Details.**

* **Show date** and **Show author:** Choose what is shown in the details line.

**Title.**

* **Heading scale (desktop)** and **Heading scale (mobile):** Make the post title smaller or larger (50 to 300%).

**Excerpt.**

* **Excerpt length:** The maximum number of words (10 to 60). The text comes from the post's excerpt, or from its content when no excerpt is set.

**Button.**

* **Button style:** The style of the link to the post (options: Primary, Secondary, Link).

## Mobile view example

{/* TODO: mobile screenshot */}
