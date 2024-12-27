export type Hotel = {
	inventory: {
		tweetyBirds: number;
		balls: number;
		crinkleFish: number;
	};
};

export const defaultHotel: Hotel = {
	inventory: {
		tweetyBirds: 1,
		balls: 5,
		crinkleFish: 2
	}
};

export type LizardZone = {
	regarded: boolean;
	talkedTo: boolean;
	fed: boolean;
	ignored: boolean;
};

export const defaultLizardZone: LizardZone = {
	regarded: false,
	talkedTo: false,
	fed: false,
	ignored: false
};

export type AuxilliaryLivingRoom = {
	lizardZone: LizardZone;
	hotel: Hotel;
};

export const defaultAuxilliaryLivingRoom: AuxilliaryLivingRoom = {
	lizardZone: defaultLizardZone,
	hotel: defaultHotel
};
