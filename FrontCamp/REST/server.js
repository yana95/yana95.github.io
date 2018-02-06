const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const logger = require('./logger');
const port = 3030;
const Blog = require('./models/blogs.js');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blogs');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected');
});


app.all('/*', function (req, res,next) {
    logger.info(req.url);
    next();
})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('views', './views')
app.set('view engine', 'pug')

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
    var blog = new Blog({name:req.body.name, blog_id:req.body.blog_id});
    blog.save(function (err, newBlog) {
        if (err){
            res.send(err);
        } else{
            res.send(newBlog);
        }
    });
});
router.put('/blogs/:id', function(req, res) {
    Blog.findOne({blog_id:req.params.id}, function(err, blog) {
        if(!err) {
            if(!blog) {
                res.send('No items to update');
            }
            blog.name = req.body.name;
            blog.save(function(err) {
                if(!err) {
                    res.send("blog " + blog.name + " updated")
                }
                else {
                    res.send("Error: could not save blog " + blog.name);
                }
            });
        }
    });
});
router.delete('/blogs/:id', function(req, res) {
    Blog.remove({ id: req.param.id }, function(err) {
        if (!err) {
            res.send('Delete item');
        }
        else {
            console.log('error');
        }
    });
});

app.use('/', router);
app.use(function (err, req, res) {
    res.status(500).send('Something broke!')
})
app.use(function( req, res) {
    res.status(404);
    res.render('tmp',{pageTitle:'Wrong path'});
});

app.listen(port);
console.log('Magic happens on port ' + port);
