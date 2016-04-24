/**
 * Created by root on 23.04.16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
    name: String,
    type: String,
    description: String,
    owner: {
        type: Schema.ObjectId,
        ref: 'User'
    }

});

var Item = mongoose.model('Item', ItemSchema);

exports.itemModel = Item;