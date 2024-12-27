import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { kitRoutes } from 'vite-plugin-kit-routes';

import type { KIT_ROUTES } from '$lib/ROUTES';

const statusViewSearchParamConfiguration = {
	statusView: {
		type: "'messages' | 'player' | 'giancarlo'",
		required: false,
		default: "'messages'"
	}
};

export default defineConfig({
	plugins: [
		sveltekit(),
		kitRoutes<KIT_ROUTES>({
			post_update_run: 'npx prettier --write ./src/lib/ROUTES.ts',
			format: 'object[symbol]',
			PAGES: {
				'1_auxilliary_living_room': {
					explicit_search_params: statusViewSearchParamConfiguration
				},
				'1_auxilliary_living_room_hotel': {
					explicit_search_params: statusViewSearchParamConfiguration
				},
				'1_auxilliary_living_room_lizard_zone': {
					explicit_search_params: statusViewSearchParamConfiguration
				},
				'1_bathroom': {
					explicit_search_params: statusViewSearchParamConfiguration
				},
				'1_doorway': {
					explicit_search_params: statusViewSearchParamConfiguration
				},
				'1_kitchen': {
					explicit_search_params: statusViewSearchParamConfiguration
				},
				'1_laboratory': {
					explicit_search_params: statusViewSearchParamConfiguration
				},
				'1_living_room': {
					explicit_search_params: statusViewSearchParamConfiguration
				},
				'1_living_room_poäng': {
					explicit_search_params: statusViewSearchParamConfiguration
				}
			}
		})
	]
});
