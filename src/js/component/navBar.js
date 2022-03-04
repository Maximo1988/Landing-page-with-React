import React from "react";

const NavBar = () => {
	return (
		<div className="container">
			<div className="container-fluid mt-0">
				<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark px-5">
					<a className="navbar-brand" href="#">
						Start Bootstrap
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className="justify-content-lg-end collapse navbar-collapse"
						id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									Home
									<span className="sr-only">(current)</span>
								</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="#">
									About
								</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="#">
									Services
								</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="#">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default NavBar;
