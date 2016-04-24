/**
 * Created by root on 24.04.16.
 */
app.get('/storage', function(req, res){
    res.sendFile(path.join(__dirname+'/storage.html'));
});

app.post('/add_item', function(req, res){
    var name = req.body.name || 'hello';
    var type = req.body.type || 'motherfucker';
    var description = req.body.description || 'Have I surprised you?';
    console.log(name, type, description);

    res.render('item.jade', {
        name: name,
        type: type,
        description: description
    });
});