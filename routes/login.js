/**
 * Created by root on 24.04.16.
 */


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