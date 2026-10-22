---
title: "Unlocking page speed mastery for your Shopify store"
sidebar_label: "Page speed mastery"
description: "Measure your store's speed, use Wise's performance settings and keep apps and media from slowing your pages down."
sidebar_position: 9
---

## Unlocking page speed mastery for your Shopify store

A fast store keeps customers browsing, converts better and is favoured by search engines. This guide shows how to measure your speed, which Wise settings help, and what usually slows a store down.

## 1. Why page speed matters

* Customers leave slow pages, especially on mobile data.
* Faster pages usually mean more completed orders.
* Google uses loading speed as one of its ranking signals.

## 2. Measure before you change anything

Test a few key pages (home page, a collection and a product), note the results, and test again after each change so you know what helped.

* **Shopify's web performance dashboard:** in your Shopify admin, under **Analytics**. It is based on real visits to your store, so it shows what your customers actually experience.
* **Google PageSpeed Insights:** detailed advice, with separate results for mobile and desktop.
* **Lighthouse:** Google's audit tool, built into Chrome's developer tools.
* **GTmetrix, Pingdom and WebPageTest:** let you test from different regions, which is useful if you sell internationally. WebPageTest also records a video of the page loading.

:::tip
Scores from test tools change from run to run. Look at the trend over several tests rather than a single number.
:::

## 3. What Wise does for you

Wise is built to load only what a page needs:

* **Scripts load with their sections:** the code for a feature, such as the quiz, recently viewed products or the side navigation, only loads on pages that use that section, and it never blocks the page from appearing.
* **Images load as they are needed:** images further down the page load when the customer scrolls towards them, in a size that fits the screen.
* **The first image loads first:** when a banner section such as [Slideshow](/sections/banners/slideshow), [Image banner](/sections/banners/image-banner), [Image with text](/sections/storytelling/image-with-text), [Video section](/sections/banners/video-section), [Editorial banner](/sections/banners/editorial-banner) or [Parallax](/sections/storytelling/parallax) is the first section on the page, Wise loads its image with top priority automatically. On product pages, the first product image is treated the same way.
* **Reduced data mode:** when a customer's device asks to save data, Wise skips the blurred image previews.

## 4. Use Wise's performance settings

#### Theme settings > Performance

Open **Theme settings > Performance** in the theme editor:

* **Enable link preloading on hover:** pages start loading when a customer hovers over or presses a link, so moving between pages feels almost instant.
* **Image loading:** choose a placeholder color and a loading animation for image areas, so the page looks calm while images arrive.

See [Performance](/theme-settings/performance) for the details.

#### Optimize loading if this is the first section on the page

Many sections and image blocks have the setting **Optimize loading if this is the first section on the page**. When it is on, the image or video loads right away instead of when it scrolls into view.

* Turn it on for the section, or the tiles and columns, that customers see as soon as the page opens. This makes the main image appear sooner, which is one of the numbers speed tools measure.
* Turn it off for everything further down. Loading too many images "right away" makes them compete with each other, and the page gets slower, not faster.
* The banner sections listed in step 3 already do this automatically when they are the first section, so you only need the setting when such a section sits second, for example under a small text section.

## 5. Keep your content light

* **Upload images at a sensible size:** about 3000 px wide is plenty for full-width banners. Shopify serves resized copies to each screen, so larger originals bring no benefit.
* **Be careful with video at the top of the page:** a video is much heavier than an image. Use a short, compressed clip, and add a cover image where the section offers one.
* **Use fewer sections on the home page:** each section adds images and code. Remove sections customers don't need.
* **Limit autoplaying media and heavy effects** to the places where they matter most.

## 6. Review your apps

Apps are the most common cause of a slow store, because many add their own code to every page.

* Go through your installed apps and keep only those you really use.
* Prefer apps that work as app blocks or app embeds, which you can turn off in the theme editor under **App embeds** without uninstalling the app.
* After uninstalling an app, check that its code is gone. Some apps leave code behind in the theme. Ask the app developer how to remove it cleanly.
* Test your speed again after adding or removing an app.

## 7. Keep your theme up to date

New versions of Wise often include performance improvements. Update when a new version is available. See Shopify's help on updating themes if you're unsure how to bring your changes across.

If you need more help, Shopify's [store speed guide](https://help.shopify.com/en/manual/online-store/store-speed) has more tips, and a Shopify expert can audit your store in depth.

## Related articles

* [Performance](/theme-settings/performance)
* [Animations](/theme-settings/animations)
* [Slideshow](/sections/banners/slideshow)
* [Image banner](/sections/banners/image-banner)
* [Maximizing SEO potential within your theme](/guides/maximizing-seo-potential-within-your-theme)
