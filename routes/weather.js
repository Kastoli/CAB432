var express = require('express');
var router = express.Router();

var request = require('request');
var weathers;
var beacharr;

/* GET users listing. */
router.get('/', function(req, res, next) {
    beacharr = req.query.beach.split('$');
    console.log(beacharr[0]);
    request('http://api.openweathermap.org/data/2.5/weather?q=' + beacharr[0] + ',AU&APPID=2f3cfb6662fc99d71dd7424de69f6d39&callback=', function(error, response, body){
        if(!error && response.statusCode == 200){
            weathers = JSON.parse(body);
            console.log(weathers)
            res.render('weather', {
                title: 'Sun of a Beach',
                selectedbeach: beacharr,
                weather: weathers
            });
        }
    })
});

module.exports = router;
