import { deleteResume } from '$lib/resume';
import { deletePlayer } from '$lib/player';
import { deleteChapter1 } from '../1/reset';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ event, resolve }) => {
	deleteResume(event.cookies);
	deletePlayer(event.cookies);
	deleteChapter1(event.cookies);

	return await resolve(event);
};
