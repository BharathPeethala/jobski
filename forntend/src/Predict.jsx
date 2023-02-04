import React, { useState, useContext } from "react";
import FormTextInput from "./Components/Form Comp's/FormTextInput";
import FormRadioInput from "./Components/Form Comp's/FormRadioInput";
import FormRadioThreeInput from "./Components/Form Comp's/FormRadioThreeInput";
import DropDownInput from "./Components/Form Comp's/DropDownInput";
import Line from "./Components/Line";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "./Config/Store";
const job_studies = ["Job", "Higher Studies"];
const gentle_tuff = ["Gentle", "Stubborn"];
const smartwork_hardwork = ["Hard Worker", "Smart Worker"];
const management_technical = ["Management", "Technical"];
const salary_work = ["Salary", "Work"];
const apiURL = "http://127.0.0.1:5000/";
const subjects = [
	"Cloud Computing",
	"Networks",
	"Hacking",
	"Computer Architecture",
	"Programming",
	"Parallel computing",
	"IOT",
	"Data Engineering",
	"Software Engineering",
	"Management",
];
const certifications = [
	"Shell programming",
	"Machine learning",
	"App development",
	"Python",
	"Programming",
	"Information security",
	"Hadoop",
	"Distro making",
	"Full stack",
];
const carrerArea = [
	"System developer",
	"Business process analyst",
	"Developer",
	"Testing",
	"Security",
	"Cloud computing",
];
const workshops = [
	"Cloud computing",
	"Database security",
	"Web technologies",
	"Data science",
	"Testing",
	"Hacking",
	"Game development",
	"System designing",
];
const companies = [
	"Web Services",
	"SAaS services",
	"Sales and Marketing",
	"Testing and Maintainance Services",
	"Product development",
	"BPA",
	"Service Based",
	"Product based",
	"Cloud Services",
	"Finance",
];
function PredictJob() {
	const [roles, setRoles] = useContext(Context);
	const [values, setValues] = useState({
		"Percentage in Operating Systems": "",
		"Percentage in Algorithms": "",
		"Percentage in Programming": "",
		"Percentage in Software Engineering": "",
		"Percentage in Computer Networks": "",
		"Percentage in Electronics": "",
		"Percentage in Computer Architecture": "",
		"Percentage in Mathematics": "",
		"Percentage in Communication Skills": "",
		"Hours working per day": "",
		"Logical quotient rating": "",
		Hackathons: "",
		"Coding skills rating": "",
		"Public speaking points": "",
		"Can work long time before system?": "",
		"Self-learning capability?": "",
		"Extra-courses did": "",
		Certifications: "",
		Workshops: "",
		"Talent Tests taken?": "",
		Olympiads: "",
		"Reading and Writing skills": "",
		"Memory capability score": "",
		"Interested subjects": "",
		"Interested career area": "",
		"Job or Higher Studies?": "",
		"Type of company want to settle in?": "",
		"Taken inputs from seniors or elders": "",
		"Interested in games": "",
		"In a Realtionship?": "",
		"Gentle or Tuff behaviour?": "",
		"Management or Technical": "",
		"Salary/Work": "",
		"Hard/Smart worker": "",
		"Worked in teams ever?": "",
	});
	let navigate = useNavigate();
	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		let sendData = {};
		const data = new FormData(e.target);
		const formData = Object.fromEntries(data.entries());
		for (const key in formData) {
			console.log(`${key}: ${formData[key]}`);
			values[key] = formData[key];
			sendData[key] = formData[key];
		}
		console.log(sendData);
		await axios
			.post(apiURL, values)
			.then((response) => {
				console.log(Object.values(response.data));
				const rolesData = Object.values(response.data);
				for (let index = 0; index < rolesData.length; index++) {
					if (
						rolesData[index] === "TECHNICAL SERVICES/HELP DESK/TECH SUPPORT"
					) {
						rolesData[index] = "TECHNICAL SUPPORT";
					} else if (rolesData[index] === "DESIGN & UX") {
						rolesData[index] = "UX DESIGNER";
					}
				}
				setRoles(rolesData);
			})
			.catch((error) => {
				console.log(error);
			});
		navigate("/role");
	};
	return (
		<div class="container">
			<form class="Container" onSubmit={handleSubmit}>
				<div class="AcademicDetails">
					<h2 class="Headings">Academic Details</h2>
					<Line />
					<div class="row">
						<div class="col">
							<FormTextInput
								name="Percentage in Operating Systems"
								range="60-100"
								onChange={onChange}
							/>
						</div>
						<div class="col">
							<FormTextInput
								name="Percentage in Algorithms"
								range="60-100"
								onChange={onChange}
							/>
						</div>
						<div class="col">
							<FormTextInput
								name="Percentage in Programming"
								range="60-100"
								onChange={onChange}
							/>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<FormTextInput
								name="Percentage in Software Engineering"
								range="60-100"
								onChange={onChange}
							/>
						</div>
						<div class="col">
							<FormTextInput
								name="Percentage in Computer Networks"
								range="60-100"
								onChange={onChange}
							/>
						</div>
						<div class="col">
							<FormTextInput
								name="Percentage in Electronics"
								range="60-100"
								onChange={onChange}
							/>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<FormTextInput
								name="Percentage in Computer Architecture"
								range="60-100"
								onChange={onChange}
							/>
						</div>
						<div class="col">
							<FormTextInput
								name="Percentage in Mathematics"
								range="60-100"
								onChange={onChange}
							/>
						</div>
						<div class="col">
							<FormTextInput
								name="Percentage in Communication Skills"
								range="60-100"
								onChange={onChange}
							/>
						</div>
					</div>
				</div>
				<div class="Technical and Logical Capabilites">
					<h2 class="Headings">Technical and Logical Capabilites</h2>
					<Line />
					<div class="row">
						<div class="col">
							<FormTextInput
								name="Hours working per day"
								range="1-12"
								onChange={onChange}
							/>
						</div>
						<div class="col">
							<FormTextInput
								name="Logical quotient rating"
								range="1-9"
								onChange={onChange}
							/>
						</div>
						<div class="col">
							<FormTextInput name="Hackathons" onChange={onChange} />
						</div>
						<div class="col">
							<FormTextInput
								name="Coding skills rating"
								range="1-9"
								onChange={onChange}
							/>
						</div>
						<div class="col">
							<FormTextInput
								name="Public speaking points"
								range="1-9"
								onChange={onChange}
							/>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<FormRadioInput
								name="Can work long time before system?"
								// onChange={onChange}
							/>
						</div>
						<div class="col">
							<FormRadioInput
								name="Self-learning capability?"
								// onChange={onChange}
							/>
						</div>
						<div class="col">
							<FormRadioInput name="Extra-courses did" />
						</div>
						<div class="col">
							<FormRadioInput name="Talent Tests taken?" />
						</div>
						<div class="col">
							<FormRadioInput name="Olympiads" />
						</div>
					</div>
					<div class="row">
						<div class="col">
							<FormRadioThreeInput name="Reading and Writing skills" />
						</div>
						<div class="col">
							<FormRadioThreeInput name="Memory capability score" />
						</div>
					</div>
					<div class="row">
						<div class="col">
							<DropDownInput
								array={subjects}
								name="Interested subjects"
								onChange={onChange}
								value={values}
							/>
						</div>
						<div class="col">
							<DropDownInput
								array={carrerArea}
								name="Interested career area"
								onChange={onChange}
								value={values}
							/>
						</div>
						<div class="col">
							<DropDownInput
								array={companies}
								name="Type of company want to settle in?"
								onChange={onChange}
								value={values}
							/>
						</div>
						<div class="col">
							<DropDownInput
								array={certifications}
								name="Certifications"
								onChange={onChange}
								value={values}
							/>
						</div>
						<div class="col">
							<DropDownInput
								array={workshops}
								name="Workshops"
								onChange={onChange}
								value={values}
							/>
						</div>
					</div>
				</div>
				<div class="Personal Behaviour">
					<h2 class="Headings">Personal Behaviour</h2>
					<Line />
					<div class="row">
						<div class="col">
							<FormRadioInput name="Taken inputs from seniors or elders" />
						</div>
						<div class="col">
							<FormRadioInput name="Interested in games" />
						</div>
						<div class="col">
							<FormRadioInput name="In a Realtionship?" />
						</div>
						<div class="col">
							<FormRadioInput name="Worked in teams ever?" />
						</div>
						<div class="col">
							<FormRadioInput name="Introvert" />
						</div>
					</div>
					<div class="row">
						<div class="col">
							<DropDownInput
								array={management_technical}
								name="Management or Technical"
								onChange={onChange}
								value={values}
							/>
						</div>
						<div class="col">
							<DropDownInput
								array={salary_work}
								name="Salary/Work"
								onChange={onChange}
								value={values}
							/>
						</div>
						<div class="col">
							<DropDownInput
								array={smartwork_hardwork}
								name="Hard/Smart worker"
								onChange={onChange}
								value={values}
							/>
						</div>
						<div class="col">
							<DropDownInput
								array={gentle_tuff}
								name="Gentle or Tuff behaviour?"
								onChange={onChange}
								value={values}
							/>
						</div>
						<div class="col">
							<DropDownInput
								array={job_studies}
								name="Job or Higher Studies?"
								onChange={onChange}
								value={values}
							/>
						</div>
					</div>
				</div>
				<div class="d-grid gap-2 col-6 mx-auto">
					<button class="btn btn-primary PredictButton" type="submit">
						PREDICT THE JOB
					</button>
				</div>
			</form>
		</div>
	);
}

export default PredictJob;
