var mongoose = require('mongoose');

var fighterSchema = new mongoose.Schema({
    title: {type: String, required: true},
    genre: [String]
});

exports.Fighter = mongoose.model('Fighter', fighterSchema, 'fighter');