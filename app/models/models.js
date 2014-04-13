var mongoose = require('mongoose');

var fighterSchema = new mongoose.Schema({
    title: {type: String, required: true},
    genre: [String],
    netflixId: {type: String, required: true},
    wins: {type: Number, default: 0},
    losses: {type: Number, default: 0}
});

exports.Fighter = mongoose.model('Fighter', fighterSchema, 'fighter');

var battleResultSchema = new mongoose.Schema({

});

exports.BattleResults = mongoose.model('BattleResults', battleResultSchema, 'battleResults');