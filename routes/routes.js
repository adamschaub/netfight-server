//requires
var Fighter = require('../app/models/models.js').Fighter;
var BattleResults = require('../app/models/models.js').BattleResults;

module.exports = function(app) {

    ///////////////
    //INDEX
    ///////////////
    app.get('/', function(req, res) {
        Fighter.find();
        var data = {
            title: 'Netfight Leaderboard'
        };

        res.render('index', data);
    });

    /*
     * Route: POST netfight.herokuapp.com/battle_results
     * 
     * FORMAT: JSON
       {
            fighters: [{
                id: String (netflix ID),
                title: String
                genres: [String],
                win: Boolean
            }]
       }
     */
    app.post('/battle_results', function(req, res, next) {
        var results = req.body.fighters;
        for(var f in fighters) {
            var won = f.won;
            delete f.won;
            if(won) {
                Fighter.update({netflixId: f.id}, {upsert: true, $inc: {wins: 1}}, function(err) {
                    if(err) next(err);
                    else {
                        console.log("success!");
                    }
                });
            }
            else {
                Fighter.update({netflixId: f.id}, {upsert: true, $inc: {losses: 1}}, function(err) {
                    if(err) next(err);
                    else {
                        console.log("success!");
                    }
                });
            }
        }
    });
};
