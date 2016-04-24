/**
 * Created by root on 23.04.16.
 */
var Item = require('./Item.model');
var Collection = require('./Collection.model');
var User = require('./User.model');
var db = require('../mongoose');


exports.itemModel = Item.itemModel;
exports.collectionModel = Collection.collectionModel;
exports.userModel = User.userModel;

