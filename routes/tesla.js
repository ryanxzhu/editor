const express = require('express'),
	router = express.Router();

router.get('/tesla', function(req, res) {
	res.render('tesla');
});

module.exports = router;
