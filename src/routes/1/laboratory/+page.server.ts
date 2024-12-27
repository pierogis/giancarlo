import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		title: 'laboratory of animal cruelty',
		description:
			'Through the years, the villagers have speculated on the devilish purpose of this lab.'
	};
};
