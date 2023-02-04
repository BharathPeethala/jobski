import axios from "axios";
import React, { useEffect, useState } from "react";
import MiniCard from "./Components/MiniCard";
import Line from "./Components/Line";

function RoadMaps() {
	const [skillsRoadMaps, setSkillsRoadMaps] = useState([]);
	const [rolesRoadMaps, setRolesRoadMaps] = useState([]);
	useEffect(() => {
		getData();
	}, []);
	const getData = () => {
		axios
			.get("http://localhost:2000/skills-roadmaps")
			.then((response) => {
				console.log(response.data);
				setSkillsRoadMaps(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		axios
			.get("http://localhost:2000/roles-roadmaps")
			.then((response) => {
				console.log(response.data);
				setRolesRoadMaps(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="container">
			<div className="Container">
				<center>
					<h2 className="Main-Headings">ROADMAPS</h2>
				</center>
				<Line />
				<center>
					<h2 className="Headings">ROLE BASED ROADMAPS</h2>
				</center>
				<div class="row Container">
					{rolesRoadMaps.map((data) => (
						<MiniCard name={data.name} id={data._id} type="roles" />
					))}
				</div>
				<center>
					<h2 className="Headings">SKILLS BASED ROADMAPS</h2>
				</center>
				<div class="row Container">
					{skillsRoadMaps.map((data) => (
						<MiniCard name={data.name} id={data._id} type="skills" />
					))}
				</div>
			</div>
		</div>
	);
}

export default RoadMaps;
