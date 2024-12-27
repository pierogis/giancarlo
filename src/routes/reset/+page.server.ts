import { redirect } from '@sveltejs/kit';

import { PAGES } from '$lib/ROUTES';

import { deleteResume, deleteState } from '$lib/state';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	deleteResume(cookies);
	deleteState(cookies);

	redirect(307, PAGES._ROOT);
};
