import React from "react";

export const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
			<div className="container">
				<a className="navbar-brand" href="#">
					React + Bootstrap
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse float-right"
					id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Features
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Pricing
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link disabled"
								href="#"
								aria-disabled="true">
								Disabled
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
