import { PAGES } from '$lib/ROUTES';
import { syncer } from '$lib/state';

export type Laboratory = {
	observed: boolean;
};

export const defaultLaboratory: Laboratory = {
	observed: false
};

const laboratoryCookieName = 'gc_laboratory';

export const { sync: syncLaboratory, delete: deleteLaboratory } = syncer(
	laboratoryCookieName,
	defaultLaboratory,
	PAGES['1_laboratory']
);
