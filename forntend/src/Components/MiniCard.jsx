import React from "react";

function MiniCard(props) {
	return (
		<div class="card JobCard col-12 col-6 col-md-4">
			<div class="card-body">
				<h5 class="card-title">
					<a href={`/roadmaps/${props.type + "-" + props.id}`}>
						{props.name.toUpperCase()}
					</a>
				</h5>
			</div>
		</div>
	);
}

export default MiniCard;
