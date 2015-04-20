var express = require('express');
var router = express.Router();

var users = ["liz", "janardan", "david"]

// TODO: Check credentials against database instead of in-memory array
// TODO: Make sure the work factor comes out to be the same for failing and succeeding auth attempts
function authenticateUser (credential) {
	for (var i = 0; i < users.length; i++) {
		if (credential == users[i]) {
			return true;
		}
	}
	return false;
}

// TODO: Turn this into a real encryption function
function encrypt (thing) {
	return thing + "xxxx";
}

// TODO: Turn this into a real decryption function (that works with encrypt())
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
		// TODO: Log when someone successfully authenticates
		var encryptedCookie = encrypt(req.body["username"])
		res.cookie("user", encryptedCookie, { signed : true })
		res.send("You are totally a user")
	} else {
		// TODO: Log when credentials fail, including what identifying information we have about the failing requestor
		// TODO: Deny attempts after the 10th failed credential based on IPs (not a cookie)
		res.send("LIES")
	}
});

module.exports = router;
