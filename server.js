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



mongoose.connect('mongodb+srv://cropairse:cropairse@cluster0.zac4u.mongodb.net/CropAirDB?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});




// Routes

app.use(express.static(__dirname + '/public'))



app.post('api/iscustomerBoarded', async (req, res) => {
	const { customerSeat , customerName, customerStatus} = await req.body
	const customer = await flightDetail.find({ customerName , customerSeat }).lean()

	if (!customer) {
		return res.json({ status: 'error', error: 'Invalid !! ' })
	}

	
	return res.json({ status: 'ok'})



})



app.get("/", function (req, res) {
	res.sendFile(__dirname + "/allFlightsPage.html")
});


app.get("/boardingCustomersPage", function (req, res) {
	res.sendFile(__dirname + "/boardingCustomersPage.html")
});

app.get("/qrCodeConfirmation", function (req, res) {
	res.sendFile(__dirname + "/qrCodeConfirmation.html")
});


// Routes


// flightDetail.create({ flightNumber  : '6E108' , customers:  ['Mr Bob' , 'Mrs Bob']})


let port = process.env.PORT;

if (port == null || port == "") {
	port = 3000;
}

app.listen(port, () => {
	console.log(`Server is running on port ${port}.`);
});