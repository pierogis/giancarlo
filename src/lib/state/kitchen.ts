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
		balls: number;
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
		knives: 1,
		balls: 3
	}
};
