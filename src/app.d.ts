import type { State } from '$lib/state';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			resumePathname: string | undefined;
			state: State;
		}
		interface PageData {
			title?: string;
			description?: string;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
