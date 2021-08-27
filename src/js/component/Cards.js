import React, { useState } from "react";
import { Card } from "./Card";

const sampleData = [
	{
		title: "First Card",
		description:
			"Some quick example text to build on the card title and make up the bulk of the cards content."
	},
	{
		title: "Another Card",
		description:
			"Some quick example text to build on the card title and make up the bulk of the cards content."
	},
	{
		title: "Third Card",
		description:
			"Some quick example text to build on the card title and make up the bulk of the cards content."
	},
	{
		title: "Awesome Card",
		description:
			"Some quick example text to build on the card title and make up the bulk of the cards content."
	}
];

export const Cards = () => {
	const [cards, setCards] = useState(sampleData);

	const switchCards = () => {
		setCards([]);
	};

	return (
		<div className="container mb-5">
			<div className="row">
				{cards.map((card, index) => {
					return <Card info={card} key={index}></Card>;
				})}
			</div>
		</div>
	);
};
