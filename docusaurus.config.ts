import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Ducky Wiki',
    tagline: 'Collection my projects wikis',
    favicon: 'img/favicon.ico',

    url: 'https://syorito-hatsuki.github.io',
    baseUrl: '/ducky-wiki',

    organizationName: 'syorito-hatsuki', // Usually your GitHub org/user name.
    projectName: 'ducky-wiki', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    editUrl: 'https://github.com/syorito-hatsuki/ducky-wiki/tree/master/docs/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    plugins: [['@easyops-cn/docusaurus-search-local', {
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        fuzzyMatchingDistance: 10
    }], 'plugin-image-zoom'],

    themeConfig: {
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'Ducky Wiki',
            logo: {
                alt: 'Ducky Wiki Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'dropdown',
                    label: 'Mods',
                    position: 'left',
                    items: [
                        {
                            type: 'docSidebar',
                            sidebarId: 'deathCounter',
                            label: 'Death Counter',
                        },
                        {
                            type: 'docSidebar',
                            sidebarId: 'duckyUpdaterReWork',
                            label: 'Ducky Updater: ReWork',
                        },
                        {
                            type: 'docSidebar',
                            sidebarId: 'yetAnotherCobblestoneGenerator',
                            label: 'Yet Another Cobblestone Generator',
                        },
                    ]
                },
                {
                    type: 'dropdown',
                    label: 'Libraries',
                    position: 'left',
                    items: [
                        {
                            type: 'docSidebar',
                            sidebarId: 'duckyUpdaterLib',
                            label: 'Ducky Updater Lib',
                        },
                        {
                            type: 'docSidebar',
                            sidebarId: 'modMenuBadgesLib',
                            label: 'ModMenu Badges Lib',
                        },
                    ]
                },
                {
                    type: 'search',
                    position: 'right',
                }
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Mods',
                    items: [
                        {
                            label: 'Death Counter',
                            href: 'https://modrinth.com/mod/death-counter',
                        },
                        {
                            label: 'Ducky Updater: ReWork',
                            href: 'https://modrinth.com/mod/ducky-updater-rework',
                        },
                        {
                            label: 'Yet Another Cobblestone Generator',
                            href: 'https://modrinth.com/mod/yacg',
                        },
                    ],
                },
                {
                    title: 'Libraries',
                    items: [
                        {
                            label: 'Ducky Updater Lib',
                            href: 'https://modrinth.com/mod/ducky-updater-lib',
                        },
                        {
                            label: 'ModMenu Badges Lib',
                            href: 'https://modrinth.com/mod/modmenu-badges-lib',
                        },
                    ]
                },
                {
                    title: 'Wiki Sources',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/syorito-hatsuki/ducky-wiki',
                        },
                        {
                            label: 'Issues',
                            href: 'https://github.com/syorito-hatsuki/ducky-wiki/issues',
                        },
                        {
                            label: 'Contribute',
                            href: 'https://github.com/syorito-hatsuki/ducky-wiki/issues',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Ducky Wiki. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
