import styles from "../styles/SizeSelector.module.scss";

interface Props {
	sizes: string[];
	onSelect?: (name: string) => void;
	active?: string;
}

const SizeSelector = ({ sizes, active, onSelect }: Props) => {
	return (
		<>
			<div className={styles.header}>
				<h3 className={`rubik-bold ${styles.title}`}>size: </h3>
				<div className={styles.container}>
					{Array.from(sizes).map((name) => (
						<div
							key={name}
							onClick={() => onSelect?.(name)}
							className={`${styles.size} ${active === name ? styles.active : ""}`}>
							{name}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default SizeSelector;
