var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blog = new Schema({
    name:  String,
    blog_id: String
});
var Blog = mongoose.model('Blog', blog);
module.exports = Blog;