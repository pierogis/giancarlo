import { PAGES } from '$lib/ROUTES';
import { syncer } from '$lib/state';

export type Kitchen = {
	observed: boolean;
	refridgerator: {
		regarded: boolean;
		open: boolean;
		inventory: {
			lettuce: { raw: number };
			beer: number;
		};
	};
	cuttingBoard: {
		regarded: boolean;
	};
	sink: {
		regarded: boolean;
		faucetRunning: boolean;
	};
	inventory: {
		knives: number;
	};
};
export const defaultKitchen: Kitchen = {
	observed: false,
	refridgerator: {
		regarded: false,
		open: false,
		inventory: {
			lettuce: { raw: 1 },
			beer: 7
		}
	},
	cuttingBoard: {
		regarded: false
	},
	sink: {
		regarded: false,
		faucetRunning: false
	},
	inventory: {
		knives: 1
	}
};

const kitchenCookieName = 'gc_kitchen';

export const syncKitchen = syncer(kitchenCookieName, defaultKitchen, PAGES['1_kitchen']);
