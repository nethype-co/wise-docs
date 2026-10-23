---
title: "Breadcrumbs"
sidebar_label: "Breadcrumbs"
description: "Show a breadcrumb trail so customers can see where they are and go back a level."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Breadcrumbs section?

<SectionMeta version="v1.0.0" />

The **Breadcrumbs** section shows a small navigation trail at the top of a page, for example *Home / Skincare / Daily serum*. Customers can see where they are in your store and click back to a collection or to the home page.

![Breadcrumbs on desktop](/img/docs/sections/main-breadcrumbs-desktop.jpg)

## Where to find it

Wise adds the Breadcrumbs section to these templates by default:

* **Products > Default product**, **beauty-gummies** and **omega-3**
* **Collections > Default collection**, where it is hidden by default. Click the eye icon next to the section in the sidebar to show it.

Choose a template in the page selector at the top of the theme editor to edit it there. You can also add the section to any other template with **Add section**, for example to pages, blogs or blog posts. It cannot be added to the header or footer.

If you would rather show breadcrumbs inside another section, use the [Breadcrumbs](/blocks/breadcrumbs) theme block instead.

## How the trail is built

The trail is created automatically from the page the customer is on. You do not need to set up any links. It starts with **Home**, then adds what applies to the current page:

* The collection, on a collection page, or on a product page opened from a collection.
* The product, on a product page.
* The page title, on a regular page.
* The blog and then the blog post, on blog and article pages.

On mobile, the trail stays on one line. A long trail is cut off and fades out at the end.

## Section settings

* **Make section full width:** Let the breadcrumbs span the full width of the screen, ignoring the page width set in [Theme settings > Layout](/theme-settings/layout).

#### Colors

* **Text color:** Set the color of the breadcrumb links.
* **Background color:** Set the background color of the section.
* **Background gradient:** Set a background gradient. A gradient overrides the background color.

#### Section spacing

* **Distance top (desktop):** Space above the section on desktop (0 to 100 px).
* **Distance bottom (desktop):** Space below the section on desktop (0 to 100 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Mobile view example

<div style={{display: "flex", justifyContent: "center", marginBottom: "20px"}}>
  <img src="/img/docs/sections/main-breadcrumbs-mobile.jpg" alt="Breadcrumbs on mobile" style={{maxWidth: "320px", borderRadius: "8px"}} />
</div>
