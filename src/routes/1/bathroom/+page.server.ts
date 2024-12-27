import { updateState } from '$lib/state';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		title: 'bathroom',
		description: 'BATHROOM PLACEHOLDER TEXT'
	};
};

export const actions: Actions = {
	observe: (event) => {
		updateState(event.cookies, (state) => {
			state.bathroom.observed = true;
			return state;
		});

		return {
			messages: ['You observe the Bathroom.']
		};
	},
	regardPantry: (event) => {
		updateState(event.cookies, (state) => {
			state.bathroom.pantry.regarded = true;
			return state;
		});

		return {
			messages: ['You regard the Pantry.']
		};
	},
	takeZyrtec: (event) => {
		const messages = [];

		const { player } = updateState(event.cookies, (state) => {
			state.bathroom.pantry.inventory.zyrtec -= 1;
			state.player.emotions.allergyResistance += 1;
			return state;
		});

		messages.push('You popped a Zyrtec.');
		if (player.emotions.allergyResistance > 3 && player.emotions.allergyResistance < 8) {
			messages.push("Ok maybe that's enough Zyrtec.");
		} else if (player.emotions.allergyResistance === 8) {
			messages.push('Things are starting to get strange.');
		} else if (player.emotions.allergyResistance === 15) {
			messages.push('Things are getting stranger.');
		} else if (player.emotions.allergyResistance === 20) {
			messages.push('God rewards your bravery.');
			messages.push('You feel more in tune with the natural world.');
		}

		return {
			messages
		};
	},
	regardCabinet: (event) => {
		updateState(event.cookies, (state) => {
			state.bathroom.cabinet.regarded = true;
			return state;
		});

		return {
			messages: ['You regard the Cabinet.']
		};
	},
	grabToothbrush: (event) => {
		updateState(event.cookies, (state) => {
			state.bathroom.cabinet.inventory.toothbrushes -= 1;
			state.player.inventory.toothbrushes += 1;
			return state;
		});

		return {
			messages: ['You grab the Thoroughly Exhausted Toothbrush.']
		};
	},
	pickUpFish: (event) => {
		const { player } = updateState(event.cookies, (state) => {
			state.bathroom.inventory.crinkleFish -= 1;
			state.player.inventory.crinkleFish += 1;
			return state;
		});

		return {
			messages: [
				'You pick up Catnip–Infused Crinkle Fish. It is filled with catnip, but every throw diminishes its potency.',
				`You now have ${player.inventory.crinkleFish} Catnip–Infused Crinkle Fish.`
			]
		};
	}
};
