var express = require('express');
var router = express.Router();

// ** Authentication Middleware **
router.use(function(req,res,next) {
	if (req.authenticated) {
		// Log so that we know if someone tries to access a page and whether or not they are authenticated
		console.log("User " + req.user + " authenticated at " + new Date.now());
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
