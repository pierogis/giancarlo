import { PAGES } from '$lib/ROUTES';
import { syncer } from '$lib/state';

export type AuxilliaryLivingRoom = {
	lizardZone: {
		regarded: boolean;
	};
};

export const defaultAuxilliaryLivingRoom: AuxilliaryLivingRoom = {
	lizardZone: {
		regarded: false
	}
};

const auxilliaryLivingRoomCookieName = 'gc_auxilliary_living_room';

export const syncAuxilliaryLivingRoom = syncer(
	auxilliaryLivingRoomCookieName,
	defaultAuxilliaryLivingRoom,
	PAGES['1_auxilliary_living_room']
);
