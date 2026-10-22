---
title: "Store policies (structured data)"
sidebar_label: "Store policies (structured data)"
sidebar_position: 18
description: "Add your contact details, return policy and shipping policy to the information search engines read from your store."
---

import SectionMeta from '@site/src/components/SectionMeta';

## Store policies (structured data)

<SectionMeta version="v1.0.0" />

Structured data is information in your page code that customers don't see but search engines such as Google read. It helps them understand your store and can show extra details in search results, such as your return window or delivery time. These settings add your customer service contacts and your return and shipping policies to that information. You'll find them under **Theme settings** > **Store policies (structured data)** in the theme editor. To open theme settings, click the gear (settings) icon in the left sidebar of the theme editor.

Only the fields you fill in are used. Everything is off or empty by default.

:::note
Settings in Google Merchant Center and Google Search Console take precedence over these. If you already set your return and shipping policies there, keep both in line or leave these off.
:::

Wise also adds your store name, logo and the social media profiles from [Social media](/theme-settings/social-media) automatically. Product information, such as price and availability, comes from Shopify.

## Settings

#### Customer service

* **Email:** Your customer service email address.
* **Phone:** Your customer service phone number. Include the country code, for example *+1 555 123 4567*.

#### Return policy

* **Add return policy:** Add your return policy. Make sure it matches the refund policy in your store settings. When it is on, these settings appear:
  * **Returns:** Whether you accept returns (options: Within a set number of days, Any time, Not accepted).
  * **Return window:** How many days customers have to return a product (1 to 100 days). Shown only when **Returns** is **Within a set number of days**.
  * **Return shipping:** Who pays for return shipping (options: Free for the customer, Paid by the customer). Hidden when returns are not accepted.
  * **Return method:** How customers return products (options: By mail, In store, At a kiosk). Hidden when returns are not accepted.

If you have a refund policy in your Shopify admin under **Settings** > **Policies**, a link to it is added automatically.

#### Shipping policy

* **Add shipping policy:** Add your shipping times and costs. Make sure they match the shipping rates in your store settings. When it is on, these settings appear:
  * **Processing time:** How many days it takes you to prepare an order before it ships (0 to 14 days).
  * **Minimum delivery time** and **Maximum delivery time:** How many days the delivery takes once shipped (1 to 30 days and 1 to 60 days). If the maximum is lower than the minimum, it is raised to the minimum.
  * **Standard shipping cost:** Your standard shipping price in your store currency, digits only, for example **5.99**. Enter **0** for free shipping.
  * **Free shipping from:** The order value from which shipping is free, in your store currency, for example **50**. Used only when the shipping cost is above 0.

:::note
The shipping policy is only added when **Standard shipping cost** contains a valid number. If you leave it empty, the shipping policy is left out completely, including the delivery times.
:::

#### Countries

* **Country codes:** The countries your return and shipping policies apply to, as two-letter codes separated by commas, for example **US, CA**. Leave it empty to use the country of your store address. Without a valid country code, the shipping policy is left out.

## Checking your structured data

After you save, you can test a page of your store with Google's **Rich Results Test** or the **Schema Markup Validator**. Paste the address of your home page and look for the **Organization** item, which holds your contact details and policies.
