import styles from "./Button.module.css";

function Button({ ...delegated }) {
	return (
		<>
			<button {...delegated} className={styles.btn}>
				Submit
			</button>
		</>
	);
}

export default Button;
