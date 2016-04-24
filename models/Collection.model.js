/**
 * Created by root on 23.04.16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CollectionSchema = new Schema({
    name: String,
    items: {
        type: Array,
        ref: 'Item'
    },
    owner: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

var Collection = mongoose.model('Collection', CollectionSchema);

exports.collectionModel = Collection;

