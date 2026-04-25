import type { Variant } from "@domain/entities/variant";
import VariantSelector from "../components/VariantSelector";
const variants: Variant[] = [
	{
		name: "White",
		color: "#FFFF",
		id: "1",
	},
	{
		name: "Red",
		color: "#AA4646",
		id: "2",
	},

	{
		name: "Blue",
		color: "#3F74B6",
		id: "3",
	},

	{
		name: "Green",
		color: "#569E5F",
		id: "4",
	},
];

const MerchDetails = () => {
	return (
		<>
			<img></img>
			<VariantSelector variants={variants}></VariantSelector>
		</>
	);
};

export default MerchDetails;
