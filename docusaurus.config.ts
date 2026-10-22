import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// TODO: add the Wise GA4 property (gtag script + config headTag, see wonder-docs) once it exists.

const config: Config = {
  title: 'Wise Theme Docs',
  tagline: 'Documentation for the Wise Shopify Theme',
  favicon: 'img/favicon-32.png',

  future: {
    v4: true,
  },

  url: 'https://support.wise-theme.com',
  baseUrl: '/',

  organizationName: 'nethype-co',
  projectName: 'wise-docs',

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  clientModules: ['./src/clientModules/searchTracking.ts'],

  scripts: [
    {
      src: 'https://euc-widget.freshworks.com/widgets/204000000466.js',
      async: true,
      defer: true,
    },
  ],

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://api.fontshare.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://api.fontshare.com/v2/css?f[]=satoshi@1&display=swap',
      },
    },
    {
      tagName: 'script',
      attributes: {},
      innerHTML: `window.fwSettings={'widget_id':204000000466};!function(){if("function"!=typeof window.FreshworksWidget){var n=function(){n.q.push(arguments)};n.q=[],window.FreshworksWidget=n}}()`,
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Wise Theme Documentation',
        url: 'https://support.wise-theme.com',
        description: 'Official documentation for the Wise Shopify Theme: setup guides, theme settings, sections, blocks and troubleshooting.',
        publisher: {
          '@type': 'Organization',
          name: 'Nethype',
          url: 'https://nethype.co',
        },
      }),
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 10,
        explicitSearchResultPath: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Wise Theme',
      logo: {
        alt: 'Wise Theme',
        src: 'img/wise-logo.svg',
        srcDark: 'img/wise-logo.svg',
        href: '/',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/blocks',
          label: 'Blocks',
          position: 'left',
        },
        {
          to: '/guides',
          label: 'Guides',
          position: 'left',
        },
        {
          to: '/contact',
          label: 'Contact',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/getting-started',
            },
            {
              label: 'Sections',
              to: '/sections',
            },
            {
              label: 'Blocks',
              to: '/blocks',
            },
            {
              label: 'Guides',
              to: '/guides',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Support Policy',
              to: '/getting-started/about-theme/support-policy',
            },
            {
              label: 'Refund Policy',
              to: '/getting-started/about-theme/refund-policy',
            },
            {
              label: 'Theme Licensing',
              to: '/getting-started/about-theme/theme-licensing',
            },
            {
              label: 'Contact Us',
              to: '/contact',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Nethype',
              href: 'https://nethype.co',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nethype.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
