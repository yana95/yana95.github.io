const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const port = 3030;
const Blog = require('./blog.js');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blogs');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected');
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//To prevent errors from Cross Origin Resource Sharing, we will set
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
    res.setHeader('Cache-Control', 'no-cache');
    next();
});


const router = express.Router();
router.get('/blogs', function(req, res) {
    Blog.find(function(err, blogs) {
        if (err){
            res.send(err);
        }
        res.json(blogs);
    });
});
router.get('/blogs/:id', function(req, res) {
    Blog.findOne({blog_id:req.params.id}, function(err, blog){
        if (err){
            res.send(err);
        } else{
            console.log(blog);
            res.json(blog);
        }
    });
});
router.post('/blogs', function(req, res) {
    var blog = new Blog({text:req.body.text, ID:req.body.ID,author:req.body.author,date:req.body.date});
    blog.save(function (err, newBlog) {
        if (err){
            res.send(err);
        } else{
            res.send(newBlog);
        }
    });
});
router.delete('/blogs/:id', function(req, res) {
    Blog.remove({ ID: req.params.id }, function(err) {
        if (!err) {
            res.send('Delete item');
        }
        else {
            console.log('error');
        }
    });
});

app.use('/', router);

app.listen(port);
console.log('Magic happens on port ' + port);