import type { Actions, PageServerLoad } from './$types';
import { syncAuxilliaryLivingRoom } from './state';

export const load: PageServerLoad = async (event) => {
	const auxilliaryLivingRoom = syncAuxilliaryLivingRoom(event.cookies);

	const timeSinceStart = Date.now() - new Date(2024, 11, 25, 12, 0, 0, 0).getTime();
	console.log(Date.now());
	console.log(new Date(2024, 12, 25, 12, 0, 0, 0).getTime());
	const hoursSinceStart = timeSinceStart / 1000 / 60 / 60;

	return {
		auxilliaryLivingRoom,
		hoursSinceStart
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
