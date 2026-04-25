import "../styles/merch-list-cell.scss";

interface MerchCellProps {
	imageSrc: any;
	name: string;
	priceRangeLow: number;
	priceRangeHigh: number;
}

function MerchListCell({
	imageSrc,
	name,
	priceRangeHigh,
	priceRangeLow,
}: MerchCellProps) {
	return (
		<div>
			<img className="merch-image" src={imageSrc}></img>
			<h2>{name}</h2>
			{priceRangeHigh === priceRangeLow ? (
				<p className="price">{priceRangeLow}$</p>
			) : (
				<p className="price">
					{priceRangeLow}-{priceRangeHigh}$
				</p>
			)}
		</div>
	);
}

export default MerchListCell;
