import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, url }) => {
	const statusView = (url.searchParams.get('statusView') || 'messages') as
		| 'messages'
		| 'player'
		| 'giancarlo';

	return {
		state: locals.state,
		statusView
	};
};
