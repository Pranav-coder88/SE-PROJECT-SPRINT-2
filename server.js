const express = require('express');
const mongoose = require('mongoose');
const flightDetail = require('./model/flightDetails.js');


const app = express();


app.use(express.json());

app.use(express.urlencoded({ extended: false }))


mongoose.connect('mongodb+srv://cropairse:cropairse@cluster0.zac4u.mongodb.net/CropAirDB?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// Routes

app.use(express.static(__dirname + '/public'))


app.get("/", function (req, res) {
	res.sendFile(__dirname + "/allFlightsPage.html")
});


app.get("/boardingCustomersPage", function (req, res) {
	res.sendFile(__dirname + "/boardingCustomersPage.html")
});

app.get("/qrCodeConfirmation", async function (req, res) {

	const customerName = req.query.customerName;
	const customerSeat = req.query.customerSeat;
	const flightNumber = req.query.flightNumber;


	const customer = await flightDetail.find({ customerName, customerSeat, flightNumber }).lean();

	if (customer.length > 0) {
		flightDetail.updateOne({customerName : req.query.customerName} , {isBoarded:'True'}, (err) =>{

			if(err){
				console.log(err);
			}
			else{
				console.log('Success');
			}

		})
		// console.log(result);


		res.sendFile(__dirname + "/qrCodeConfirmationSucess.html")


	}
	else {
		res.sendFile(__dirname + "/qrCodeConfirmationFailure.html")

	}


});


	app.post('/queryingForUpdates', async (req, res) => {

		const customer = await flightDetail.find({
			isBoarded: 'False'
		}).lean();

		if (customer.length > 0) {
			res.json({ status: 'ok', customer: customer });



		}
		else {
			res.json({ status: 'error' })

		}



	// always send a response:

})


app.post('/queryingForCustomerList', async (req, res) => {

	flightDetail.find((err, docs) => {
		// console.log(docs);


		// console.log(typeof(docs));

		if (docs.length > 0) {
			res.json({ status: 'ok', data: docs})
		};


	});




	// }
	// else {
	// 	res.json({ status: 'error' })

	// }



	// always send a response:

})


let port = process.env.PORT;

if (port == null || port == "") {
	port = 3000;
}

app.listen(port, () => {
	console.log(`Server is running on port ${port}.`);
});