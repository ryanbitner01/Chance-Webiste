import styles from "../styles/MerchDetailsSkeleton.module.scss";

const MerchDetailsSkeleton = () => {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<img className={styles.image}></img>
				<div className={styles.textLong} />
				<div className={styles.dividerShort} />

				<div className={styles.textLong} />
			</div>
			<div className="skeleton right">
				<div className={styles.textLong} />
				<div className={styles.dividerLong} />
				<div className={styles.textShort} />
				<div className={styles.dividerShort} />

				{Array.from({ length: 6 }).map((_, i) => (
					<div key={i} className={styles.textLong} />
				))}
			</div>
		</div>
	);
};

export default MerchDetailsSkeleton;
