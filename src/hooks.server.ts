import type { Handle } from '@sveltejs/kit';

import { PAGES } from '$lib/ROUTES';
import { defaultPlayer, playerCookieName, type Player } from '$lib/player';

export const handle: Handle = async ({ event, resolve }) => {
	const resumePathname = event.cookies.get('gc_resume');
	if (resumePathname !== PAGES[0]) {
		event.cookies.set('gc_resume', event.url.pathname.toString(), { path: PAGES._ROOT });
	}

	event.locals.resumePathname = resumePathname;

	const playerCookie = event.cookies.get(playerCookieName);

	const player: Player = playerCookie ? JSON.parse(playerCookie) : defaultPlayer;

	event.cookies.set(playerCookieName, JSON.stringify(player), {
		path: PAGES._ROOT
	});

	event.locals.player = player;

	return await resolve(event);
};
