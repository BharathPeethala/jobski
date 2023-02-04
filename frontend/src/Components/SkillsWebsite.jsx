import React from "react";
import WebCards from "./Form Comp's/WebCards";
const skillsites = [
	{
		name: "Coursera",
		link: "https://www.coursera.org/",
	},
	{
		name: "edX",
		link: "http://www.edx.org/",
	},
	{
		name: "Khan Academy",
		link: "https://www.khanacademy.org/",
	},
	{
		name: "Codecademy",
		link: "http://www.codecademy.com/",
	},
	{
		name: "MIT OpenCourseWare",
		link: "https://ocw.mit.edu/",
	},
	{
		name: "Udemy",
		link: "https://www.udemy.com/",
	},
	{
		name: "LinkedIn Learning",
		link: "https://www.linkedin.com/learning/",
	},
	{
		name: "Alison",
		link: "https://alison.com/",
	},
];
function SkillsWebsite() {
	return (
		<div className="container">
			<h5 class="Home-Headings">Websites to Learn Skills</h5>
			<div class="row Links-Container">
				{skillsites.map((data) => (
					<WebCards link={data.link} name={data.name} />
				))}
			</div>
		</div>
	);
}

export default SkillsWebsite;
