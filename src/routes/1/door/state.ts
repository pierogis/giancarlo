import { PAGES } from '$lib/ROUTES';
import { syncer } from '$lib/state';

export type Door = {
	open: boolean;
	locked: boolean;
	entered: boolean;
	greeted: boolean;
	deadbolt: {
		regarded: boolean;
		triedTeethUp: boolean;
		triedTeethDown: boolean;
	};
	knobLock: {
		regarded: boolean;
		triedTeethUp: boolean;
		triedTeethDown: boolean;
	};
	inventory: {
		shoes: number;
	};
};

export const defaultDoor: Door = {
	open: false,
	locked: false,
	entered: false,
	greeted: false,
	deadbolt: {
		regarded: false,
		triedTeethUp: false,
		triedTeethDown: false
	},
	knobLock: {
		regarded: false,
		triedTeethUp: false,
		triedTeethDown: false
	},
	inventory: {
		shoes: 2
	}
};

export const doorCookieName = 'gc_door';

export const syncDoor = syncer(doorCookieName, defaultDoor, PAGES['1_door']);
