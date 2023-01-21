var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");

	const transporter = nodemailer.createTransport({
		service: "gmail",

		auth: {
			user: "mukisageophrey@gmail.com", // generated ethereal user
			pass: "abnqwgabenusyqkb", // generated ethereal password
		},
	});

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express", PageContent: "home" });
});

router.get("/contacts", function (req, res, next) {
	res.render("index", { title: "Express", PageContent: "contactUs" });
});

router.post("/contacts", async function ({ body, query }, res, next) {
	// res.render('index', { title: 'Express', PageContent: "contactUs" });

	console.log(body, query);
  const {comments,email, name} = body


	let info = {
		from: "IGC 2", // sender address
		to: "info@igcfashion.co", // list of receivers
		subject: "Contact Us", // Subject line
		// text: `user:${email} Description:${comments}`, // plain text body
		html: `<div><b>Information</b>
		<p>${email}</p>
		<p>${comments}</p>
		</div>`, // html body
	};

	transporter.sendMail(info, function (error, info) {
		if (error) {
			console.log(error);
      res.status(500).json(error)
		} else {
			console.log("Email sent: " + info.response);
			// do something useful
		res
			.status(200)
			.send(
				"Our team will come back to you within a matter of hours to help you.",
			);

		}
	});
});

router.get("/collections", function (req, res, next) {
	res.render("index", { title: "Express", PageContent: "collections" });
});

router.get("/projects", function (req, res, next) {
	res.render("index", { title: "Express", PageContent: "projects" });
});

router.get("/memberships", function (req, res, next) {
	res.render("index", { title: "Express", PageContent: "membership" });
});

router.get("/events", function (req, res, next) {
	res.render("index", { title: "Events", PageContent: "events" });
});

router.get("/about", function (req, res, next) {
	res.render("index", { title: "Express", PageContent: "aboutUs" });
});

router.get("/fashioncyphers", function (req, res, next) {
	res.render("index", { title: "Events", PageContent: "fashionCypher" });
});

router.get("/kwetukwanza", function (req, res, next) {
	res.render("index", { title: "Events", PageContent: "kwetukwanza" });
});

router.get("/workshop", function (req, res, next) {
	res.render("index", { title: "Events", PageContent: "workshop" });
});

router.get("/mistakenfabrics", function (req, res, next) {
	res.render("index", { title: "Events", PageContent: "mistakenfabrics" });
});


module.exports = router;
