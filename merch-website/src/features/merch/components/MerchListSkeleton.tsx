import styles from "../styles/MerchListSkeleton.module.scss";

const MerchListSkeleton = () => {
	return (
		<div className={styles.items}>
			{Array.from({ length: 12 }).map((_, i) => (
				<div key={i} className={`${styles.skeleton} ${styles.card}`}>
					<div className={styles.image} />
					<div className={`${styles.text} ${styles.textLong}`} />
				</div>
			))}
		</div>
	);
};

export default MerchListSkeleton;
