export type Bathroom = {
	observed: boolean;
	inventory: {
		crinkleFish: number;
	};
	pantry: {
		regarded: boolean;
		inventory: {
			zyrtec: number;
		};
	};
	cabinet: {
		regarded: boolean;
		inventory: {
			toothbrushes: number;
		};
	};
};
export const defaultBathroom: Bathroom = {
	observed: false,
	inventory: {
		crinkleFish: 0
	},
	pantry: {
		regarded: false,
		inventory: {
			zyrtec: 50
		}
	},
	cabinet: {
		regarded: false,
		inventory: {
			toothbrushes: 1
		}
	}
};
