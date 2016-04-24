/**
 * Created by root on 24.04.16.
 */
app.get('/users', function(req, res){
    console.log(User.find(function(err, users){
        if (err)
            console.log(err);
        else
            res.json(users);
    }));
    //res.sendFile(path.join(__dirname+'/index.html'));
});