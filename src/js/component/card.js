import React from "react";

const Card = (props) => {
	return (
		<div className="card">
			<img src={props.imagen} className="card-img-top" alt=""></img>
			<div className="card-body p-0">
				<h5 className="card-title pt-3 px-3 text-center">Card Title</h5>
				<p className="card-text p-3 text-center">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
				<div className="card-footer text-center">
					<button type="button" className="btn btn-primary">
						Find Out More!
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
