var express = require('express');
var router = express.Router();

var users = ["liz", "janardan", "david"]

function authenticateUser (credential) {
	for (var i = 0; i < users.length; i++) {
		if (credential == users[i]) {
			return true;
		}
	}
	return false;
}

function encrypt (thing) {
	return thing + "xxxx";
}

function decrypt (thing) {
	return String.slice(thing, 0, -4);
}


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST users listing. */
router.post('/login', function(req, res, next) {
	var authenticated = authenticateUser(req.body["username"]);
	if (authenticated) {
		var encryptedCookie = encrypt(req.body["username"])
		res.cookie("user", encryptedCookie, { signed : true })
		res.send("You are totally a user")
	} else {
		res.send("LIES")
	}
});

module.exports = router;
