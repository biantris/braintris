const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

const mathMod = require('remark-math');
const katexMod = require('rehype-katex');
const math = mathMod.default ?? mathMod;
const katex = katexMod.default ?? katexMod;

const locales = ['pt-BR', 'en'];

const localeConfigs = {
  en: {
    label: 'English',
  },
  'pt-BR': {
    label: 'Português',
  },
};

module.exports = {
  i18n: {
    defaultLocale: 'pt-BR',
    locales,
    localeConfigs,
  },

  title: 'braintris',
  tagline: `Here that contain everything I've created and studied`,
  url: 'https://braintris.github.io', // wip
  baseUrl: '/braintris/',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  favicon: 'img/icons/favicon.ico',
  organizationName: 'biantris',
  projectName: 'braintris',

  onBrokenLinks: 'log',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        // blog: {
        //   showReadingTime: true,
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },

        // ⚠️ Em Docusaurus v3, googleAnalytics ainda pode existir,
        // mas o recomendado geralmente é gtag. Mantive o seu para não quebrar.
        googleAnalytics: {
          trackingID: 'UA-141789564-1',
        },
      },
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  plugins: [
    require.resolve('./sitePlugin'),

    ['@easyops-cn/docusaurus-search-local', { language: ['pt', 'en'] }],

    [
      '@tereza-tech/docusaurus-plugin-zettel',
      {
        notesDir: './docs',
        knowledgeGraph: {
          path: '/braintris/en/knowledge-graph',
          component: '@site/src/components/KnowledgeGraph',
        },
      },
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    navbar: {
      title: 'Home',
      // logo: {
      //   alt: '',
      //   src: '',
      // },
      items: [
        {
          type: 'doc',
          docId: 'about',
          position: 'left',
          label: 'Contents',
        },
        {
          to: '/docs/tags/',
          position: 'left',
          label: 'Tags',
        },
        {
          to: '/en/knowledge-graph/',
          position: 'left',
          label: 'Graph',
        },
        {
          href: 'https://www.patreon.com/beatrizoliveira',
          label: 'Patreon',
          position: 'right',
        },
        {
          href: 'https://github.com/sponsors/biantris',
          label: 'Sponsor',
          position: 'right',
        },
        {
          href: 'https://github.com/biantris/braintris',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },

    image: 'img/braintris.png',

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            {
              label: 'Intro',
              to: '/docs/about',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/biantris_',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/biantris/braintris',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/beatriiz-oliveiraa/',
            },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Dev.to',
              href: 'https://dev.to/beatrizoliveira',
            },
            {
              label: 'Medium',
              href: 'https://beatrizoliveiraa.medium.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Beatriz Oliveira`,
    },

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};
