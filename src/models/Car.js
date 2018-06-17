const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CarSchema = new Schema({
    name: String
});

const Car = mongoose.model('cars', CarSchema);
module.exports = Car;