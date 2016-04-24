/**
 * Created by root on 19.04.16.
 */
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var jade = require('jade');
var mongoose = require('mongoose');
var db = require('./mongoose/index');
var routes = require('./rotes/index');

var port = 8080;

var models = require('./models/index'),
    User = models.userModel,
    Item = models.itemModel,
    Collection = models.collectionModel;


app.set('view-engine', jade);
app.set('views', './views');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(express.static(__dirname));

app.listen(port, function(){
    console.log("Server is running on *" + port);
});


app.use('/register', routes.register);
app.use('/login', routes.login);
app.use('/storage', routes.storage);
app.use('/users', routes.users);














