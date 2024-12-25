import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const timeSinceStart = Date.now() - new Date(2024, 11, 25, 12, 0, 0, 0).getTime();
	const hoursSinceStart = timeSinceStart / 1000 / 60 / 60;

	return {
		hoursSinceStart
	};
};
