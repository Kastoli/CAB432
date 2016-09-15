var express = require('express');
var router = express.Router();

var request = require('request');
var beaches;

/* GET home page. */
router.get('/', function(req, res, next) {
    request('http://swellcast.com.au/api/v1/states/' + req.query.state + '.json?api_key=ToE55pazb1yWixSuT81S&callback=', function(error, response, body){
        if(!error && response.statusCode == 200){
            beaches = JSON.parse(body);
            console.log(beaches)
            res.render('beaches', {
                title: 'Sun of a Beach',
                beaches: beaches,
                selectedstate: req.query.state
            });
        }
    })
});

module.exports = router;
