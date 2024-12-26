import { PAGES } from './ROUTES';
import { syncer } from './state';

export type Resume = {
	pathname: string;
};

const defaultResume: Resume = {
	pathname: PAGES._ROOT
};

export const resumeCookieName = 'gc_resume';

export const { sync: syncResume, delete: deleteResume } = syncer(
	resumeCookieName,
	defaultResume,
	PAGES._ROOT
);
