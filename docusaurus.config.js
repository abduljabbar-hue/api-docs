// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welcome to Wibeex API Docs',
  favicon: 'img/favicon.ico',

  url: 'https://www.wibeex.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      // Simple light ↔ dark toggle (like CoinEx); set true to add system theme as a third step
      respectPrefersColorScheme: false,
    },

    navbar: {
      hideOnScroll: false,
      logo: {
        alt: 'Wibeex',
        src: 'img/wibeex-logo.png',
        href: 'https://www.wibeex.com/',
        width: 137,
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'manualSidebar',
          label: 'User Manual',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          label: 'Public API Reference',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'authenticatedSidebar',
          label: 'Authenticated API',
          position: 'left',
        },
      ],
    },



    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;