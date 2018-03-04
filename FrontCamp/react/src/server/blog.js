var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blog = new Schema({
    author:  String,
    text: String,
    date: String,
    ID: String
});
var Blog = mongoose.model('Blog', blog);
module.exports = Blog;