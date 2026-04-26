import type { Variant } from "@domain/entities/Variant";
import styles from "../../styles/MerchDetailsWeb.module.scss";
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

const MerchDetailsWeb = ({
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
		<div className={styles.container}>
			<div className={styles.left}>
				<img
					className={styles.image}
					src={
						activeVariant && activeVariant.image
							? activeVariant.image
							: imageSrc
					}></img>
				<VariantSelector
					onSelect={handleOnVariantSelect}
					active={activeName}
					variants={variantOptions}></VariantSelector>
				<SizeSelector
					onSelect={handleOnSizeSelect}
					active={activeSize ?? undefined}
					sizes={sizes}></SizeSelector>
			</div>
			<div className={styles.right}>
				<div className={styles.title}>
					<h1 className="rubik-bold">{name}</h1>
					<h1 className={` ${styles.priceHeader} rubik-bold `}>
						{prices[0]}
						{prices.length > 1 ? `-${prices[prices.length - 1]}` : ""}$
					</h1>
				</div>
				<button className="btn btn-secondary rubik-bold">
					Add to Cart
					<div className={styles.priceCta}>{activeVariant?.price}$</div>
				</button>
				<p className={styles.description}>{description}</p>
			</div>
		</div>
	);
};

export default MerchDetailsWeb;
