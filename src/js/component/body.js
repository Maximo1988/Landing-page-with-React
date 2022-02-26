import React from "react";
import CardsContainer from "./cardsContainer";
import Jumbotron from "./jumbotron";
import NavBar from "./navBar";
import Footer from "./footer";

const Body = () => {
	return (
		<>
			<NavBar />
			<Jumbotron />
			<CardsContainer />
			<Footer />
		</>
	);
};

export default Body;
