var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', PageContent: "home" });
});

router.get('/contacts', function(req, res, next) {
  res.render('index', { title: 'Express', PageContent: "contactUs" });
});


router.get('/collections', function(req, res, next) {
  res.render('index', { title: 'Express', PageContent: "collections" });
});

router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Express', PageContent: "projects" });
});

router.get('/memberships', function(req, res, next) {
  res.render('index', { title: 'Express', PageContent: "membership" });
});

router.get('/c', function(req, res, next) {
  res.render('index', { title: 'Express', PageContent: "home" });
});

module.exports = router;
