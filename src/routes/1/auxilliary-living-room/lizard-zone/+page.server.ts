import { syncLizardZone } from './state';
import { syncPlayer } from '$lib/player';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const lizardZone = syncLizardZone(event.cookies);

	return {
		lizardZone
	};
};

export const actions: Actions = {
	talkToLizard: (event) => {
		syncLizardZone(event.cookies, (lizardZone) => {
			lizardZone.talkedTo = true;
			return lizardZone;
		});
		syncPlayer(event.cookies, (player) => {
			player.inventory.lizardAdvice += 1;
			return player;
		});
	},
	giveLizardLettuce: (event) => {
		syncPlayer(event.cookies, (player) => {
			if (player.inventory.lettuce.chopped > 0) {
				player.inventory.lettuce.chopped -= 1;
				player.inventory.lizardAdvice += 1;
			}
			return player;
		});

		return {
			messages: ['You put the Lizard Advice in your inventory.']
		};
	},
	ignoreLizard: (event) => {
		syncLizardZone(event.cookies, (lizardZone) => {
			lizardZone.ignored = true;
			return lizardZone;
		});
	}
};
