/* eslint-disable */
/**
 * This file was generated by 'vite-plugin-kit-routes'
 *
 *      >> DO NOT EDIT THIS FILE MANUALLY <<
 */

/**
 * PAGES
 */
export const PAGES = {
	_ROOT: `/`,
	'0': `/0`,
	'1': `/1`,
	'1_auxilliary_living_room': `/1/auxilliary-living-room`,
	'1_auxilliary_living_room_hotel': `/1/auxilliary-living-room/hotel`,
	'1_auxilliary_living_room_lizard_zone': `/1/auxilliary-living-room/lizard-zone`,
	'1_bathroom': `/1/bathroom`,
	'1_door': `/1/door`,
	'1_kitchen': `/1/kitchen`,
	'1_laboratory': `/1/laboratory`,
	'1_living_room': `/1/living-room`,
	'1_living_room_poäng': `/1/living-room/poäng`,
	'2': `/2`
};

/**
 * SERVERS
 */
export const SERVERS = {};

/**
 * ACTIONS
 */
export const ACTIONS = {
	regardLizard_1_auxilliary_living_room: `/1/auxilliary-living-room?/regardLizard`,
	pickUp_1_auxilliary_living_room_hotel: `/1/auxilliary-living-room/hotel?/pickUp`,
	talkToLizard_1_auxilliary_living_room_lizard_zone: `/1/auxilliary-living-room/lizard-zone?/talkToLizard`,
	giveLizardLettuce_1_auxilliary_living_room_lizard_zone: `/1/auxilliary-living-room/lizard-zone?/giveLizardLettuce`,
	ignoreLizard_1_auxilliary_living_room_lizard_zone: `/1/auxilliary-living-room/lizard-zone?/ignoreLizard`,
	observe_1_bathroom: `/1/bathroom?/observe`,
	regardPantry_1_bathroom: `/1/bathroom?/regardPantry`,
	takeZyrtec_1_bathroom: `/1/bathroom?/takeZyrtec`,
	regardCabinet_1_bathroom: `/1/bathroom?/regardCabinet`,
	grabToothbrush_1_bathroom: `/1/bathroom?/grabToothbrush`,
	takeOffShoes_1_door: `/1/door?/takeOffShoes`,
	putOnShoes_1_door: `/1/door?/putOnShoes`,
	open_1_door: `/1/door?/open`,
	close_1_door: `/1/door?/close`,
	enter_1_door: `/1/door?/enter`,
	leave_1_door: `/1/door?/leave`,
	greet_1_door: `/1/door?/greet`,
	regardDeadbolt_1_door: `/1/door?/regardDeadbolt`,
	regardKnobLock_1_door: `/1/door?/regardKnobLock`,
	tryDeadboltTeethUp_1_door: `/1/door?/tryDeadboltTeethUp`,
	tryDeadboltTeethDown_1_door: `/1/door?/tryDeadboltTeethDown`,
	tryKnobLockTeethUp_1_door: `/1/door?/tryKnobLockTeethUp`,
	tryKnobLockTeethDown_1_door: `/1/door?/tryKnobLockTeethDown`,
	observe_1_kitchen: `/1/kitchen?/observe`,
	regardSink_1_kitchen: `/1/kitchen?/regardSink`,
	regardRefridgerator_1_kitchen: `/1/kitchen?/regardRefridgerator`,
	openRefridgerator_1_kitchen: `/1/kitchen?/openRefridgerator`,
	closeRefridgerator_1_kitchen: `/1/kitchen?/closeRefridgerator`,
	takeLettuce_1_kitchen: `/1/kitchen?/takeLettuce`,
	drinkBeer_1_kitchen: `/1/kitchen?/drinkBeer`,
	turnOnFaucet_1_kitchen: `/1/kitchen?/turnOnFaucet`,
	turnOffFaucet_1_kitchen: `/1/kitchen?/turnOffFaucet`,
	washLettuce_1_kitchen: `/1/kitchen?/washLettuce`,
	chopLettuce_1_kitchen: `/1/kitchen?/chopLettuce`,
	observe_1_living_room: `/1/living-room?/observe`,
	takeOffShoes_1_living_room: `/1/living-room?/takeOffShoes`,
	putOnShoes_1_living_room: `/1/living-room?/putOnShoes`,
	regardLizard_1_living_room: `/1/living-room?/regardLizard`,
	regardChair_1_living_room: `/1/living-room?/regardChair`,
	inspectRug_1_living_room: `/1/living-room?/inspectRug`
};

/**
 * LINKS
 */
export const LINKS = {};

type ParamValue = string | number | undefined;

/**
 * Append search params to a string
 */
export const appendSp = (
	sp?: Record<string, ParamValue | ParamValue[]>,
	prefix: '?' | '&' = '?'
) => {
	if (sp === undefined) return '';

	const params = new URLSearchParams();
	const append = (n: string, v: ParamValue) => {
		if (v !== undefined) {
			params.append(n, String(v));
		}
	};

	for (const [name, val] of Object.entries(sp)) {
		if (Array.isArray(val)) {
			for (const v of val) {
				append(name, v);
			}
		} else {
			append(name, val);
		}
	}

	const formatted = params.toString();
	if (formatted) {
		return `${prefix}${formatted}`;
	}
	return '';
};

/**
 * get the current search params
 *
 * Could be use like this:
 * ```
 * route("/cities", { page: 2 }, { ...currentSP() })
 * ```
 */
export const currentSp = () => {
	const params = new URLSearchParams(window.location.search);
	const record: Record<string, string> = {};
	for (const [key, value] of params.entries()) {
		record[key] = value;
	}
	return record;
};

/**
 * Add this type as a generic of the vite plugin `kitRoutes<KIT_ROUTES>`.
 *
 * Full example:
 * ```ts
 * import type { KIT_ROUTES } from '$lib/ROUTES'
 * import { kitRoutes } from 'vite-plugin-kit-routes'
 *
 * kitRoutes<KIT_ROUTES>({
 *  PAGES: {
 *    // here, key of object will be typed!
 *  }
 * })
 * ```
 */
export type KIT_ROUTES = {
	PAGES: {
		_ROOT: never;
		'0': never;
		'1': never;
		'1_auxilliary_living_room': never;
		'1_auxilliary_living_room_hotel': never;
		'1_auxilliary_living_room_lizard_zone': never;
		'1_bathroom': never;
		'1_door': never;
		'1_kitchen': never;
		'1_laboratory': never;
		'1_living_room': never;
		'1_living_room_poäng': never;
		'2': never;
	};
	SERVERS: Record<string, never>;
	ACTIONS: {
		regardLizard_1_auxilliary_living_room: never;
		pickUp_1_auxilliary_living_room_hotel: never;
		talkToLizard_1_auxilliary_living_room_lizard_zone: never;
		giveLizardLettuce_1_auxilliary_living_room_lizard_zone: never;
		ignoreLizard_1_auxilliary_living_room_lizard_zone: never;
		observe_1_bathroom: never;
		regardPantry_1_bathroom: never;
		takeZyrtec_1_bathroom: never;
		regardCabinet_1_bathroom: never;
		grabToothbrush_1_bathroom: never;
		takeOffShoes_1_door: never;
		putOnShoes_1_door: never;
		open_1_door: never;
		close_1_door: never;
		enter_1_door: never;
		leave_1_door: never;
		greet_1_door: never;
		regardDeadbolt_1_door: never;
		regardKnobLock_1_door: never;
		tryDeadboltTeethUp_1_door: never;
		tryDeadboltTeethDown_1_door: never;
		tryKnobLockTeethUp_1_door: never;
		tryKnobLockTeethDown_1_door: never;
		observe_1_kitchen: never;
		regardSink_1_kitchen: never;
		regardRefridgerator_1_kitchen: never;
		openRefridgerator_1_kitchen: never;
		closeRefridgerator_1_kitchen: never;
		takeLettuce_1_kitchen: never;
		drinkBeer_1_kitchen: never;
		turnOnFaucet_1_kitchen: never;
		turnOffFaucet_1_kitchen: never;
		washLettuce_1_kitchen: never;
		chopLettuce_1_kitchen: never;
		observe_1_living_room: never;
		takeOffShoes_1_living_room: never;
		putOnShoes_1_living_room: never;
		regardLizard_1_living_room: never;
		regardChair_1_living_room: never;
		inspectRug_1_living_room: never;
	};
	LINKS: Record<string, never>;
	Params: Record<string, never>;
};
