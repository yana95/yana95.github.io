const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const logger = require('./logger');
const port = 3030;


app.all('/*', function (req, res,next) {
    logger.info(req.url);
    next();
})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('views', './views')
app.set('view engine', 'pug')

var router = express.Router();
router.get('/blogs', function(req, res) {
    console.log('GET /blogs');
    res.json();
});
router.get('/blogs/:id', function(req, res) {
    console.log('GET /blogs/' + req.params.id );
    res.json();
});
router.post('/blogs', function(req, res) {
    console.log('POST /blogs');
    res.json();
});
router.put('/blogs/{id}', function(req, res) {
    console.log('PUT /blogs/{id}');
    res.json();
});
router.delete('/blogs/{id}', function(req, res) {
    console.log('DELETE /blogs/{id}');
    res.json();
});

app.use('/', router);
app.use(function( req, res) {
    res.status(404);
    res.render('tmp',{pageTitle:'Wrong path'});
});

app.listen(port);
console.log('Magic happens on port ' + port);