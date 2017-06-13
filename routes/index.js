const express = require('express');
const router = express.Router();
const path = require('path');
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res, next) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
  // next();
});

router.post('/', function(req, res, next) {
	res.send(post.method, 'Request to homepage');
	// next();
});

module.exports = router;
