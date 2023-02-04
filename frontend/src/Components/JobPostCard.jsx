import React from "react";

function Card(props) {
	return (
		<div class="card JobCard col-12 col-6 col-md-4">
			<img class="card-img-top" src={props.logo} alt="company-logo" />
			<div class="card-body JobPostCardBody">
				<h5 class="card-title">
					<b>{props.company}</b>
				</h5>
				<p class="publisher">
					<b>Publisher: </b>
					{props.jobPublisher}
				</p>
				<p class="job_type">
					<b>Job Type: </b>
					{props.jobType}
				</p>
				<h4>{props.jobTitle}</h4>
				<p class="job_description">{props.description.slice(0, 200) + "..."}</p>

				<a href={props.jobLink} class="card-link" target="_blank">
					<button class="btn view-btn w-100">View</button>
				</a>
			</div>
		</div>
	);
}

export default Card;
