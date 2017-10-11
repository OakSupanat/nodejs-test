
//require express
var express = require('express');
var path = require('path');
var request = require('request');

// var http = require('http');
var https = require('https');

//create router object
var router = express.Router();

//export the router
module.exports = router;

router.get('/', function(req, res){
		if(!req.query.name) {
			res.render(path.resolve(__dirname, '..', 'views', 'pages/home'), {users: [] , username: ''});
		} else {
			let username = req.query.name;
			var on_contents = function(callback) {
				var options = {
				  host: 'api.github.com',
				  path: '/users/' + username + '/followers',
				  headers: {'user-agent': 'node.js'}
				}

				https.get(options, function(res) {
				  var body = '';
				  res.on('data', function(data){
				    body += data;
				  });
				  res.on('end', function() {
				    var parsed = JSON.parse(body);
				    callback(parsed);
				  });
				  
				})
			};

			function onFinish(data) {
			    var users = data;
		    	res.render(path.resolve(__dirname, '..', 'views', 'pages/home'), { users: users , username: req.query.name });
			}

			on_contents(onFinish);
		}
		
    });

