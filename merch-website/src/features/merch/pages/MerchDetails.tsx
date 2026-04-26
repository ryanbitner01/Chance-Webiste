import { useMerchDetails } from "../hooks/useMerchDetails";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MerchDetailsSkeleton from "../components/MerchDetailsSkeleton";
import Error from "@shared/components/Error";
import {
	getActiveVariant,
	getSizesForName,
	getSortedPrices,
	getVariantOptions,
} from "@features/merch/utils/merch.utils";
import { useMediaQuery } from "@shared/hooks/useMediaQuery";
import MerchDetailsWeb from "./layouts/MerchDetailsWeb";
import MerchDetailsMobile from "./layouts/MerchDetailsMobile";

const MerchDetails = () => {
	const [activeName, setActiveName] = useState<string>("");
	const [activeSize, setActiveSize] = useState<string>("");

	const { id } = useParams();

	const isMobile = useMediaQuery(600);

	const { data, isLoading, error } = useMerchDetails(id ?? "");

	const variants = data?.variants ?? [];

	useEffect(() => {
		if (!variants.length) return;

		setActiveName(variants[0].name);
		setActiveSize(variants[0].size);
	}, [variants]);

	const variantOptions = getVariantOptions(variants);
	const sizes = getSizesForName(variants, activeName);
	const prices = getSortedPrices(variants);
	const activeVariant = getActiveVariant(variants, activeName, activeSize);

	if (!id) return <Error message="Product not found" />;

	if (isLoading) return <MerchDetailsSkeleton />;

	if (error) return <Error />;

	if (data) {
		const { imageSrc, name, description } = data;

		const getSizesForName = (name: string) =>
			variants.filter((v) => v.name === name).map((v) => v.size);

		const handleOnVariantSelect = (name: string) => {
			setActiveName(name);

			const sizes = getSizesForName(name);

			if (!sizes.includes(activeSize)) {
				setActiveSize(sizes[0] ?? "");
			}
		};

		const handleOnSizeSelect = (name: string) => {
			setActiveSize(name);
		};

		if (!isMobile) {
			return (
				<MerchDetailsWeb
					activeVariant={activeVariant}
					activeName={activeName}
					activeSize={activeSize}
					imageSrc={imageSrc}
					variantOptions={variantOptions}
					sizes={sizes}
					name={name}
					prices={prices}
					description={description}
					handleOnSizeSelect={handleOnSizeSelect}
					handleOnVariantSelect={handleOnVariantSelect}
				/>
			);
		} else {
			return (
				<MerchDetailsMobile
					activeVariant={activeVariant}
					activeName={activeName}
					activeSize={activeSize}
					imageSrc={imageSrc}
					variantOptions={variantOptions}
					sizes={sizes}
					name={name}
					prices={prices}
					description={description}
					handleOnSizeSelect={handleOnSizeSelect}
					handleOnVariantSelect={handleOnVariantSelect}
				/>
			);
		}
	}
};

export default MerchDetails;
