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
							imagen= "http://www.pasarlascanutas.com/fondos%20de%20pantalla/campos_de_Ajalvir/campos_de_Ajalvir_320x240.JPG"
							titulo= "Postal 1"
							texto= "Some quick example text to build on the card title and make up the bulk of the cards content."
							button= "Find Out More!"
						/>
					</div>

					
					<div className="col-sm-12 col-md-6 col-lg-3">
						<Card
							imagen= "http://www.pasarlascanutas.com/fondos%20de%20pantalla/islas%20Bahamas/islas_Bahamas_320x240.JPG"
							titulo= "Postal 2"
							texto= "Some quick example text to build on the card title and make up the bulk of the cards content."
							button= "Find Out More!"
						/>
					</div>

					<div className="col-sm-12 col-md-6 col-lg-3">
						<Card
							imagen= "http://www.pasarlascanutas.com/fondos%20de%20pantalla/Arco_romano_Medinaceli/Arco_romano_Medinaceli_320x240.JPG"
							titulo= "Postal 3"
							texto= "Some quick example text to build on the card title and make up the bulk of the cards content."
							button= "Find Out More!"
						/>
					</div>

					<div className="col-sm-12 col-md-6 col-lg-3">
						<Card
							imagen= "https://101lugaresincreibles.com/wp-content/uploads/2009/05/paisajes-hermosos.jpg"
							titulo= "Postal 4"
							texto= "Some quick example text to build on the card title and make up the bulk of the cards content."
							button= "Find Out More!"
						/>	
					</div>
					
				</div>
			</div>
		</>
	);
};

export default Body;
