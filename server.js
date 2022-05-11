const express = require('express');
const mongoose = require('mongoose');
// const User = require('./model/user');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken')


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


// Routes


// Data Base Stuff




const endUserSchema = new mongoose.Schema({
	bio: {
		first_name: String,
		last_name: String,
		email_id: String,
		pwd: String
	},

	upcomingTrips: [{
		flightNumber: String,
		startingPoint: String,
		destination: String,
		takeoffTime: String,
		landingTime: String,
		seatNumber: String,
		additionalCharges: String

	}],

})


const endUser = mongoose.model('endUser', endUserSchema);

// const timBob = new endUser({
//     bio : { first_name : 'Tim', last_name : 'Bob' , email_id : 'timBob@test.com' , pwd : 'dummy'} , 
//     upcomingTrips : [{flightNumber : '6E 489' , startingPoint : 'SAN' , endingPoint : 'JFK' , takeofftime : '10:00 AM' , landingTime : '5:00 PM' , seatNumber : '5A' , additionalCharges : 'False'} ],
// })

// timBob.save();

// Data Base Stuff


let port = process.env.PORT;

if (port == null || port == "") {
	port = 3000;
}

app.listen(port, () => {
	console.log(`Server is running on port ${port}.`);
});