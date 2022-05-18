const mongoose = require('mongoose');

const flightDetailsSchema = new mongoose.Schema({

  flightNumber: { type: String, required: true },
  customerName: { type: String, required: true },
  className: { type: String, required: true },
  customerSeat: { type: String, required: true, unique: true },
  isBoarded: { type: String, required: true },
  msg: { type: String }
},
  { collection: 'flightDetails' }
)

const model = mongoose.model('flightDetailsSchema', flightDetailsSchema);

module.exports = model;
