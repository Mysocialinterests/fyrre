// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import keystatic from '@keystatic/astro';
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from './src/locales';
// https://astro.build/config
export default defineConfig({
	site: 'https://fyrre-seven.vercel.app/',
	adapter: cloudflare({
		// Cloudflare Workers can't run sharp (Astro's default image
		// optimizer, a native Node addon). passthrough serves images
		// as-is instead of resizing/converting them, which is the
		// safest option without opting into Cloudflare's own paid
		// Images service.
		imageService: 'passthrough',
	}),
	integrations: [mdx(), sitemap(), react(), keystatic()],
	image: { domains: ["cdn.sanity.io"], },
	vite: {
		plugins: [tailwindcss()],
	},
	i18n: {
		defaultLocale: DEFAULT_LOCALE_SETTING,
		locales: Object.keys(LOCALES_SETTING),
		routing: {
			prefixDefaultLocale: true,
			//redirectToDefaultLocale: false,
		},
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
