import { syncLivingRoom } from './state';

import type { Actions, PageServerLoad } from './$types';
import { syncPlayer } from '$lib/player';

export const load: PageServerLoad = async (event) => {
	const livingRoom = syncLivingRoom(event.cookies);

	return {
		title: 'living room',
		livingRoom
	};
};

export const actions: Actions = {
	observe: (event) => {
		syncLivingRoom(event.cookies, (livingRoom) => {
			livingRoom.observed = true;
			return livingRoom;
		});
	},
	takeOffShoes: (event) => {
		syncPlayer(event.cookies, (player) => {
			player.inventory.shoes -= 2;
			return player;
		});
		syncLivingRoom(event.cookies, (livingRoom) => {
			livingRoom.inventory.shoes += 2;
			return livingRoom;
		});
	},
	putOnShoes: (event) => {
		syncPlayer(event.cookies, (player) => {
			player.inventory.shoes += 2;
			return player;
		});
		syncLivingRoom(event.cookies, (livingRoom) => {
			livingRoom.inventory.shoes -= 2;
			return livingRoom;
		});
	},
	regardLizard: (event) => {
		syncLivingRoom(event.cookies, (livingRoom) => {
			livingRoom.lizardZone.regarded = true;
			return livingRoom;
		});
	},
	regardChair: (event) => {
		syncLivingRoom(event.cookies, (livingRoom) => {
			livingRoom.chair.regarded = true;
			return livingRoom;
		});
	},
	inspectRug: (event) => {
		syncLivingRoom(event.cookies, (livingRoom) => {
			livingRoom.rug.inspections += 1;
			return livingRoom;
		});
	}
};
