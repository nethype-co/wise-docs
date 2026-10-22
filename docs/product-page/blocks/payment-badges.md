---
title: "Payment badges"
sidebar_label: "Payment badges"
description: "Show the payment methods you accept, or your own trust badge image, near the buy buttons."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Payment badges block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Payment badges** block shows the payment methods your store accepts, usually right below the buy buttons, to reassure customers before they check out. You can show the icons Shopify provides for your enabled payment methods, or upload your own badge image, and add a short text above it such as *Guaranteed safe checkout*.

{/* TODO: screenshot of payment icons below the buy buttons */}

To add the block, open the **Product information** section and click **Add block**. See [Product information](/product-page/product-information) for how blocks work on the product page.

## Settings

* **Text:** Optional text above the badges, for example *Secure checkout with*.
* **Text alignment:** Align the text and badges (options: Left, Center, Right).
* **Badges:** Choose what to show (options: Payment icons enabled in the store, Custom image).
  * **Payment icons enabled in the store** shows an icon for each payment method enabled in **Settings > Payments** in your Shopify admin. The icons update automatically when you turn payment methods on or off.
  * **Custom image** shows an image you upload, for example a trust badge from your payment provider.
* **Monochrome icons:** Show the payment icons in gray instead of their brand colors. Shown only for payment icons.

#### Desktop version

Shown only when **Badges** is set to Custom image.

* **Image:** The badge image for desktop.
* **Max width:** Limit the width of the image (10 to 100%).

#### Mobile version

Shown only when **Badges** is set to Custom image.

* **Image:** An optional different image for mobile. When it is empty, the desktop image is used on all screens.
* **Max width:** Limit the width of the image on mobile (10 to 100%).

#### Colors

* **Text color:** The color of the text.
* **Background color:** A background behind the block. When you set one, the block gets some inner padding.

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the block (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.
