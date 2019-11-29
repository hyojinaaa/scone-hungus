// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export interface Scone {
	placeName: string
	placeAddress: string
	image: string
	rating: number
	flavour?: string
	note: string
}
