---
title: "Multi-images variant gallery"
sidebar_label: "Multi-images variant gallery"
description: "Show only the photos of the selected variant in the product gallery, using alt text tags, file names or variant image groups."
sidebar_position: 5
---

The product gallery in Wise can show only the media that belongs to the variant a customer selects. For example, a dress in Black, Red and Navy shows only the black photos when Black is selected. This keeps the gallery short and focused, which matters most for products with many variants and many photos.

In this guide you will tell the theme which photo belongs to which variant. There are three ways to do this, and you choose one in the gallery settings.

{/* TODO: screenshot or short video of the gallery switching photos when a color is selected */}

## How it works

* **There is no on/off switch.** The gallery filters itself as soon as a product's media is tagged. Products without any tags show their full gallery, exactly as before.
* **The variant's own image always shows first.** If a variant has an image assigned in your Shopify admin, that image is the first slide. After it come the other media tagged for the variant, then the media with no tag. Each group keeps the order from your Shopify admin.
* **Media with no tag shows for every variant.** Use this for photos that apply to the whole product, such as a size chart or a detail of the fabric.
* **Nothing left to show means the full gallery.** If a variant has no image of its own and no media matches it, the gallery shows all media instead of an empty gallery.
* **It works wherever the product gallery is used:** on the product page in the [Product information](/product-page/product-information) section and in the [Featured product](/sections/collections/featured-product) section.

## Step 1: Choose how media is tagged

1. In the theme editor, open a product page (choose **Products > Default product** in the page selector at the top).
2. In the **Product information** section, click the **Product gallery** block.
3. Find **Variant media tags** and choose one of the options:
   * **Alt text** (default): you add a hashtag to the alt text of each photo.
   * **File name**: you add the option value to the file name before you upload the photo.
   * **Variant image groups**: no tags. The gallery uses the image you assign to each variant and the order of your media.
4. Click **Save**.

The setting applies to every product that uses this product template. If you use more than one product template, set it on each of them. The Featured product section has its own **Product gallery** block with the same setting.

{/* TODO: screenshot of the Variant media tags setting in the Product gallery block */}

## Step 2: Tag your media

Follow the part below that matches your choice in **Variant media tags**.

### Option A: Alt text

1. In your Shopify admin, go to **Products** and open the product.
2. Click a photo or video in the **Media** area.
3. In **Alt text**, add a hashtag with the option value, for example `#red`.
4. Click **Save** and repeat for every photo you want to tag.

Naming rules:

* **Capital letters do not matter.** `#Red`, `#RED` and `#red` all match the value "Red".
* **Spaces, hyphens and underscores in the value are ignored.** A tag cannot contain a space, so for the value "Light gray" write `#lightgray`, `#light-gray` or `#light_gray`. All three work.
* **One photo for several values:** separate the values with `|` and no spaces, for example `#red|blue`. The photo shows for Red and for Blue. This also helps multilingual stores: `#red|rot|czerwony` matches the English, German and Polish value names.
* **A photo for every variant:** use `#all`. This is the same as leaving the photo untagged, but it is handy when you want a photo in a tagged set to stay visible everywhere.
* **Keep a description if you like.** The alt text can contain normal words next to the tag, for example `Model wearing the dress #red`. The theme removes the hashtags before the alt text reaches customers and screen readers, so they only read "Model wearing the dress".

{/* TODO: screenshot of the alt text field in the Shopify admin with #red */}

### Option B: File name

Rename the image file on your computer before you upload it to the product. Add the option value after a double underscore (`__`), just before the file extension:

* `dress__red.jpg` shows for the value "Red".
* `dress__light-gray.jpg` shows for "Light gray".
* `dress__red__large.jpg` has two tags, "red" and "large". See [Products with more than one option](#products-with-more-than-one-option).
* `dress__all.jpg` shows for every variant.

Naming rules:

* **Capital letters do not matter**, and hyphens are ignored.
* **Use hyphens between words, not single underscores.** Anything after a single underscore inside a tag is ignored, so `dress__light_gray.jpg` is read as "light" and will not match "Light gray". This is on purpose: when you upload a file twice, Shopify adds a suffix after an underscore, and the theme skips it.
* **Rename before uploading.** The theme reads the name of the file stored in Shopify, so an image that is already uploaded keeps its old name. Delete it and upload it again under the new name.

:::tip
File names are useful when your photographer or product feed already names files by color, or when you prefer to keep the alt text purely descriptive.
:::

### Option C: Variant image groups

This option needs no tags. It uses the image you assign to each variant and the order of the media in your Shopify admin.

1. In your Shopify admin, open the product and assign an image to each variant: open the variant and choose its image.
2. In the **Media** area, drag the media into groups: each variant's image first, followed by the other photos of that variant. For example: red main photo, two more red photos, blue main photo, two more blue photos.
3. Place photos that belong to every variant at the very start, before the first variant image.

When a customer selects a variant, the gallery shows that variant's image and all the media after it, up to the next variant's image. The photos before the first variant image show for every variant.

:::note
* With this option, every product that has variant images is filtered. You do not need to tag anything, but the order of the media matters on every product.
* A variant without an image of its own shows the full gallery.
* There is no "common" area at the end: media after the last variant image belongs to the last variant's group.
:::

## Products with more than one option

Wise compares every tag of a photo with all option values of the selected variant, whatever option they belong to. For a product with Color and Size:

| Tags on the photo | Shows for |
| --- | --- |
| `#red` | Every Red variant, in any size |
| `#red #large` | Only Red in size Large. Every tag must match. |
| `#red\|blue` | Every Red and every Blue variant |
| `#red\|blue #large` | Red Large and Blue Large |
| No tag, or `#all` | Every variant |

In most stores you only tag the color, so the gallery changes when the customer picks a color and stays the same when they pick a size.

With **Variant image groups**, assign the same image to all variants of one color (for example Red S, Red M and Red L). They then share one group and show the same photos.

:::tip
A tag matches a value in any option. If two options share a value, for example Color "Black" and Strap "Black", a `#black` photo shows for both. Use a more specific value name in one of the options to avoid this.
:::

## Product cards and quick view

The filter only runs in the product gallery. Other places show your media like this:

* **[Quick view](/header-footer/quick-view):** The images show all the product's media. When the customer picks a variant, its image moves to the front. Hashtags are removed from the alt text here too.
* **Product cards:** With the **Swatches** block on a card, choosing a color shows that variant's own image. The hover image becomes the first photo whose alt text ends with `#` and the value written exactly as in your product, for example `#Red`, and otherwise the product's second photo. In the **Gallery** media mode, the first slide changes to the variant image. See [How to set up a product card](/guides/how-to-set-up-a-product-card).

:::note
For the card hover image, the value after `#` must match the option value exactly, capital letters and spaces included. It must also be the only hashtag in the alt text and stand at its end, so `#Red|Rot` or `#Red #large` are not recognised on the card. A tag like `#Red` therefore works for both the product gallery and the card. Values with spaces, such as "Light gray", need `#lightgray` for the gallery, which the card does not recognise, so those cards fall back to the second photo on hover.
:::

## Troubleshooting

* **The gallery does not filter at all.** Check that **Variant media tags** matches the way you tagged your media, and that you saved the theme. With **Alt text**, make sure the tag starts with `#` and has no space inside.
* **A photo shows for every variant.** It has no tag, or one of its tags is `all`.
* **A photo never shows.** One of its tags does not match any value. Check the spelling, and remember that with two tags both must match.
* **The wrong photo comes first.** The variant's own image always comes first. Change the image assigned to the variant in your Shopify admin.

## Related articles

* [Product information](/product-page/product-information#showing-media-per-variant)
* [Featured product](/sections/collections/featured-product)
* [Variant picker](/product-page/blocks/variant-picker)
* [Color swatches](/theme-settings/color-swatches)
* [Quick view](/header-footer/quick-view)
