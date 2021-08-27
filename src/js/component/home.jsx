import React, { Fragment, useState } from "react";
import { NavBar } from "./NavBar";
import { Jumbotron } from "./Jumbotron.jsx";
import { Cards } from "./Cards";
import { Footer } from "./Footer";

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

const Home = () => {
	const [cards, setCards] = useState(sampleData);
	return (
		<>
			<NavBar></NavBar>
			<Jumbotron
				title={"A Warm Welcome"}
				description={"lorem wekjfnksjenflkesanfkjwenfdnasekdnfkjlwsn"}
			/>
			<Cards></Cards>
			<Footer
				icons={["facebook", "twitter", "instagram"]}
				copyright="Hola Mundo"
			/>
		</>
	);
};

export default Home;
