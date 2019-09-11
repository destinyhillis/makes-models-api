const mongoose = require('mongoose');

const MakeSchema = new mongoose.Schema ({ 
    id: {type: Number, required: true, unique: true},
    name: {type: String, required: true, unique: true},
    year: Number,
});

const MakeSchema = mongoose.model('Make', MakeSchema); 
Module.exports = MakeSchema;
