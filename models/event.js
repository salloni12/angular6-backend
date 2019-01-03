var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var eventSchema = new Schema({
    firstname: { type: String },
    lastname: { type: String },
    address: { type: String },
    email: { type: String },
    contact: { type: String }


});

var event = mongoose.model('event', eventSchema);

module.exports=event;