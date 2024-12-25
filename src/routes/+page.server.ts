import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const resumePathname = event.locals.resumePathname;

	return {
		resumePathname
	};
};
