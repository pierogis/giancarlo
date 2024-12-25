import { PAGES } from '$lib/ROUTES';
import { syncer } from '$lib/state';

export type Hotel = {
	inventory: {
		tweetyBirds: number;
		balls: number;
		crinkleFish: number;
	};
};

export const defaultHotel = {
	inventory: {
		tweetyBirds: 1,
		balls: 5,
		crinkleFish: 2
	}
};

const hotelCookieName = 'gc_hotel';

export const syncHotel = syncer(
	hotelCookieName,
	defaultHotel,
	PAGES['1_auxilliary_living_room_hotel']
);
