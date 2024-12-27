import { PAGES } from '$lib/ROUTES';
import { defaultAuxilliaryLivingRoom, type AuxilliaryLivingRoom } from './auxilliary-living-room';
import { defaultLivingRoom, type LivingRoom } from './living-room';
import { syncer } from './common';
import { defaultDoorway, type Doorway } from './doorway';
import { defaultGiancarlo, type Giancarlo } from './giancarlo';
import { defaultPlayer, type Player } from './player';
import { defaultBathroom, type Bathroom } from './bathroom';
import { defaultKitchen, type Kitchen } from './kitchen';
import { defaultLaboratory, type Laboratory } from './laboratory';

export * from './auxilliary-living-room';
export * from './bathroom';
export * from './doorway';
export * from './giancarlo';
export * from './kitchen';
export * from './living-room';
export * from './player';
export * from './resume';

export type State = {
	version: number;
	player: Player;
	giancarlo: Giancarlo;
	doorway: Doorway;
	livingRoom: LivingRoom;
	auxilliaryLivingRoom: AuxilliaryLivingRoom;
	bathroom: Bathroom;
	kitchen: Kitchen;
	laboratory: Laboratory;
};

const defaultState: State = {
	version: 0,
	player: defaultPlayer,
	giancarlo: defaultGiancarlo,
	doorway: defaultDoorway,
	livingRoom: defaultLivingRoom,
	auxilliaryLivingRoom: defaultAuxilliaryLivingRoom,
	bathroom: defaultBathroom,
	kitchen: defaultKitchen,
	laboratory: defaultLaboratory
};

export const stateCookieName = 'gc';

export const {
	get: getState,
	update: updateState,
	delete: deleteState
} = syncer(stateCookieName, defaultState, {
	path: PAGES._ROOT,
	maxAge: 60 * 60 * 24 * 365 * 10
});
