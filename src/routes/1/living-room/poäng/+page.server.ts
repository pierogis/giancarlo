import { defaultIkeaPoang, type IkeaPoang } from './state';
import { PAGES } from '$lib/ROUTES';

import type { Actions, PageServerLoad } from './$types';

const cookieName = 'gc_poang';

export const load: PageServerLoad = async (event) => {
	const cookie = event.cookies.get(cookieName);

	const poang: IkeaPoang = cookie ? JSON.parse(cookie) : defaultIkeaPoang;

	event.cookies.set(cookieName, JSON.stringify(poang), {
		path: PAGES['1_living_room_poäng']
	});

	return {
		poang
	};
};

export const actions: Actions = {
	// regardLizard: (event) => {
	// 	const cookie = event.cookies.get('gc_auxilliary_living_room');
	// 	const livingroom: LivingRoom = cookie ? JSON.parse(cookie) : defaultLivingRoom;
	// 	livingroom.lizard.observed = true;
	// 	event.cookies.set('gc_auxilliary_living_room', JSON.stringify(livingroom), {
	// 		path: PAGES['1_auxilliary_living_room']
	// 	});
	// 	return {};
	// }
};
