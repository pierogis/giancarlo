import { PAGES } from './ROUTES';
import { syncer } from './state';

export type Inventory = {
	shoes: number;
	lizardAdvice: number;
	tweetyBirds: number;
	balls: number;
	crinkleFish: number;
	toothbrushes: number;
	lettuce: { raw: number; washed: number; chopped: number };
};
export type Player = {
	allergyResistance: number;
	drunkenness: number;
	inventory: Inventory;
};

export const defaultPlayer: Player = {
	allergyResistance: 0,
	drunkenness: 0,
	inventory: {
		shoes: 2,
		lizardAdvice: 0,
		tweetyBirds: 0,
		balls: 0,
		crinkleFish: 0,
		toothbrushes: 0,
		lettuce: {
			raw: 0,
			washed: 0,
			chopped: 0
		}
	}
};

export const playerCookieName = 'gc_player';

export const syncPlayer = syncer(playerCookieName, defaultPlayer, PAGES._ROOT);
