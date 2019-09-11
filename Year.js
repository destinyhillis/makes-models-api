const mongoose = require('mongoose');

const YearSchema = new mongoose.Schema ({ 
    id: {type: Number, required: true, unique: true},
    year: {type: Number, required: true, unique: true},
    makes: String,
    models: String
});

const YearSchema = mongoose.model('Year', YearSchema); 

Module.exports = YearSchema;