import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$lib: './src/lib',
			$state: './src/lib/state',
			$ui: './src/lib/components/ui',
			$utils: './src/lib/utils',
			$core: './src/lib/components/core',
			$layout: './src/lib/components/layout',
			$export: './src/lib/components/export'
		}
	}
};

export default config;
