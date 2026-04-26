import type { Variant } from "./Variant";

export interface MerchItem {
	name: string;
	priceHigh: number;
	priceLow: number;
	imageSrc: string;
	id: string;
}

export interface MerchItemDetails {
	name: string;
	description: string;
	imageSrc: string;
	id: string;
	variants: Variant[];
}
