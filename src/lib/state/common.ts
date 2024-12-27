import type { Cookies } from '@sveltejs/kit';

export interface Versioned {
	version: number;
}

export type Migrator<T extends Versioned> = (old: string) => T;

export const syncer = <T extends Versioned>(
	cookieName: string,
	defaultEntity: T,
	options: {
		path: string;
		maxAge?: number | undefined;
	},
	migrator: Migrator<T> = JSON.parse
) => {
	return {
		get: (cookies: Cookies) => {
			const cookie = cookies.get(cookieName);

			let prev: T;
			if (cookie) {
				prev = migrator(cookie);
			} else {
				prev = defaultEntity;
			}

			return prev;
		},
		update: (cookies: Cookies, updater?: (curr: T) => T) => {
			const cookie = cookies.get(cookieName);

			let prev: T;
			if (cookie) {
				prev = migrator(cookie);
			} else {
				prev = defaultEntity;
			}

			const curr = updater?.(prev) || prev;

			cookies.set(cookieName, JSON.stringify(curr), { maxAge: 60 * 60 * 24 * 1000, ...options });

			return curr;
		},
		delete: (cookies: Cookies) => {
			cookies.delete(cookieName, options);
		}
	};
};
