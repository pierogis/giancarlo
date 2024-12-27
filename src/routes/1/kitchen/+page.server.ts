import { updateState } from '$lib/state';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		title: 'kitchen',
		description: 'A Kitchen could provide you or your companions with sustenance.'
	};
};

export const actions: Actions = {
	observe: ({ cookies }) => {
		updateState(cookies, (state) => {
			state.kitchen.observed = true;
			return state;
		});

		return {
			messages: ['You observe the Kitchen.']
		};
	},
	regardSink: ({ cookies }) => {
		updateState(cookies, (state) => {
			state.kitchen.sink.regarded = true;
			return state;
		});

		return {
			messages: ['You regard the Sink.']
		};
	},
	regardRefridgerator: ({ cookies }) => {
		updateState(cookies, (state) => {
			state.kitchen.refridgerator.regarded = true;
			return state;
		});

		return {
			messages: ['You regard the Refridgerator.']
		};
	},
	openRefridgerator: ({ cookies }) => {
		updateState(cookies, (state) => {
			state.kitchen.refridgerator.open = true;
			return state;
		});

		return {
			messages: ['You open the Refridgerator.']
		};
	},
	closeRefridgerator: ({ cookies }) => {
		updateState(cookies, (state) => {
			state.kitchen.refridgerator.open = false;
			return state;
		});

		return {
			messages: ['You close the Refridgerator.']
		};
	},
	takeLettuce: ({ cookies }) => {
		updateState(cookies, (state) => {
			state.kitchen.refridgerator.inventory.lettuce.raw -= 1;
			state.player.inventory.lettuce.raw += 1;
			return state;
		});

		return {
			messages: ['You take a Raw Lettuce.']
		};
	},
	drinkBeer: ({ cookies }) => {
		updateState(cookies, (state) => {
			state.kitchen.refridgerator.inventory.beer -= 1;
			state.player.emotions.drunkenness += 1;
			return state;
		});

		return {
			messages: ['You drink a Beer.']
		};
	},

	// sink
	turnOnFaucet: ({ cookies }) => {
		updateState(cookies, (state) => {
			state.kitchen.sink.faucetRunning = true;
			state.giancarlo.happiness -= 1;
			return state;
		});
		return {
			messages: ['You turn on the Faucet.', "Giancarlo doesn't like that."]
		};
	},
	turnOffFaucet: ({ cookies }) => {
		updateState(cookies, (state) => {
			state.kitchen.sink.faucetRunning = false;
			state.giancarlo.happiness -= 1;
			return state;
		});
		return {
			messages: ['You turn off the Faucet.', "Giancarlo doesn't like that."]
		};
	},
	washLettuce: ({ cookies }) => {
		updateState(cookies, (state) => {
			state.player.inventory.lettuce.raw -= 1;
			state.player.inventory.lettuce.washed += 1;
			return state;
		});

		return {
			messages: ['You wash the Raw Lettuce.']
		};
	},

	// sink
	chopLettuce: ({ cookies }) => {
		updateState(cookies, (state) => {
			state.player.inventory.lettuce.washed -= 1;
			state.player.inventory.lettuce.chopped += 1;
			return state;
		});

		return {
			messages: ['You chop the Washed Lettuce.']
		};
	},

	pickUpBall: (event) => {
		const { player } = updateState(event.cookies, (state) => {
			state.kitchen.inventory.balls -= 1;
			state.player.inventory.balls += 1;
			return state;
		});
		return {
			messages: [
				"You pick up 1-Inch ⌀ Ball. It's marked like a soccer ball.",
				`You now have ${player.inventory.balls} 1-Inch ⌀ Balls.`
			]
		};
	}
};
