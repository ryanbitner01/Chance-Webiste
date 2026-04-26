import { NavLink } from "react-router-dom";
import styles from "../styles/MerchListCell.module.scss";

interface MerchCellProps {
	imageSrc: any;
	name: string;
	priceRangeLow: number;
	priceRangeHigh: number;
	id: string;
}

function MerchListCell({
	imageSrc,
	name,
	priceRangeHigh,
	priceRangeLow,
	id,
}: MerchCellProps) {
	return (
		<NavLink className={styles.cardLink} to={`/merch/${id}`}>
			<img className={styles.image} src={imageSrc}></img>
			<h2>{name}</h2>
			{priceRangeHigh === priceRangeLow ? (
				<p className={styles.price}>{priceRangeLow}$</p>
			) : (
				<p className={styles.price}>
					{priceRangeLow}-{priceRangeHigh}$
				</p>
			)}
		</NavLink>
	);
}

export default MerchListCell;
