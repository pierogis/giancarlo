import type { Actions, PageServerLoad } from './$types';
import { syncAuxilliaryLivingRoom } from './state';

export const load: PageServerLoad = async (event) => {
	const auxilliaryLivingRoom = syncAuxilliaryLivingRoom(event.cookies);

	return {
		auxilliaryLivingRoom
	};
};

export const actions: Actions = {
	regardLizard: (event) => {
		syncAuxilliaryLivingRoom(event.cookies, (auxilliaryLivingRoom) => {
			auxilliaryLivingRoom.lizardZone.regarded = true;
			return auxilliaryLivingRoom;
		});

		return {};
	}
};
