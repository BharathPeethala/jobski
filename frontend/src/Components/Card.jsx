import React from "react";
import { useNavigate } from "react-router-dom";
function Card(props) {
	const navigate = useNavigate();
	function display() {
		navigate(`/job-roles/${props.id}`);
	}
	return (
		<div class="card JobCard col-12 col-6 col-md-4">
			<div class="card-body">
				<h5 class="card-title">{props.name}</h5>
				<p class="card-text">{props.description.slice(0, 200) + "..."}</p>
				<div class="d-grid gap-2 col-12 mx-auto">
					<button class="btn btn-primary view-btn" onClick={display}>
						View
					</button>
				</div>
			</div>
		</div>
	);
}

export default Card;
