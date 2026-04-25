import NavBar from "../../nav/Nav";
import "../styles/MerchList.scss";
import MerchListCell from "../components/MerchListCell";
import type { MerchItem } from "@domain/entities/MerchItem";

const merchListItems: MerchItem[] = [
	{
		name: "Chanc3 T-Shirt",
		priceHigh: 8,
		priceLow: 8,
		imageSrc: "src/assets/shirt.jpg",
		id: "1",
	},
	{
		name: "Chanc3 T-Shirt",
		priceHigh: 12,
		priceLow: 8,
		imageSrc: "src/assets/shirt.jpg",
		id: "2",
	},
	{
		name: "Chanc3 T-Shirt",
		priceHigh: 12,
		priceLow: 8,
		imageSrc: "src/assets/shirt.jpg",
		id: "3",
	},
	{
		name: "Chanc3 T-Shirt",
		priceHigh: 12,
		priceLow: 8,
		imageSrc: "src/assets/shirt.jpg",
		id: "4",
	},
	{
		name: "Chanc3 T-Shirt",
		priceHigh: 12,
		priceLow: 8,
		imageSrc: "src/assets/shirt.jpg",
		id: "5",
	},
];

const MerchList = () => {
	return (
		<>
			<NavBar></NavBar>
			<div className="content">
				<h1 className="rubik-bold">Merch</h1>
				<div className="items">
					{merchListItems.map(({ name, priceHigh, priceLow, imageSrc, id }) => (
						<MerchListCell
							name={name}
							priceRangeHigh={priceHigh}
							priceRangeLow={priceLow}
							imageSrc={imageSrc}
							key={id}></MerchListCell>
					))}
				</div>
			</div>
		</>
	);
};

export default MerchList;
