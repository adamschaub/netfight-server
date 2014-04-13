//requires
/*var Lock = require('../app/models/lock.js').Lock;
var eKey = require('../app/models/e_keys.js').eKey;
var User = require('../app/models/user.js').User;*/

module.exports = function(app) {

    ///////////////
    //INDEX
    ///////////////
    app.get('/', function(req, res) {
        if(!req.accepts('html')) {
            res.send({
                'failed': 'you need to login'
            });
        }
        var data = {
            title: 'Home'
        };

        res.render('index', data);
    });

    app.post('/contacts', function(req, res, next) {
        var contactId = req.body.addContactId;
        req.user.contacts.push(contactId);
        req.user.save(function(err){
            if(err) next(err);
            else res.redirect('/contacts');
        });
    });

};
