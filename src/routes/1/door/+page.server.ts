import { syncDoor } from './state';

import type { Actions, PageServerLoad } from './$types';
import { syncPlayer } from '$lib/player';

export const load: PageServerLoad = async (event) => {
	const door = syncDoor(event.cookies);

	return {
		door
	};
};

export const actions: Actions = {
	takeOffShoes: (event) => {
		syncPlayer(event.cookies, (player) => {
			player.inventory.shoes -= 2;
			return player;
		});
		syncDoor(event.cookies, (door) => {
			door.inventory.shoes += 2;
			return door;
		});

		return {};
	},
	open: (event) => {
		syncDoor(event.cookies, (door) => {
			door.open = true;
			return door;
		});

		return {};
	},
	close: (event) => {
		syncDoor(event.cookies, (door) => {
			door.open = false;
			return door;
		});

		return {};
	},
	enter: (event) => {
		syncDoor(event.cookies, (door) => {
			door.entered = true;
			return door;
		});

		return {};
	},
	leave: (event) => {
		syncDoor(event.cookies, (door) => {
			door.entered = false;
			return door;
		});

		return {};
	},
	greet: (event) => {
		syncDoor(event.cookies, (door) => {
			door.greeted = true;
			return door;
		});

		return {};
	},
	regardDeadbolt: (event) => {
		syncDoor(event.cookies, (door) => {
			door.deadbolt.regarded = true;
			return door;
		});

		return {};
	},
	regardKnobLock: (event) => {
		syncDoor(event.cookies, (door) => {
			door.knobLock.regarded = true;
			return door;
		});

		return {};
	},
	tryDeadboltTeethUp: (event) => {
		syncDoor(event.cookies, (door) => {
			door.deadbolt.triedTeethUp = true;
			return door;
		});

		return {};
	},
	tryDeadboltTeethDown: (event) => {
		syncDoor(event.cookies, (door) => {
			door.deadbolt.triedTeethDown = true;
			return door;
		});

		return {};
	},
	tryKnobLockTeethUp: (event) => {
		syncDoor(event.cookies, (door) => {
			door.knobLock.triedTeethUp = true;
			return door;
		});

		return {};
	},
	tryKnobLockTeethDown: (event) => {
		syncDoor(event.cookies, (door) => {
			door.knobLock.triedTeethDown = true;
			door.locked = !door.locked;

			return door;
		});

		return {};
	}
};
