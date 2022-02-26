import React from "react";
import CardsContainer from "./cardsContainer";
import Jumbotron from "./jumbotron";
import NavBar from "./navBar";

const Body = () => {
	return (
		<>
			<NavBar />
			<Jumbotron />
			<CardsContainer />
		</>
	);
};

export default Body;
