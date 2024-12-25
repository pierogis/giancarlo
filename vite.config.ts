import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { kitRoutes } from 'vite-plugin-kit-routes';

import type { KIT_ROUTES } from '$lib/ROUTES';

export default defineConfig({
	plugins: [
		sveltekit(),
		kitRoutes<KIT_ROUTES>({
			post_update_run: 'npx prettier --write ./src/lib/ROUTES.ts',
			format: 'object[symbol]'
		})
	]
});
