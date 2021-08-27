import React from "react";
import PropTypes from "prop-types";

export const Card = ({ info }) => {
	return (
		<div className="col-3">
			<div className="card">
				<img
					className="card-img-top"
					src="https://via.placeholder.com/500x325.png"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{info?.title}</h5>
					<p className="card-text">{info?.description}</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	info: PropTypes.object
};
