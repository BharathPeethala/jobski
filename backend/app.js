const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const skillsModel = require("./models/skills");
const rolesModel = require("./models/roles");
const app = express();
app.use(cors());
dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
const port = 2000;
mongoose
	.connect(process.env.MONGO_PATH, { useNewUrlParser: true })
	.then((data) => {
		console.log("successfully connected");
	})
	.catch((err) => {
		console.log(err);
	});

const schema = new mongoose.Schema({
	ROLE: String,
	DESCRIPTION: String,
	RESPONSIBILITIES: Array,
	SKILLS: Array,
	SALARY: String,
});

const skill = mongoose.model("skills", schema);

app.get("/api", (req, res) => {
	skill.find({}, (err, data) => {
		if (err) {
			res.send(err);
		} else {
			res.send(data);
		}
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads");
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + "-" + Date.now());
	},
});

var upload = multer({ storage: storage });

app.get("/skills-roadmaps", (req, res) => {
	// const query = skillsModel.find({}).select({ name: 0 });
	skillsModel.find({}, "name", (err, items) => {
		if (err) {
			console.log(err);
			res.status(500).send("An error occurred", err);
		} else {
			res.send(items);
		}
	});
});
app.get("/skills-roadmaps/:id", (req, res) => {
	// const query = skillsModel.find({}).select({ name: 0 });
	skillsModel.find({ _id: req.params.id }, (err, items) => {
		if (err) {
			console.log(err);
			res.status(500).send("An error occurred", err);
		} else {
			res.send(items);
		}
	});
});

app.get("/roles-roadmaps", (req, res) => {
	rolesModel.find({}, "name", (err, items) => {
		if (err) {
			console.log(err);
			res.status(500).send("An error occurred", err);
		} else {
			res.send(items);
		}
	});
});
app.get("/roles-roadmaps/:id", (req, res) => {
	// const query = skillsModel.find({}).select({ name: 0 });
	rolesModel.find({ _id: req.params.id }, (err, items) => {
		if (err) {
			console.log(err);
			res.status(500).send("An error occurred", err);
		} else {
			res.send(items);
		}
	});
});

app.post("/", upload.single("image"), (req, res, next) => {
	var obj = {
		name: req.body.name,
		desc: req.body.desc,
		img: {
			data: fs.readFileSync(
				path.join(__dirname + "/uploads/" + req.file.filename)
			),
			contentType: "image/jpg",
		},
	};
	imgModel.create(obj, (err, item) => {
		if (err) {
			console.log(err);
		} else {
			// item.save();
			res.redirect("/");
		}
	});
});
