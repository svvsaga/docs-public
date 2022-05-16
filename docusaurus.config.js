// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Saga',
  tagline: 'Dataplattformen til Statens vegvesen',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/docs-public/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'svvsaga', // Usually your GitHub org/user name.
  projectName: 'docs-public', // Usually your repo name.
  trailingSlash: false,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: ({ versionDocsDirPath, docPath }) =>
            `https://github.com/svvsaga/docs-public/edit/main/${versionDocsDirPath}/${docPath}`,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Saga',
        logo: {
          src: 'img/saga-visuals.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Dokumentasjon',
          },
          {
            href: 'https://saga-datacatalog-prod-lszg.ew.r.appspot.com/',
            position: 'right',
            label: 'Datakatalog',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()}`,
        logo: {
          alt: 'Statens Vegvesen',
          src: 'img/svv-logo-bw.svg',
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
