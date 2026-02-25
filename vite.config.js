import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		// Ye line magic hai:
		// Isse tu apne Local Network (WiFi) par kisi bhi device se site khol sakta hai.
		// Mobile testing ke liye compulsory hai.
		host: true,
		port: 5173
	}
});
