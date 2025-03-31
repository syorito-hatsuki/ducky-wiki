import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Ducky Wiki',
    tagline: 'Collection of all wikis of my projects',
    favicon: 'img/favicon.ico',

    url: 'https://ducky-wiki.github.io',
    baseUrl: '/',

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
                    type: 'docSidebar',
                    sidebarId: 'deathCounter',
                    position: 'left',
                    label: 'Death Counter',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'duckyUpdaterReWork',
                    position: 'left',
                    label: 'Ducky Updater: ReWork',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'yetAnotherCobblestoneGenerator',
                    position: 'left',
                    label: 'Yet Another Cobblestone Generator',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'duckyUpdaterLib',
                    position: 'right',
                    label: 'Ducky Updater Lib',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'modMenuBadgesLib',
                    position: 'right',
                    label: 'ModMenu Badges Lib',
                },
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
