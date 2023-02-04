import axios from "axios";
import React, { useState } from "react";
import Line from "./Components/Line";
import FormTextInput from "./Components/Form Comp's/FormTextInput";
import JobPostCard from "./Components/JobPostCard";
function JobSearch() {
	const [apiData, setApiData] = useState([]);
	const startApi = async (event) => {
		event.preventDefault();
		const role = event.target["Job Role"].value;
		const city = event.target["City"].value;
		const country = event.target["Country"].value;
		console.log(role, city, country);
		const params = `${role} in ${city}, ${country}`;
		console.log(params);
		const options = {
			method: "GET",
			url: "https://jsearch.p.rapidapi.com/search",
			params: { query: `${role} in ${city}, ${country}`, num_pages: "3" },
			headers: {
				"X-RapidAPI-Key": "86a408d39bmsh8c59b6834f377f9p18e802jsnc60b2ecfbdd7",
				"X-RapidAPI-Host": "jsearch.p.rapidapi.com",
			},
		};
		// options.params = params;
		axios
			.request(options)
			.then(function (response) {
				console.log(response.data.data);
				setApiData(response.data.data);
			})
			.catch(function (error) {
				console.error(error);
			});
		console.log(apiData);
	};
	return (
		<div class="container">
			<form onSubmit={startApi} class="Container">
				<h2 class="Headings">Search for Jobs</h2>
				<Line />
				<div class="row">
					<div class="col">
						<FormTextInput name="Job Role" range="Enter the Job Role" />
					</div>
					<div class="col">
						<FormTextInput name="City" range="Enter the City" />
					</div>
					<div class="col">
						<FormTextInput name="Country" range="Enter the Country" />
					</div>
				</div>
				<div class="d-grid gap-2 col-6 mx-auto">
					<button class="btn  PredictButton" type="submit">
						SEARCH FOR JOBS
					</button>
				</div>
				<div class="row Container">
					{apiData.map((job) => (
						<JobPostCard
							logo={job.employer_logo}
							company={job.employer_name}
							company_link={job.employer_website}
							description={job.job_description}
							jobType={job.job_employment_type}
							jobPublisher={job.job_publisher}
							jobTitle={job.job_title}
							jobLink={job.job_apply_link}
						/>
					))}
				</div>
			</form>
		</div>
	);
}

export default JobSearch;
