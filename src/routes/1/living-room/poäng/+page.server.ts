import { giancarloLocations, updateState } from '$lib/state';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		title: 'ikea poäng',
		description: `An IKEA POÄNG chair with navy blue cushion sits in the living room.`
	};
};

export const actions: Actions = {
	sit: ({ cookies }) => {
		updateState(cookies, (state) => {
			state.livingRoom.chair.sitting = true;
			return state;
		});
		return {
			messages: ['You sit in the IKEA POÄNG chair.']
		};
	},
	stand: ({ cookies }) => {
		updateState(cookies, (state) => {
			state.livingRoom.chair.sitting = false;
			return state;
		});
		return {
			messages: ['You stand up from the IKEA POÄNG chair.']
		};
	},
	callForCat: ({ cookies }) => {
		updateState(cookies, (state) => {
			state.giancarlo.happiness -= 1;

			if (state.giancarlo.location !== 'laboratory' && !state.giancarlo.caught) {
				const random = Math.floor(Math.random() * giancarloLocations.length);
				state.giancarlo.location = giancarloLocations[random];
			}

			return state;
		});
		return {
			messages: ['You call for the cat.', "Giancarlo doesn't like that."]
		};
	},
	regardItch: ({ cookies }) => {
		updateState(cookies, (state) => {
			state.livingRoom.chair.regarded = true;
			return state;
		});

		return {
			messages: ['You regard The Itch.']
		};
	},
	strikeBird: ({ cookies }) => {
		updateState(cookies, (state) => {
			state.giancarlo.happiness += 1;
			return state;
		});

		return {
			messages: [
				'You strike Tweety Bird.',
				'Tweety Bird chirps and writhes.',
				'Giancarlo likes that.'
			]
		};
	},
	throwBall: ({ cookies }) => {
		updateState(cookies, (state) => {
			state.livingRoom.chair.ballsThrown += 1;
			state.player.inventory.balls -= 1;
			state.giancarlo.happiness += 1;
			state.kitchen.inventory.balls += 1;
			return state;
		});

		return {
			messages: [
				'You throw 1-Inch ⌀ Ball.',
				'The ball bounces past the Laboratory of Animal Cruelty into the Kitchen.',
				'Giancarlo likes that.'
			]
		};
	},
	throwFish: ({ cookies }) => {
		updateState(cookies, (state) => {
			state.livingRoom.chair.fishThrown += 1;
			state.player.inventory.crinkleFish -= 1;
			state.giancarlo.happiness += 1;
			state.bathroom.inventory.crinkleFish += 1;
			return state;
		});

		return {
			messages: [
				'You throw Catnip–Infused Crinkle Fish.',
				'The fish ricochets off the bathroom door.',
				'Giancarlo likes that.'
			]
		};
	}
};
