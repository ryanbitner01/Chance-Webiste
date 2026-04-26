import type { Variant } from "@domain/entities/Variant";
import type { VariantOption } from "../components/VariantSelector/types";

export const getVariantOptions = (variants: Variant[]): VariantOption[] => {
	return Array.from(
		new Map(
			variants.map((v) => [v.name, { name: v.name, image: v.image }]),
		).values(),
	);
};

export const getSizesForName = (
	variants: Variant[],
	name: string,
): string[] => {
	return Array.from(
		new Set(variants.filter((v) => v.name === name).map((v) => v.size)),
	);
};

export const getSortedPrices = (variants: Variant[]): number[] => {
	return Array.from(new Set(variants.map((v) => v.price))).sort(
		(a, b) => a - b,
	);
};

export const getActiveVariant = (
	variants: Variant[],
	name: string,
	size: string,
): Variant | undefined => {
	return variants.find((v) => v.name === name && v.size === size);
};
