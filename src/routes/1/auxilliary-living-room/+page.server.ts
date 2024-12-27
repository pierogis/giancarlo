import { updateState } from '$lib/state';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		title: 'auxilliary living room',
		description:
			'After a long and arduous journey, you find yourself on the precipice of the Auxilliary Living Room.'
	};
};

export const actions: Actions = {
	regardLizard: (event) => {
		updateState(event.cookies, (state) => {
			state.auxilliaryLivingRoom.lizardZone.regarded = true;
			return state;
		});

		return {
			messages: ['You regard The Lizard']
		};
	}
};
