import { syncHotel } from './state';

import type { Actions, PageServerLoad } from './$types';
import { syncPlayer } from '$lib/player';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async (event) => {
	const hotel = syncHotel(event.cookies);

	return {
		hotel
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
			syncHotel(cookies, (hotel) => {
				hotel.inventory.tweetyBirds -= 1;
				return hotel;
			});

			const player = syncPlayer(cookies, (player) => {
				player.inventory.tweetyBirds -= 1;
				return player;
			});

			return {
				messages: [
					'You picked up Tweety Bird.',
					"It's some kind of baby owl. Cruel, but effective.",
					`You now have ${player.inventory.balls} Tweety Birds.`
				]
			};
		} else if (item === 'ball') {
			syncHotel(cookies, (hotel) => {
				hotel.inventory.balls -= 1;
				return hotel;
			});

			const player = syncPlayer(cookies, (player) => {
				player.inventory.balls -= 1;
				return player;
			});

			return {
				messages: [
					'You picked up 1-Inch ⌀ Ball.',
					'Marked like a soccer ball.',
					`You now have ${player.inventory.balls} 1-Inch ⌀ Balls.`
				]
			};
		} else if (item === 'fish') {
			syncHotel(cookies, (hotel) => {
				hotel.inventory.crinkleFish -= 1;
				return hotel;
			});

			const player = syncPlayer(cookies, (player) => {
				player.inventory.crinkleFish -= 1;
				return player;
			});

			return {
				messages: [
					'You picked up Crinkle Fish.',
					'It is filled with catnip, but every throw diminishes its potency.',
					`You now have ${player.inventory.balls} Crinkle Fish.`
				]
			};
		}
	}
};
