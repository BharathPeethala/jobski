const mongoose = require("mongoose");

const skillsSchema = new mongoose.Schema({
	name: String,
	description: String,
	img: {
		data: Buffer,
		contentType: String,
	},
});

module.exports = new mongoose.model("roles_road_map", skillsSchema);
