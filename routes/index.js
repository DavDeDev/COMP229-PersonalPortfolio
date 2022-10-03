var express = require('express');
var router = express.Router();
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { title: 'Home',});
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', 
  { title: 'Home',});
});
/* GET About me page. */
router.get('/about', function(req, res, next) {
  res.render('Aboutme', 
  { title: 'About Me',});
});
/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', 
  { title: 'Projects',});
});
/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', 
  { title: 'Services',});
});
/* GET ContactMe page. */
router.get('/contact', function(req, res, next) {
  res.render('contactme',     
  { title: 'Contact Me',});
});

router.post("/contactme",(req,res)=>{
  console.log(req.body.email)
  res.send("Thanks for contacting me")
});

//to get the input of the form

module.exports = router;
