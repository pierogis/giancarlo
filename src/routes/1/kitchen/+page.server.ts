import { syncKitchen } from './state';

import type { Actions, PageServerLoad } from './$types';
import { syncPlayer } from '$lib/player';

export const load: PageServerLoad = async (event) => {
	const kitchen = syncKitchen(event.cookies);

	return {
		kitchen
	};
};

export const actions: Actions = {
	observe: (event) => {
		syncKitchen(event.cookies, (kitchen) => {
			kitchen.observed = true;
			return kitchen;
		});
	},
	regardSink: (event) => {
		syncKitchen(event.cookies, (kitchen) => {
			kitchen.sink.regarded = true;
			return kitchen;
		});
	},
	regardRefridgerator: (event) => {
		syncKitchen(event.cookies, (kitchen) => {
			kitchen.refridgerator.regarded = true;
			return kitchen;
		});
	},
	openRefridgerator: (event) => {
		syncKitchen(event.cookies, (kitchen) => {
			kitchen.refridgerator.open = true;
			return kitchen;
		});
	},
	closeRefridgerator: (event) => {
		syncKitchen(event.cookies, (kitchen) => {
			kitchen.refridgerator.open = false;
			return kitchen;
		});
	},
	takeLettuce: (event) => {
		syncKitchen(event.cookies, (kitchen) => {
			kitchen.refridgerator.inventory.lettuce.raw -= 1;
			return kitchen;
		});
		syncPlayer(event.cookies, (player) => {
			player.inventory.lettuce.raw += 1;
			return player;
		});

		return {
			messages: ['You took a Raw Lettuce.']
		};
	},
	drinkBeer: (event) => {
		syncKitchen(event.cookies, (kitchen) => {
			kitchen.refridgerator.inventory.beer -= 1;
			return kitchen;
		});
		syncPlayer(event.cookies, (player) => {
			player.drunkenness += 1;
			return player;
		});

		return {
			messages: ['You drank a Beer.']
		};
	},

	// sink
	turnOnFaucet: (event) => {
		syncKitchen(event.cookies, (kitchen) => {
			kitchen.sink.faucetRunning = true;
			return kitchen;
		});
		return {
			messages: ['You turned on the Faucet.', "Giancarlo didn't like that."]
		};
	},
	turnOffFaucet: (event) => {
		syncKitchen(event.cookies, (kitchen) => {
			kitchen.sink.faucetRunning = false;
			return kitchen;
		});
		return {
			messages: ['You turned off the Faucet.', "Giancarlo didn't like that."]
		};
	},
	washLettuce: (event) => {
		syncPlayer(event.cookies, (player) => {
			player.inventory.lettuce.raw -= 1;
			player.inventory.lettuce.washed += 1;
			return player;
		});

		return {
			messages: ['You washed the Raw Lettuce']
		};
	},

	// sink
	chopLettuce: (event) => {
		syncPlayer(event.cookies, (player) => {
			player.inventory.lettuce.washed -= 1;
			player.inventory.lettuce.chopped += 1;
			return player;
		});

		return {
			messages: ['You chopped the Washed Lettuce']
		};
	}
};
