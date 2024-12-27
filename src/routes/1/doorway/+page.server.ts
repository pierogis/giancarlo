import { updateState } from '$lib/state';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		title: 'Doorway to the Soul',
		description:
			'At the Doorway to the Soul you see a bag of ice salt, a welcome mat, and a doorway with two locks.'
	};
};

export const actions: Actions = {
	takeOffShoes: (event) => {
		updateState(event.cookies, (state) => {
			state.player.inventory.shoes -= 2;
			state.doorway.inventory.shoes += 2;
			return state;
		});

		return {
			messages: ['You take off Shoes.']
		};
	},
	putOnShoes: (event) => {
		updateState(event.cookies, (state) => {
			state.player.inventory.shoes += 2;
			state.doorway.inventory.shoes -= 2;
			return state;
		});

		return {
			messages: ['You put on Shoes.']
		};
	},
	open: (event) => {
		updateState(event.cookies, (state) => {
			state.doorway.open = true;
			return state;
		});
	},
	close: (event) => {
		updateState(event.cookies, (state) => {
			state.doorway.open = false;
			return state;
		});
	},
	enter: (event) => {
		updateState(event.cookies, (state) => {
			state.doorway.entered = true;
			return state;
		});
	},
	leave: (event) => {
		updateState(event.cookies, (state) => {
			state.doorway.entered = false;
			return state;
		});
	},
	greet: (event) => {
		updateState(event.cookies, (state) => {
			state.doorway.greeted = true;
			state.giancarlo.happiness -= 1;
			return state;
		});

		return {
			messages: ["Giancarlo doesn't like that."]
		};
	},
	regardDeadbolt: (event) => {
		updateState(event.cookies, (state) => {
			state.doorway.deadbolt.regarded = true;
			return state;
		});
	},
	regardKnobLock: (event) => {
		updateState(event.cookies, (state) => {
			state.doorway.knobLock.regarded = true;
			return state;
		});
	},
	tryDeadboltTeethUp: (event) => {
		updateState(event.cookies, (state) => {
			state.doorway.deadbolt.triedTeethUp = true;
			state.giancarlo.happiness -= 1;
			return state;
		});

		return { messages: ["The deadbolt sticks and won't turn.", "Giancarlo doesn't like that."] };
	},
	tryDeadboltTeethDown: (event) => {
		updateState(event.cookies, (state) => {
			state.doorway.deadbolt.triedTeethDown = true;
			state.giancarlo.happiness -= 1;
			return state;
		});

		return { messages: ["The key won't fit.", "Giancarlo doesn't like that."] };
	},
	tryKnobLockTeethUp: (event) => {
		updateState(event.cookies, (state) => {
			state.doorway.knobLock.triedTeethUp = true;
			state.giancarlo.happiness -= 1;
			return state;
		});

		return { messages: ["The key won't fit."] };
	},
	tryKnobLockTeethDown: (event) => {
		const { doorway } = updateState(event.cookies, (state) => {
			state.doorway.knobLock.triedTeethDown = true;
			state.giancarlo.happiness -= 1;
			state.doorway.locked = !state.doorway.locked;

			return state;
		});

		if (doorway.locked) {
			return {
				messages: [
					'The key fits and you lock the doorway. It was already unlocked.',
					"Giancarlo doesn't like that."
				]
			};
		} else {
			return {
				messages: ['The key fits and you unlock the doorway.', "Giancarlo doesn't like that."]
			};
		}
	}
};
