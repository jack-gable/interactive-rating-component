import styles from "./Icon.module.css";

function Icon() {
	return (
		<div className={styles.wrapper}>
			<img
				className={styles.icon}
				src="../../images/icon-star.svg"
				alt=""
			></img>
		</div>
	);
}

export default Icon;
