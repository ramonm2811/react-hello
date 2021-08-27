import React from "react";
import PropTypes from "prop-types";

export const Footer = ({ icons, copyright }) => {
	return (
		<div className="container-fluid bg-dark">
			<footer className="row">
				<div className="col-12 d-flex justify-content-center text-white p-3">
					{icons.map((icon, index) => {
						return (
							<i
								key={index}
								className={`fab fa-${icon} fa-2x m-2`}></i>
						);
					})}
				</div>
				<div className="col-12 d-flex justify-content-center text-white p-3">
					{copyright}
				</div>
			</footer>
		</div>
	);
};

Footer.propTypes = {
	icons: PropTypes.array,
	copyright: PropTypes.string
};
