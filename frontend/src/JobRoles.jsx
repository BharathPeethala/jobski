import React, { useState, useEffect } from "react";
import axios from "axios";
import Line from "./Components/Line";
import Card from "./Components/Card";

function JobRoles() {
	const [jobRoles, setJobRoles] = useState([]);
	useEffect(() => {
		getData();
	}, []);
	const getData = () => {
		axios
			.get("http://localhost:2000/api")
			.then((response) => {
				console.log(response.data);
				setJobRoles(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	console.log(jobRoles);
	return (
		<div class="container">
			<div class="Container">
				<center>
					<h2 class="Main-Headings">JOB ROLES</h2>
				</center>
				<Line />
				<div class="row Container">
					{jobRoles.map((data) => (
						<Card
							name={data.ROLE}
							description={data.DESCRIPTION}
							id={data._id}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default JobRoles;
