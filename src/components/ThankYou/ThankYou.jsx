// import React from 'react';
import styles from "./ThankYou.module.css";

function ThankYou({ rating }) {
	return (
		<>
			<img
				className={styles.image}
				src="../../images/illustration-thank-you.svg"
				alt=""
			></img>
			<p className={styles.selection}>You selected {rating} out of 5</p>
			<div>
				<h1 style={{ textAlign: "center" }}>Thank You!</h1>
				<p className={styles.subtitle}>
					We appreciate you taking the time to give a rating. If you ever need
					more support, don&apos;t hesitate to get in touch!
				</p>
			</div>
		</>
	);
}

export default ThankYou;
