import React, { useContext, useState, useEffect } from "react";
import Line from "./Components/Line";
import Card from "./Components/Card";
import axios from "axios";
import { Context } from "./Config/Store";
function SuggestedRole() {
	let roleSet;
	const [roles, setRoles] = useContext(Context);
	const [jobRoles, setJobRoles] = useState([]);
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
	for (let index = 0; index < roles.length; index++) {
		roles[index] = roles[index].toUpperCase();
	}
	roleSet = new Set(roles);
	console.log(roles);
	return (
		<div class="container">
			<div class="Container">
				<h2 class="Headings">Suggested Job Roles</h2>
				<Line />
				<div class="row Container">
					{jobRoles.map((role) => {
						if (roleSet.has(role.ROLE)) {
							return (
								<Card
									name={role.ROLE}
									id={role._id}
									description={role.DESCRIPTION}
								/>
							);
						}
					})}
				</div>
			</div>
		</div>
	);
}

export default SuggestedRole;
