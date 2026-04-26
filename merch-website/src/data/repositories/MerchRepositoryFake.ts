import type { MerchItem, MerchItemDetails } from "@domain/entities/MerchItem";
import type { Variant } from "@domain/entities/Variant";
import type { MerchRepository } from "@domain/repositories/MerchRepository";

const loremIpsup =
	"Lorem ipsum dolor sit amet consectetur. Eu laoreet neque cras molestie mauris nisi vel cursus. Maecenas tempor donec ut nunc suspendisse vitae. Volutpat congue varius nisi sed ";

const variants: Variant[] = [
	// WHITE
	{
		id: "1-xs",
		name: "White",
		size: "XS",
		price: 8,
		image: "/src/assets/shirt.jpg",
	},
	{
		id: "1-s",
		name: "White",
		size: "S",
		price: 8,
		image: "/src/assets/shirt.jpg",
	},
	{
		id: "1-m",
		name: "White",
		size: "M",
		price: 9,
		image: "/src/assets/shirt.jpg",
	},

	{
		id: "1-xxl",
		name: "White",
		size: "XXL",
		price: 12,
		image: "/src/assets/shirt.jpg",
	},

	// RED
	{
		id: "2-xs",
		name: "Red",
		size: "XS",
		price: 8,
		image: "/src/assets/red-shirt.jpg",
	},
	{
		id: "2-s",
		name: "Red",
		size: "S",
		price: 8,
		image: "/src/assets/red-shirt.jpg",
	},
	{
		id: "2-m",
		name: "Red",
		size: "M",
		price: 9,
		image: "/src/assets/red-shirt.jpg",
	},

	{
		id: "2-xl",
		name: "Red",
		size: "XL",
		price: 11,
		image: "/src/assets/red-shirt.jpg",
	},
	{
		id: "2-xxl",
		name: "Red",
		size: "XXL",
		price: 12,
		image: "/src/assets/red-shirt.jpg",
	},

	// BLUE
	{
		id: "3-xs",
		name: "Blue",
		size: "XS",
		price: 8,
		image: "/src/assets/shirt.jpg",
	},
	{
		id: "3-s",
		name: "Blue",
		size: "S",
		price: 8,
		image: "/src/assets/shirt.jpg",
	},
	{
		id: "3-m",
		name: "Blue",
		size: "M",
		price: 9,
		image: "/src/assets/shirt.jpg",
	},
	{
		id: "3-l",
		name: "Blue",
		size: "L",
		price: 10,
		image: "/src/assets/shirt.jpg",
	},
	{
		id: "3-xl",
		name: "Blue",
		size: "XL",
		price: 11,
		image: "/src/assets/shirt.jpg",
	},
	{
		id: "3-xxl",
		name: "Blue",
		size: "XXL",
		price: 12,
		image: "/src/assets/shirt.jpg",
	},

	// GREEN
	{
		id: "4-xs",
		name: "Green",
		size: "XS",
		price: 12,
		image: "/src/assets/shirt.jpg",
	},
	{
		id: "4-s",
		name: "Green",
		size: "S",
		price: 12,
		image: "/src/assets/shirt.jpg",
	},
	{
		id: "4-m",
		name: "Green",
		size: "M",
		price: 13,
		image: "/src/assets/shirt.jpg",
	},
	{
		id: "4-l",
		name: "Green",
		size: "L",
		price: 14,
		image: "/src/assets/shirt.jpg",
	},
	{
		id: "4-xl",
		name: "Green",
		size: "XL",
		price: 15,
		image: "/src/assets/shirt.jpg",
	},
	{
		id: "4-xxl",
		name: "Green",
		size: "XXL",
		price: 16,
		image: "/src/assets/shirt.jpg",
	},
];
export class MerchRepositoryFake implements MerchRepository {
	private merchList: MerchItem[] = [
		{
			name: "Chanc3 T-Shirt",
			priceHigh: 8,
			priceLow: 8,
			imageSrc: "/src/assets/shirt.jpg",
			id: "1",
		},
		{
			name: "Chanc3 T-Shirt",
			priceHigh: 12,
			priceLow: 8,
			imageSrc: "/src/assets/shirt.jpg",
			id: "2",
		},
		{
			name: "Chanc3 T-Shirt",
			priceHigh: 12,
			priceLow: 8,
			imageSrc: "/src/assets/shirt.jpg",
			id: "3",
		},
		{
			name: "Chanc3 T-Shirt",
			priceHigh: 12,
			priceLow: 8,
			imageSrc: "/src/assets/shirt.jpg",
			id: "4",
		},
		{
			name: "Chanc3 T-Shirt",
			priceHigh: 12,
			priceLow: 8,
			imageSrc: "/src/assets/shirt.jpg",
			id: "5",
		},
	];

	private merchDetails: MerchItemDetails[] = [
		{
			name: "Chanc3 T-Shirt",
			description: loremIpsup,
			imageSrc: "/src/assets/shirt.jpg",
			id: "1",
			variants: variants,
		},
		{
			name: "Chanc3 T-Shirt",
			description: loremIpsup,

			imageSrc: "/src/assets/shirt.jpg",
			id: "2",
			variants: variants,
		},
		{
			name: "Chanc3 T-Shirt",
			description: loremIpsup,

			imageSrc: "/src/assets/shirt.jpg",
			id: "3",
			variants: variants,
		},
		{
			name: "Chanc3 T-Shirt",
			description: loremIpsup,

			imageSrc: "/src/assets/shirt.jpg",
			id: "4",
			variants: variants,
		},
		{
			name: "Chanc3 T-Shirt",
			description: loremIpsup,

			imageSrc: "/src/assets/shirt.jpg",
			id: "5",
			variants: variants,
		},
	];

	async getMerchList(): Promise<MerchItem[]> {
		return this.merchList;
	}
	async getMerchItemById(id: string): Promise<MerchItemDetails> {
		const item = this.merchDetails.find((i) => i.id === id);

		if (!item) {
			throw new Error("Can't find item");
		}

		return item;
	}
}
