const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const locales = ["pt-BR", "en"];

const localeConfigs = {
  en: {
    label: "English",
  },
  "pt-BR": {
    label: "Português",
  },
};

module.exports = {
  i18n: {
    defaultLocale: "pt-BR",
    locales,
    localeConfigs,
  },
  title: "braintris",
  tagline: `Here that contain everything I've created and studied`,
  url: "https://biantris.dev", //wip
  baseUrl: "/",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/icons/favicon.ico",
  organizationName: "biantris",
  projectName: "braintris",
  onBrokenLinks: 'log',

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        // blog: {
        //   showReadingTime: true,
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: "UA-141789564-1",
        },
      },
    ],
  ],

  plugins: [
    require.resolve("./sitePlugin"),
    require.resolve("@cmfcmf/docusaurus-search-local", { language: "pt-BR" }),
  ],

  themeConfig: {
    navbar: {
      title: "Home",
      // logo: {
      //   alt: '',
      //   src: '',
      // },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Contents",
        },
        { to: "docs/blog", label: "Articles", position: "left" },
        { to: "docs/about", label: "About", position: "left" },
        {
          href: "https://github.com/biantris/braintris",
          label: "GitHub",
          position: "right",
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Content",
          items: [
            {
              label: "Intro",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/biantris_",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/beatriiz-oliveiraa/",
            },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Articles",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/biantris/braintris",
            },
            {
              label: "Dev.to",
              href: "https://dev.to/beatrizoliveira",
            },
            {
              label: "Medium",
              href: "https://beatrizoliveiraa.medium.com/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} biantris, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};