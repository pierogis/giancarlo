import { updateState } from '$lib/state';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		title: 'living room',
		description: `In the Living Room, the first thing you notice is the Couch of One Thousand Pulled Threads. While it's not visible, you sense a Terrible Aura Omitted from the Rug beneath the Couch.`
	};
};

export const actions: Actions = {
	observe: (event) => {
		updateState(event.cookies, (state) => {
			state.livingRoom.observed = true;
			return state;
		});

		return {
			messages: ['You observe the Living Room.']
		};
	},
	takeOffShoes: (event) => {
		updateState(event.cookies, (state) => {
			state.player.inventory.shoes -= 2;
			state.livingRoom.inventory.shoes += 2;
			return state;
		});

		return {
			messages: ['You put on Shoes.']
		};
	},
	putOnShoes: (event) => {
		updateState(event.cookies, (state) => {
			state.player.inventory.shoes += 2;
			state.livingRoom.inventory.shoes -= 2;
			return state;
		});

		return {
			messages: ['You take off Shoes.']
		};
	},
	regardLizard: (event) => {
		updateState(event.cookies, (state) => {
			state.livingRoom.lizardZone.regarded = true;
			return state;
		});

		return {
			messages: ['You regard the Lizard Zone.']
		};
	},
	regardChair: (event) => {
		updateState(event.cookies, (state) => {
			state.livingRoom.chair.regarded = true;
			return state;
		});

		return {
			messages: ['You regard the IKEA POÄNG chair.']
		};
	},
	inspectRug: (event) => {
		updateState(event.cookies, (state) => {
			state.livingRoom.rug.inspections += 1;
			return state;
		});

		return {
			messages: ['You inspect the rug. Something seems off about it.']
		};
	}
};
