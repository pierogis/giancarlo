import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, url }) => {
	const statusView = (url.searchParams.get('statusView') || 'messages') as
		| 'messages'
		| 'player'
		| 'giancarlo';

	let happinessBonus = 0;
	if (locals.state.player.inventory.shoes < 1) {
		happinessBonus += 5;
	}
	happinessBonus += locals.state.player.emotions.allergyResistance / 10;
	happinessBonus -= locals.state.player.emotions.drunkenness;
	const giancarloCatchChance = (locals.state.giancarlo.happiness + happinessBonus + 25) / 100;

	return {
		state: locals.state,
		statusView,
		giancarloCatchPercentage: Math.round(giancarloCatchChance * 100)
	};
};
