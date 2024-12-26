import { PAGES } from '$lib/ROUTES';
import { syncer } from '$lib/state';

export type LizardZone = {
	talkedTo: boolean;
	ignored: boolean;
};

export const defaultLizardZone: LizardZone = {
	talkedTo: false,
	ignored: false
};

const lizardZoneCookieName = 'gc_lizard_zone';

export const { sync: syncLizardZone, delete: deleteLizardZone } = syncer(
	lizardZoneCookieName,
	defaultLizardZone,
	PAGES['1_auxilliary_living_room_lizard_zone']
);
