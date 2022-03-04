import React from "react";
import CardsContainer from "./cardsContainer";

const Jumbotron = () => {
	return (
		<div className="jumbotron bg-light grey px-5">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">
				All the Lorem Ipsum generators on the Internet tend to repeat
				predefined chunks as necessary, making this the first true
				generator on the Internet. It uses a dictionary of over 200
				Latin words, combined with a handful of model sentence
				structures, to generate Lorem Ipsum which looks reasonable.
			</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Call to Action!
			</a>
		</div>
	);
};

export default Jumbotron;
