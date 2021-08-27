import React from "react";
import PropTypes from "prop-types";

export const Jumbotron = ({ title, description }) => {
	return (
		<div className="container my-3">
			<div className="jumbotron">
				<h1 className="display-4">{title}</h1>
				<p className="lead">{description}</p>
				<hr className="my-4" />
				<p>
					It uses utility classes for typography and spacing to space
					content out within the larger container.
				</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Learn more
				</a>
			</div>
		</div>
	);
};

Jumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string
};
