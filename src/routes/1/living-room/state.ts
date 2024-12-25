import { PAGES } from '$lib/ROUTES';
import { syncer } from '$lib/state';

export type LivingRoom = {
	observed: boolean;
	inventory: {
		shoes: number;
	};
	chair: {
		regarded: boolean;
	};
	rug: {
		inspections: number;
	};
	lizardZone: {
		regarded: boolean;
	};
};

export const defaultLivingRoom: LivingRoom = {
	observed: false,
	inventory: {
		shoes: 5
	},
	chair: {
		regarded: false
	},
	rug: {
		inspections: 0
	},
	lizardZone: {
		regarded: false
	}
};

const livingRoomCookieName = 'gc_living_room';

export const syncLivingRoom = syncer(
	livingRoomCookieName,
	defaultLivingRoom,
	PAGES['1_living_room']
);
