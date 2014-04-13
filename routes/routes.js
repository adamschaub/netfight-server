//requires
var Fighter = require('../app/models/models.js').Fighter;

module.exports = function(app) {

    ///////////////
    //INDEX
    ///////////////
    app.get('/', function(req, res) {
        var data = {
            title: 'Netfight Leaderboard'
        };

        res.render('index', data);
    });
};
