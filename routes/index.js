var express = require('express');
var router = express.Router();

var request = require('request');
var states;

/* GET home page. */
router.get('/', function(req, res, next) {
  request('http://swellcast.com.au/api/v1/states.json?api_key=ToE55pazb1yWixSuT81S&callback=', function(error, response, body){
    if(!error && response.statusCode == 200){
      states = JSON.parse(body);
      console.log(states)
      res.render('index', {
        title: 'Sun of a Beach',
        states: states
      });
    }
  })
});

module.exports = router;
