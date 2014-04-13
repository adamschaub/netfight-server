///////////////////////////////////////
//MODULES
///////////////////////////////////////
var express = require('express');
var app = express();
var hbs = require('hbs');
var mongoose = require('mongoose');

///////////////////////////////////////
//HTTP SERVER
///////////////////////////////////////
var dbConfig = require('./config/Database.js');

mongoose.connect(dbConfig.uri, function(err) {
    if(err) {
        console.log("Couldn't connect to " + dbConfig.uri + ": Connecting to localhost/netfight");
        mongoose.connect('localhost/netfight');
    }
});

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + "/views/partials"); 

app.configure(function(){
    app.use(express.logger('dev'));
    app.use(express.bodyParser());

    app.set('view engine', 'html');
    app.engine('html', hbs.__express); //set handlebars to render page
});

require('./routes/routes.js')(app);

var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log("HTTP listening on " + port);
});
