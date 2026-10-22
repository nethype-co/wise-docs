---
title: "Video reels"
sidebar_label: "Video reels"
description: "Show short vertical videos as tiles that open in a full screen reel viewer with a shoppable product card."
---

import SectionMeta from '@site/src/components/SectionMeta';

## What is the Video reels block?

<SectionMeta version="v1.0.0" availability="Product page" />

The **Video reels** block shows a row of short video tiles, like stories on social media. When a customer taps a tile, the video opens in a reel viewer on top of the page, where they can swipe or click through all the reels. Each reel can show a caption and a compact product card, so customers can shop the product they see in the video.

{/* TODO: screenshot of the reel tiles and the open reel viewer */}

To add the block, open the **Product information** section and click **Add block**. See [Product information](/product-page/product-information) for how blocks work on the product page. The block can also be placed in the **Below gallery** area.

The block starts with three **Reel** blocks. Upload a video to each one: a reel without a video is not shown on the storefront.

## Settings

* **Title font:** Use the body, heading or subheading font for the heading.
* **Heading:** The text above the tiles, for example *See it in Action!* Leave it empty to hide it.
* **Text scale (desktop)** and **Text scale (mobile):** Make the heading smaller or larger (50 to 300%).

The tiles scroll sideways as a slider: about 2.5 tiles are visible on mobile, 3.5 on tablets and 4.5 on desktop. With fewer reels than that, the tiles share the full width instead.

#### Reel viewer

* **Custom play/pause button:** Show a play/pause button on the video in the viewer.
* **Custom mute/unmute button:** Show a sound on/off button in the viewer. Videos start muted.
* **Auto-advance on video end:** Move on to the next reel automatically when a video ends.
* **Reel ratio:** The shape of the tiles and videos (options: Portrait, Square, Landscape, Custom). Portrait is 3:5, Landscape is 16:9.
* **Custom ratio width** and **Custom ratio height:** Your own ratio, for example 9 and 16 (1 to 16 each). Shown only when **Reel ratio** is set to Custom.

#### Block spacing

* **Distance top (desktop)** and **Distance bottom (desktop):** Space above and below the block (0 to 60 px).
* **Show custom mobile spacing:** Enable this setting to use different spacing on mobile. When it is on, **Distance top (mobile)** and **Distance bottom (mobile)** appear.

## Reel block

Each **Reel** is one video. Click **Add block** inside Video reels to add more, and drag them to change the order.

* **Video:** The video, uploaded to Shopify. Short, vertical videos work best.
* **Cover image:** An image shown on the tile instead of the video's first frame, and in the viewer before the video starts.
* **Caption:** A short text shown over the video in the viewer.

### Compact product card block

Every reel contains a **Compact product card**, shown over the video in the reel viewer.

* **Product:** The product to show with this reel. Leave it empty to show no product card for this reel. The card does not use the product of the page automatically.
* **Vertical alignment:** Align the text with the top or the center of the thumbnail.
* **Gap:** The space between the thumbnail, the text and the button (0 to 32 px).
* **Colors:** **Text color**, **Background color**, **Background blur** (0 to 20 px, needs a background color with some transparency) and **Show shadow**.

The card starts with **Thumbnail**, **Vendor**, **Title**, **Price** and **Button** blocks, and you can also add **Badge** and **Rating**. See [Complementary products (compact card)](/product-page/blocks/complementary-products-compact) for a short description of each part. The **Button** adds the product to the cart, or opens quick view when the product has several variants.

## Mobile view example

{/* TODO: mobile screenshot */}
