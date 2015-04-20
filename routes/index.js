var express = require('express');
var router = express.Router();

// ** Authentication Middleware **
router.use(function(req,res,next) {
	if (req.authenticated) {
		console.log("User " + username + " logged in at " + new Date.now());
		next();
	} else {
		res.alert("You must be logged in to do that");
		res.render('index', { title: 'Tradecraft' });
	}
})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tradecraft' });
});

router.get('/stuff', function(req, res, next) {
	res.render('stuff', { title: 'Tradecraft' });
});

router.get('/things', function(req, res, next) {
	res.render('stuff', { title: 'things' });
});

module.exports = router;
