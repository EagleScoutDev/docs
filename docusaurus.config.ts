import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'EagleScout',
    tagline: 'Next Generation Scouting for FRC',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://eaglescout.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/docs/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'eaglescoutdev', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.
    trailingSlash: false,

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
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
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        colorMode: {
            defaultMode: 'dark',
        },
        navbar: {
            title: 'EagleScout',
            logo: {
                alt: 'Eaglescout',
                src: 'img/app_icon.webp',
            },
            items: [
                {
                    to: '/leads',
                    type: 'docSidebar',
                    sidebarId: 'leadsSidebar',
                    position: 'left',
                    label: 'For Leads',
                },
                {
                    to: '/scouters',
                    type: 'docSidebar',
                    sidebarId: 'scoutersSidebar',
                    position: 'left',
                    label: 'For Scouters',
                },
                { to: '/blog', label: 'Blog', position: 'left' },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'For Leads',
                            to: 'docs/leads/home',
                        },
                        {
                            label: 'For Scouters',
                            to: 'docs/scouters/home',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discord.com',
                        },
                        {
                            label: 'Instagram',
                            href: 'https://instagram.com',
                        },
                        {
                            label: 'Github',
                            href: 'https://github.com/eaglescoutdev/eaglescout',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'Eaglescout Homepage',
                            href: 'https://eaglescout.one',
                        }
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Eaglescout`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
        zoom: {
            selector: '.markdown > img',
        },
    } satisfies Preset.ThemeConfig,

    plugins: [
        'docusaurus-plugin-image-zoom',
    ],
};

export default config;
