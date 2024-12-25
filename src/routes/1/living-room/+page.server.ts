import { syncLivingRoom } from './state';

import type { Actions, PageServerLoad } from './$types';
import { syncPlayer } from '$lib/player';

export const load: PageServerLoad = async (event) => {
	const livingRoom = syncLivingRoom(event.cookies);

	return {
		livingRoom
	};
};

export const actions: Actions = {
	observe: (event) => {
		syncLivingRoom(event.cookies, (livingRoom) => {
			livingRoom.observed = true;
			return livingRoom;
		});

		return {};
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

		return {};
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

		return {};
	},
	regardLizard: (event) => {
		syncLivingRoom(event.cookies, (livingRoom) => {
			livingRoom.lizardZone.regarded = true;
			return livingRoom;
		});

		return {};
	},
	regardChair: (event) => {
		syncLivingRoom(event.cookies, (livingRoom) => {
			livingRoom.chair.regarded = true;
			return livingRoom;
		});

		return {};
	},
	inspectRug: (event) => {
		syncLivingRoom(event.cookies, (livingRoom) => {
			livingRoom.rug.inspections += 1;
			return livingRoom;
		});

		return {};
	}
};
