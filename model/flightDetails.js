const mongoose = require('mongoose');

const flightDetailsSchema = new mongoose.Schema({
    
  flightNumber: { type: String, required: true, unique: true },
  customers: [{ type: String, required: true }]
},
{ collection: 'flightDetails' }
)

const model = mongoose.model('flightDetailsSchema' , flightDetailsSchema);

module.exports = model;
