/**
 * Created by root on 23.04.16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password: String,
    collections: {
        type: Array,
        ref: 'Collection'
    }

});

var User = mongoose.model('User', UserSchema);

exports.userModel = User;