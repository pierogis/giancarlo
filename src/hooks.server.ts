import type { Handle } from '@sveltejs/kit';

import { PAGES } from '$lib/ROUTES';
import { updateState, updateResume } from '$lib/state';

export const handle: Handle = async ({ event, resolve }) => {
	const resume = updateResume(event.cookies, (prev) => {
		const pathname = event.url.pathname.toString();
		if (pathname !== PAGES._ROOT) {
			prev.pathname = pathname;
		}
		return prev;
	});

	if (resume.pathname !== PAGES._ROOT) {
		event.locals.resumePathname = resume.pathname;
	}

	const state = updateState(event.cookies);

	event.locals.state = state;

	return await resolve(event);
};
