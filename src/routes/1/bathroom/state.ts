import { PAGES } from '$lib/ROUTES';
import { syncer } from '$lib/state';

export type Bathroom = {
	observed: boolean;
	pantry: {
		regarded: boolean;
		inventory: {
			zyrtec: number;
		};
	};
	cabinet: {
		regarded: boolean;
		inventory: {
			toothbrushes: number;
		};
	};
};
export const defaultBathroom: Bathroom = {
	observed: false,
	pantry: {
		regarded: false,
		inventory: {
			zyrtec: 50
		}
	},
	cabinet: {
		regarded: false,
		inventory: {
			toothbrushes: 1
		}
	}
};

const bathroomCookieName = 'gc_bathroom';

export const syncBathroom = syncer(bathroomCookieName, defaultBathroom, PAGES['1_bathroom']);
