import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Rating from "./components/Rating/Rating";
import ThankYou from "./components/ThankYou/ThankYou";

function App() {
	const [rating, setRating] = useState(null);
	const [isSubmitted, setIsSubmitted] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		console.log(rating);
		setIsSubmitted(true);
	}

	return (
		<div className="wrapper">
			{isSubmitted ? (
				<Card>
					<ThankYou rating={rating} />
				</Card>
			) : (
				<Card>
					<Rating setRating={setRating} handleSubmit={handleSubmit} />
				</Card>
			)}
		</div>
	);
}

export default App;
