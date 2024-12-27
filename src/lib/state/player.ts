export type Emotions = {
	allergyResistance: number;
	drunkenness: number;
};
export type Inventory = {
	shoes: number;
	lizardAdvice: number;
	tweetyBirds: number;
	balls: number;
	crinkleFish: number;
	toothbrushes: number;
	lettuce: { raw: number; washed: number; chopped: number };
	gloves: number;
	giancarlo: number;
};
export type Player = {
	version: number;
	emotions: Emotions;
	inventory: Inventory;
};

export const defaultPlayer: Player = {
	version: 0,
	emotions: { allergyResistance: 0, drunkenness: 0 },
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
		},
		gloves: 1,
		giancarlo: 0
	}
};
