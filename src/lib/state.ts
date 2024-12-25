import type { Cookies } from '@sveltejs/kit';

export const syncer = <T>(cookieName: string, defaultEntity: T, path: string) => {
	return (cookies: Cookies, updater?: (curr: T) => T) => {
		const cookie = cookies.get(cookieName);
		const prev: T = cookie ? JSON.parse(cookie) : defaultEntity;

		const curr = updater?.(prev) || prev;

		cookies.set(cookieName, JSON.stringify(curr), {
			path
		});

		return curr;
	};
};
