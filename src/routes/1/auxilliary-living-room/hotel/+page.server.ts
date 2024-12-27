import { fail } from '@sveltejs/kit';

import { updateState } from '$lib/state';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		title: 'hotel',
		description: 'You approach the shabby looking cardboard boxes in the Auxilliary Living Room.'
	};
};

export const actions: Actions = {
	pickUp: async ({ cookies, request }) => {
		const data = await request.formData();

		const item = data.get('item');

		if (item !== 'bird' && item !== 'ball' && item !== 'fish') {
			return fail(400, { item });
		}
		if (item === 'bird') {
			const { player } = updateState(cookies, (state) => {
				state.auxilliaryLivingRoom.hotel.inventory.tweetyBirds -= 1;
				state.player.inventory.tweetyBirds += 1;
				return state;
			});

			return {
				messages: [
					"You pick up Tweety Bird. It's some kind of baby owl. Cruel, but effective.",
					`You now have ${player.inventory.balls} Tweety Birds.`
				]
			};
		} else if (item === 'ball') {
			const { player } = updateState(cookies, (state) => {
				state.auxilliaryLivingRoom.hotel.inventory.balls -= 1;
				state.player.inventory.balls += 1;
				return state;
			});

			return {
				messages: [
					"You pick up 1-Inch ⌀ Ball. It's marked like a soccer ball.",
					`You now have ${player.inventory.balls} 1-Inch ⌀ Balls.`
				]
			};
		} else if (item === 'fish') {
			const { player } = updateState(cookies, (state) => {
				state.auxilliaryLivingRoom.hotel.inventory.crinkleFish -= 1;
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
	}
};
