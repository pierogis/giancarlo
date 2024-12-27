export type Giancarlo = {
	version: number;
	happiness: number;
	location: 'laboratory' | 'chair' | 'living room' | 'kitchen' | 'pantry' | 'lizard zone' | 'hotel';
	caught: boolean;
};

export const giancarloLocations = [
	'chair',
	'living room',
	'kitchen',
	'pantry',
	'lizard zone',
	'hotel'
] as const;

export const defaultGiancarlo: Giancarlo = {
	version: 0,
	happiness: 0,
	location: 'laboratory',
	caught: false
};
