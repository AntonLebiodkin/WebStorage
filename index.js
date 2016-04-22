/**
 * Created by root on 19.04.16.
 */
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


app.set('views', './views');
app.set('view-engine', 'jade');

app.use(express.static(__dirname));

app.get('/', function(req, res){
   res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname+'/login.html'));
});
app.post('/login', function(req, res){
    var email = req.body.user.email;
    var password = req.body.user.password;

    if (email == "hui@hui" && password == "hui") {
        res.redirect('/storage');
    } else {
        res.send("ERROR!");
    }
});
app.get('/add_item', function(req, res){
    res.send('<div class="item" style="display: flex; align-items: center; justify-content: space-around; float: left; margin: 10px; align-content: space-around; box-sizing: border-box; height: 25%; width: 25%; border: 5px solid black">'  +
             '<h1>Name</h1>'+
             '<br>'+
             '<h2>Type</h2>'+
             '</div>');
});
app.get('/storage', function(req, res){
    res.sendFile(path.join(__dirname+'/storage.html'));
});
app.listen(3000, function(){
    console.log("Server is running on *3000");
});