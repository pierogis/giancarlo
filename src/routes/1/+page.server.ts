import { getState, giancarloLocations, updateState } from '$lib/state';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		title: 'chapter i',
		description: 'Chapter I: The Doorway to the Soul'
	};
};

export const actions: Actions = {
	grabCat: async ({ cookies, request }) => {
		const data = await request.formData();
		const location = data.get('location');

		const state = getState(cookies);
		if (state.giancarlo.location === location) {
			const { player } = updateState(cookies, (state) => {
				let happinessBonus = 0;
				if (state.player.inventory.shoes < 1) {
					happinessBonus += 5;
				}

				happinessBonus += state.player.emotions.allergyResistance / 10;

				happinessBonus -= state.player.emotions.drunkenness;

				const caught = (state.giancarlo.happiness + happinessBonus + 50) / 100 > Math.random();

				state.giancarlo.happiness -= 10;
				if (caught) {
					state.player.inventory.giancarlo = 1;
					state.giancarlo.caught = true;
				} else {
					const random = Math.floor(Math.random() * giancarloLocations.length);
					state.giancarlo.location = giancarloLocations[random];
				}

				return state;
			});

			const messages = [];

			if (player.inventory.giancarlo > 0) {
				messages.push('You caught Giancarlo!');
			} else {
				messages.push('Giancarlo runs away');
			}

			return {
				messages
			};
		}
	},
	releaseCat: ({ cookies }) => {
		updateState(cookies, (state) => {
			state.giancarlo.happiness += 1;

			state.player.inventory.giancarlo = 0;
			state.giancarlo.caught = false;

			const random = Math.floor(Math.random() * giancarloLocations.length);
			state.giancarlo.location = giancarloLocations[random];

			return state;
		});

		const messages = ['Giancarlo likes that.', 'Giancarlo runs away.'];

		return {
			messages
		};
	},
	brushCatTeeth: ({ cookies }) => {
		updateState(cookies, (state) => {
			state.giancarlo.happiness -= 40;

			return state;
		});

		const messages = ["You brush Giancarlo's Teeth", 'Giancarlo hates that.'];

		return {
			messages
		};
	}
};
