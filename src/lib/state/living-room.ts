export type Chair = {
	regarded: boolean;
	sitting: boolean;
	ballsThrown: number;
	fishThrown: number;
};

export const defaultChair: Chair = {
	regarded: false,
	sitting: false,
	ballsThrown: 0,
	fishThrown: 0
};

export type LivingRoom = {
	observed: boolean;
	inventory: {
		shoes: number;
	};
	chair: Chair;
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
	chair: defaultChair,
	rug: {
		inspections: 0
	},
	lizardZone: {
		regarded: false
	}
};
