import { syncBathroom } from './state';

import type { Actions, PageServerLoad } from './$types';
import { syncPlayer } from '$lib/player';

export const load: PageServerLoad = async (event) => {
	const bathroom = syncBathroom(event.cookies);

	return {
		bathroom
	};
};

export const actions: Actions = {
	observe: (event) => {
		syncBathroom(event.cookies, (bathroom) => {
			bathroom.observed = true;
			return bathroom;
		});
	},
	regardPantry: (event) => {
		syncBathroom(event.cookies, (bathroom) => {
			bathroom.pantry.regarded = true;
			return bathroom;
		});

		return {
			messages: ['You regarded the Pantry.']
		};
	},
	takeZyrtec: (event) => {
		const messages = [];

		syncBathroom(event.cookies, (bathroom) => {
			bathroom.pantry.inventory.zyrtec -= 1;
			return bathroom;
		});
		const player = syncPlayer(event.cookies, (player) => {
			player.allergyResistance += 1;
			return player;
		});

		messages.push('You popped a Zyrtec.');
		if (player.allergyResistance > 3 && player.allergyResistance < 8) {
			messages.push("Ok maybe that's enough Zyrtec.");
		} else if (player.allergyResistance === 8) {
			messages.push('Things are starting to get strange.');
		} else if (player.allergyResistance === 15) {
			messages.push('Things are getting stranger.');
		} else if (player.allergyResistance === 20) {
			messages.push('God rewards your bravery.');
			messages.push('You feel more in tune with the natural world.');
		}

		return {
			messages
		};
	},
	regardCabinet: (event) => {
		syncBathroom(event.cookies, (bathroom) => {
			bathroom.cabinet.regarded = true;
			return bathroom;
		});

		return {
			messages: ['You regarded the Cabinet.']
		};
	},
	grabToothbrush: (event) => {
		syncBathroom(event.cookies, (bathroom) => {
			bathroom.cabinet.inventory.toothbrushes -= 1;
			return bathroom;
		});
		syncPlayer(event.cookies, (player) => {
			player.inventory.toothbrushes += 1;
			return player;
		});

		return {
			messages: ['You grabbed the Thoroughly Exhausted Toothbrush.']
		};
	}
};
