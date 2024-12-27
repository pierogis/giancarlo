import { PAGES } from '../ROUTES';
import { syncer } from './common';

export type Resume = {
	version: number;
	pathname: string;
};

const defaultResume: Resume = {
	version: 0,
	pathname: PAGES._ROOT
};

export const resumeCookieName = 'gc_resume';

export const {
	get: getResume,
	update: updateResume,
	delete: deleteResume
} = syncer(resumeCookieName, defaultResume, {
	maxAge: 1000,
	path: PAGES._ROOT
});
