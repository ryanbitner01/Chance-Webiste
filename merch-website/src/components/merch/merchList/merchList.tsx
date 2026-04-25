import NavBar from "../../nav/nav";
import "./merchList.scss";
import MerchListCell from "./merchListCell/merchListCell";

interface MerchItem {
	name: string;
	priceHigh: number;
	priceLow: number;
	imageSrc: string;
}

const merchListItems: MerchItem[] = [
	{
		name: "Chanc3 T-Shirt",
		priceHigh: 12,
		priceLow: 8,
		imageSrc: "src/assets/shirt.jpg",
	},
	{
		name: "Chanc3 T-Shirt",
		priceHigh: 12,
		priceLow: 8,
		imageSrc: "src/assets/shirt.jpg",
	},
	{
		name: "Chanc3 T-Shirt",
		priceHigh: 12,
		priceLow: 8,
		imageSrc: "src/assets/shirt.jpg",
	},
	{
		name: "Chanc3 T-Shirt",
		priceHigh: 12,
		priceLow: 8,
		imageSrc: "src/assets/shirt.jpg",
	},
	{
		name: "Chanc3 T-Shirt",
		priceHigh: 12,
		priceLow: 8,
		imageSrc: "src/assets/shirt.jpg",
	},
];

function MerchList() {
	return (
		<>
			<NavBar></NavBar>
			<div className="content">
				<h1 className="rubik-bold">Merch</h1>
				<div className="items">
					{merchListItems.map((item) => (
						<MerchListCell
							name={item.name}
							priceRangeHigh={item.priceHigh}
							priceRangeLow={item.priceLow}
							imageSrc={item.imageSrc}></MerchListCell>
					))}
				</div>
			</div>
		</>
	);
}

export default MerchList;
