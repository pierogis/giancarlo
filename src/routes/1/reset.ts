import type { Cookies } from '@sveltejs/kit';
import { deleteAuxilliaryLivingRoom } from './auxilliary-living-room/state';
import { deleteBathroom } from './bathroom/state';
import { deleteDoor } from './door/state';
import { deleteHotel } from './auxilliary-living-room/hotel/state';
import { deleteKitchen } from './kitchen/state';
import { deleteLivingRoom } from './living-room/state';
import { deleteLaboratory } from './laboratory/state';
import { deleteLizardZone } from './auxilliary-living-room/lizard-zone/state';

export const deleteChapter1 = (cookies: Cookies) => {
	deleteAuxilliaryLivingRoom(cookies);
	deleteBathroom(cookies);
	deleteDoor(cookies);
	deleteHotel(cookies);
	deleteKitchen(cookies);
	deleteLaboratory(cookies);
	deleteLivingRoom(cookies);
	deleteLizardZone(cookies);
};
