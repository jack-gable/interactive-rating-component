// import React from "react";
import styles from "./Rating.module.css";

import Icon from "../Icon/Icon";
import Button from "../Button/Button";

function Rating({ setRating, handleSubmit }) {
	return (
		<>
			<Icon />
			<div>
				<h1>How did we do?</h1>
				<p className={styles.subtitle}>
					Please let us know how we did with your support request. All feedback
					is appreciated to help us improve our offering!
				</p>
			</div>
			<form onSubmit={handleSubmit}>
				<fieldset className={styles.form}>
					<input
						type="button"
						name="rating"
						id="rating-1"
						className={styles.btn}
						value="1"
						onClick={(event) => {
							setRating(event.target.value);
						}}
					/>
					<input
						type="button"
						name="rating"
						id="rating-2"
						className={styles.btn}
						value="2"
						onClick={(event) => {
							setRating(event.target.value);
						}}
					/>
					<input
						type="button"
						name="rating"
						id="rating-3"
						className={styles.btn}
						value="3"
						onClick={(event) => {
							setRating(event.target.value);
						}}
					/>
					<input
						type="button"
						name="rating"
						id="rating-4"
						className={styles.btn}
						value="4"
						onClick={(event) => {
							setRating(event.target.value);
						}}
					/>
					<input
						type="button"
						name="rating"
						id="rating-5"
						className={styles.btn}
						value="5"
						onClick={(event) => {
							setRating(event.target.value);
						}}
					/>
				</fieldset>
				<Button type="submit" />
			</form>
		</>
	);
}

export default Rating;
