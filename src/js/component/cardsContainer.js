import React from "react";
import Card from "./card";

const CardsContainer = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-12 col-md-6 col-lg-3">
					<Card />
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3">
					<Card />
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3">
					<Card />
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3">
					<Card />
				</div>
			</div>
		</div>
	);
};

export default CardsContainer;
