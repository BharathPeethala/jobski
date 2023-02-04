import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Buffer } from "buffer";
function RoadMapDetail(props) {
	const [details, setDetails] = useState([]);
	const params = useParams();
	let res = params.id.split("-");
	console.log(res[0], res[1]);
	useEffect(() => {
		getData();
	}, []);
	const getData = async () => {
		axios
			.get(`http://localhost:2000/${res[0]}-roadmaps/${res[1]}`)
			.then((response) => {
				console.log(response.data);
				setDetails(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="container">
			<div className="Container">
				{details.map((data) => (
					<center>
						<h2 class="Main-Mini-Headings">
							{data.name.toUpperCase() + " ROADMAP"}
						</h2>
						<img
							src={`data:image/jpeg;base64,${Buffer.from(
								data.img.data
							).toString("base64")}`}
							class="img-fluid"
							alt="Responsive image"
						></img>
					</center>
				))}
			</div>
		</div>
	);
}

export default RoadMapDetail;
