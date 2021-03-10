let config = require("./config.js")
let mongoose = require('mongoose');

mongoose.connect(config.url);
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose;