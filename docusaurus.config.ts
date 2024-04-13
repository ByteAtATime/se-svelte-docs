import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "🏗 Scaffold-ETH Svelte | Docs",
  tagline: "Open-source toolkit for building dapps",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://se-svelte.byteatatime.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/ByteAtATime/se-svelte-docs/edit/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/thumbnail.jpg",
    navbar: {
      title: "Scaffold-ETH Svelte",
      logo: {
        alt: "se-svelte-logo",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "https://github.com/ByteAtATime/se-svelte-docs",
          label: "Docs Repo",
          position: "right",
        },
        {
          href: "https://github.com/ByteAtATime/scaffold-eth-svelte",
          label: "SE-Svelte Repo",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Built with ♥ at BuidlGuidl",
          items: [
            {
              label: "BuidlGuidl Website",
              to: "https://buidlguidl.com/",
            },
            {
              label: "BuidlGuidl Twitter",
              to: "https://twitter.com/buidlguidl",
            },
          ],
        },
        {
          title: "GitHub",
          items: [
            {
              label: "Scaffold-ETH-Svelte GitHub",
              href: "https://github.com/ByteAtATime/scaffold-eth-svelte",
            },
            {
              label: "Docs GitHub",
              href: "https://github.com/ByteAtATime/se-svelte-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Scaffold-ETH-Svelte Docs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
