const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema ({ 
    id: {type: Number, required: true, unique: true},
    name: {type: String, required: true, unique: true},
    year: Number,
    makeId: Number
});

const ModelSchema = mongoose.model('Model', ModelSchema); 

Module.exports = ModelSchema;