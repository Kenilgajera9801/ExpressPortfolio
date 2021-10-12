var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: "Home" });
});
router.get('/about', function(req, res, next) {
    res.render('about', { title: "About" });
});
router.get('/projects', function(req, res, next) {
    res.render('projects', { title: "Projects" });
});
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: "Contact" });
});
router.post('/contact', function(req, res, next) {
    var name = req.body.name;
    var email = req.body.email;
    var subject = req.body.subject;
    var message = req.body.message;
    res.render('contact', { title: "Contact", message: "Message Sent Successfully" });
});
module.exports = router;