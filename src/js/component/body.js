import React from "react";
import Jumbotron from "./jumbotron";
import NavBar from "./navBar";
import Footer from "./footer";

const Body = () => {
	return (
		<>
			<NavBar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-6 col-lg-3">
						<Card className="card-img-top" />
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3">
						<Card className="card-img-top" />
						<img srx="http://www.pasarlascanutas.com/fondos%20de%20pantalla/campos_de_Ajalvir/campos_de_Ajalvir_320x240.JPG"></img>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3">
						<Card className="card-img-top" />
						<img srx="http://www.pasarlascanutas.com/fondos%20de%20pantalla/islas%20Bahamas/islas_Bahamas_320x240.JPG"></img>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3">
						<Card className="card-img-top" />
						<img srx="http://www.pasarlascanutas.com/fondos%20de%20pantalla/Arco_romano_Medinaceli/Arco_romano_Medinaceli_320x240.JPG"></img>
					</div>
				</div>
			</div>
		</>
	);
};

export default Body;
