import type { Variant } from "@/domain/entities/variant";

interface VariantSelectorParams {
	variants: Variant[];
}

function VariantSelector({ variants }: VariantSelectorParams) {
	return (
		<div>
			{variants.map(({ color, name, id }) => (
				<div key={id}>
					<div
						className="color-section"
						style={{ backgroundColor: color }}></div>
					<h3>{name}</h3>
				</div>
			))}
		</div>
	);
}

export default VariantSelector;
