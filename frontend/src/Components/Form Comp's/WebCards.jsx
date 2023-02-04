import React from "react";

function WebCards(props) {
	return (
		<div class="card Web-Card col-lg-3 col-md-4 col-6">
			<div class="card-body">
				<a href={props.link}>{props.name.toUpperCase()}</a>
			</div>
		</div>
	);
}

export default WebCards;
