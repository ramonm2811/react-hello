import React from "react";
import PropTypes from "prop-types";

export const Jumbotron = ({ title, description, buttonURL, button }) => {
	return (
		<div className="container my-3">
			<div className="jumbotron">
				<h1 className="display-4">{title}</h1>
				<p className="lead">{description}</p>
				<a
					className="btn btn-primary btn-lg"
					href={buttonURL}
					role="button">
					{button}
				</a>
			</div>
		</div>
	);
};

Jumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	button: PropTypes.string,
	buttonURL: PropTypes.string
};
