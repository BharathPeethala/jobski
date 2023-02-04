import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Line from "./Line";
function JobDetails() {
	const [jobRoles, setJobRoles] = useState([]);
	const params = useParams();
	useEffect(() => {
		getData();
	}, []);
	const getData = async () => {
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
	return (
		<div className="container">
			<div className="Container">
				{jobRoles.map((role) => {
					if (role._id === `${params.id}`) {
						return (
							<div class="container">
								<center>
									<h2 class="Main-Headings">{role.ROLE}</h2>
								</center>
								<Line />
								<h2 class="Headings">DESCRIPTION</h2>
								<p>{role.DESCRIPTION}</p>
								<h2 class="Headings">RESPONSIBILTIES</h2>
								{role.RESPONSIBILITIES.map((res) => (
									<ul>
										<li>{res}</li>
									</ul>
								))}
								<h2 class="Headings">SKILLS</h2>
								{role.SKILLS.map((res) => (
									<ul>
										<li>{res}</li>
									</ul>
								))}
								<h2 class="Headings">SALARY</h2>
								<p>
									<b>{role.SALARY}</b>
								</p>
							</div>
						);
					}
				})}
			</div>
		</div>
	);
}

export default JobDetails;
