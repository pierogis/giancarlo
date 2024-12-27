import { giancarloLocations, updateState } from '$lib/state';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		title: 'lizard zone',
		description:
			'Given the width of The Lizard, you calculate that he has been roasting for hours since he was turned on.. making it the witching hours for the cat.. ominous.'
	};
};

export const actions: Actions = {
	talkToLizard: (event) => {
		updateState(event.cookies, (state) => {
			state.auxilliaryLivingRoom.lizardZone.talkedTo = true;
			state.player.inventory.lizardAdvice += 1;
			return state;
		});
	},
	giveLizardLettuce: (event) => {
		updateState(event.cookies, (state) => {
			if (state.player.inventory.lettuce.chopped > 0) {
				state.auxilliaryLivingRoom.lizardZone.fed = true;
				state.player.inventory.lettuce.chopped -= 1;
				state.player.inventory.lizardAdvice += 1;
				state.giancarlo.happiness += 10;
			}
			return state;
		});

		return {
			messages: [
				'You feed The Lizard.',
				'Giancarlo really likes that.',
				'You put the Lizard Advice in your inventory.'
			]
		};
	},
	ignoreLizard: (event) => {
		updateState(event.cookies, (state) => {
			state.auxilliaryLivingRoom.lizardZone.ignored = true;
			state.giancarlo.happiness += 1;
			state.player.inventory.lizardAdvice += 1;

			const random = Math.floor(Math.random() * giancarloLocations.length);
			state.giancarlo.location = giancarloLocations[random];

			return state;
		});

		return {
			messages: [
				'You ignore The Lizard.',
				'Giancarlo likes that.',
				'You put the Lizard Advice in your inventory.'
			]
		};
	}
};
