const { Schema, model } = require('mongoose');
// const bcrypt = require('bcrypt');

const dtcSchema = new Schema({
  number: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
 
});


const Dtc = model('Dtc', dtcSchema);

module.exports = Dtc;
