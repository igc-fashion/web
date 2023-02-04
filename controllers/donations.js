const Flutterwave = require("flutterwave-node-v3");

const flw = new Flutterwave(
	"FLWPUBK_TEST-47351f87c1bc28aaf3270c39b318e7e7-X",
	"FLWSECK_TEST-6accdcf00e77f083961f42ed4202e9ca-X",
);

exports.chargeCard = function ({ body }, res, next) {
	//     const details = {
	//    "card_number":"5531886652142950",
	//    "cvv":"564",
	//    "expiry_month":"09",
	//    "expiry_year":"32",
	//    "currency":"NGN",
	//    "amount":"100",
	//    "fullname":"Yolande Aglaé Colbert",
	//    "email":"stefan.wexler@hotmail.eu",
	//    "tx_ref":"MC-3243e",
	//    "redirect_url":"https://www,flutterwave.ng"
	// };
	// await flw.Charge.card(details)
	console.log(body);

	const details = {
		card_number: body.number,
		cvv: "564",
		expiry_month: "09",
		expiry_year: "32",
		currency: "USD",
		amount: "100",
		fullname: "Yolande Aglaé Colbert",
		email: "mukisa.geofrey@gmail.com",
		tx_ref: "MCs" + Date.now(),
		enckey: "FLWSECK_TESTdfeadf2be11d",
		// 	"authorization": {
		//    "mode": "pin",
		//    "pin": "3310"
		//   }
		// encryptionKey:
		//    "redirect_url":"https://www,flutterwave.ng"
	};

	const cardPayment = async () => {
		try {
			const response = await flw.Charge.card(details);

			res.json(response);
			console.log(response, "flutter wave init payment response");
			console.log(response.meta.authorization.fields, "fields");
		} catch (error) {
			console.log(error.message, "flutter error");
		}
	};

	cardPayment();
};

exports.verifyOtp = async function (req, res) {
	const { body, params } = req;

	const response = await flw.Charge.validate({
		otp: body.otp,
		flw_ref: params.flwRef,
	});

	console.log(response);
	res.json(response)


};
