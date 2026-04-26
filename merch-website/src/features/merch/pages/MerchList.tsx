import MerchListSkeleton from "@features/merch/components/MerchListSkeleton";
import styles from "../styles/MerchList.module.scss";

import ErrorComponent from "@shared/components/Error";
import MerchListCell from "@features/merch/components/MerchListCell";
import { useMerchList } from "@features/merch/hooks/useMerchList";

const MerchList = () => {
	const { data, isLoading, error } = useMerchList();

	if (isLoading) return <MerchListSkeleton />;
	if (error) return <ErrorComponent />;

	return (
		<>
			<h1 className={`rubik-bold ${styles.title}`}>Merch</h1>
			<div className={styles.items}>
				{data?.map(({ name, priceHigh, priceLow, imageSrc, id }) => (
					<MerchListCell
						name={name}
						priceRangeHigh={priceHigh}
						priceRangeLow={priceLow}
						imageSrc={imageSrc}
						id={id}
						key={id}></MerchListCell>
				))}
			</div>
		</>
	);
};

export default MerchList;
