export type Doorway = {
	version: number;
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

export const defaultDoorway: Doorway = {
	version: 0,
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
