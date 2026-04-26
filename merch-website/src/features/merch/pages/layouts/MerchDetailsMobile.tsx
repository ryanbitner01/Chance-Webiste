import type { Variant } from "@domain/entities/Variant";
import styles from "../../styles/MerchDetailsMobile.module.scss";
import SizeSelector from "@features/merch/components/SizeSelector";
import VariantSelector from "@features/merch/components/VariantSelector/VariantSelector";
import type { VariantOption } from "@features/merch/components/VariantSelector/types";

interface props {
	activeVariant?: Variant;
	activeName?: string;
	activeSize?: string;
	imageSrc?: string;
	variantOptions: VariantOption[];
	sizes: string[];
	name: string;
	prices: number[];
	description: string;
	handleOnVariantSelect: (name: string) => void;
	handleOnSizeSelect: (name: string) => void;
}

const MerchDetailsMobile = ({
	activeVariant,
	activeName,
	imageSrc,
	activeSize,
	variantOptions,
	sizes,
	name,
	prices,
	description,
	handleOnVariantSelect,
	handleOnSizeSelect,
}: props) => {
	return (
		<div>
			<img
				className={styles.image}
				src={
					activeVariant && activeVariant.image ? activeVariant.image : imageSrc
				}></img>
			<h1 className={`rubik-bold ${styles.title}`}>{name}</h1>
			<h1 className={` ${styles.priceHeader} rubik-bold `}>
				{prices[0]}
				{prices.length > 1 ? `-${prices[prices.length - 1]}` : ""}$
			</h1>
			<VariantSelector
				onSelect={handleOnVariantSelect}
				active={activeName}
				variants={variantOptions}></VariantSelector>

			<SizeSelector
				onSelect={handleOnSizeSelect}
				active={activeSize ?? undefined}
				sizes={sizes}></SizeSelector>
			<p className={styles.description}>{description}</p>
			<div className={styles.footer}>
				<button className={`btn btn-secondary rubik-bold ${styles.buttonCta}`}>
					Add to Cart
					<div className={styles.priceCta}>{activeVariant?.price}$</div>
				</button>
			</div>
		</div>
	);
};

export default MerchDetailsMobile;
