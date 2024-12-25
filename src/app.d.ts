import type { Player } from '$lib/state';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			resumePathname: string | undefined;
			player: Player;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
