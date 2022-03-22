import React from "react";
import Jumbotron from "./jumbotron";
import Card from "./card";

const Body = () => {
	return (
		<>
			<Jumbotron />

			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-6 col-lg-3">
						<Card
							imagen="https://t1.ev.ltmcdn.com/es/posts/9/2/0/los_10_paisajes_mas_bonitos_de_espana_1029_orig.jpg"
							titulo="Postal 1"
							texto="Some quick example text to build on the card title and make up the bulk of the cards content."
							button="Find Out More!"
						/>
					</div>

					<div className="col-sm-12 col-md-6 col-lg-3">
						<Card
							imagen="https://t1.ev.ltmcdn.com/es/posts/9/2/0/torcal_de_antequera_1029_3_orig.jpg"
							titulo="Postal 2"
							texto="Some quick example text to build on the card title and make up the bulk of the cards content."
							button="Find Out More!"
						/>
					</div>

					<div className="col-sm-12 col-md-6 col-lg-3">
						<Card
							imagen="https://i.blogs.es/e32e91/trucos-enfocar-fotografia-paisaje-01/1366_2000.jpg"
							titulo="Postal 3"
							texto="Some quick example text to build on the card title and make up the bulk of the cards content."
							button="Find Out More!"
						/>
					</div>

					<div className="col-sm-12 col-md-6 col-lg-3">
						<Card
							imagen="https://101lugaresincreibles.com/wp-content/uploads/2009/05/paisajes-hermosos.jpg"
							titulo="Postal 4"
							texto="Some quick example text to build on the card title and make up the bulk of the cards content."
							button="Find Out More!"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Body;
