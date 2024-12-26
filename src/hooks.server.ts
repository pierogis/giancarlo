import type { Handle } from '@sveltejs/kit';

import { PAGES } from '$lib/ROUTES';
import { syncPlayer } from '$lib/player';
import { syncResume } from '$lib/resume';

export const handle: Handle = async ({ event, resolve }) => {
	const resume = syncResume(event.cookies, (prev) => {
		const pathname = event.url.pathname.toString();
		if (pathname !== PAGES[0]) {
			return { pathname };
		} else {
			return { pathname: prev.pathname };
		}
	});

	event.locals.resumePathname = resume.pathname;

	const player = syncPlayer(event.cookies);

	event.locals.player = player;

	return await resolve(event);
};
