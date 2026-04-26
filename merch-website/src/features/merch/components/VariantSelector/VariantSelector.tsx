import type * as types from "./types";
import styles from "./VariantSelector.module.scss";

interface VariantSelectorParams {
	variants: types.VariantOption[];
	onSelect?: (id: string) => void;
	active?: string;
}

function VariantSelector({
	variants,
	onSelect,
	active,
}: VariantSelectorParams) {
	const handleItemSelected = (name: string) => {
		onSelect?.(name);
	};

	return (
		<div className={styles.container}>
			{variants.map(({ image, name }) => {
				const isActive = active === name;

				return (
					<div
						onClick={() => handleItemSelected(name)}
						className={`${styles.item} ${isActive ? styles.active : ""}`}
						key={name}>
						<img className={styles.image} src={image}></img>
						<h3 className={styles.label}>{name}</h3>
					</div>
				);
			})}
		</div>
	);
}

export default VariantSelector;
