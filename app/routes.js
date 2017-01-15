
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

//route for homepage
router.get('/', function(req,res){
	res.render('pages/home');
});


router.get('/about', function(req,res){
	var users = [
		{name: 'Oak', email: 'oaksupanat@gmail.com', avatar: 'http://placekitten.com/300/300'},
		{name: 'Earth', email: 'oaksupanat@gmail.com', avatar: 'http://placekitten.com/400/400'},
		{name: 'Dean', email: 'oaksupanat@gmail.com', avatar: 'http://placekitten.com/500/500'},
		{name: 'Top', email: 'oaksupanat@gmail.com', avatar: 'http://placekitten.com/600/600'},
	];
	res.render('pages/about', { users: users });
});


// router.get('/contact', function(req,res){
// 	res.render('pages/contact');
// });


// router.post('/contact', function(req,res){
// 	console.log(req.body.message);
// 	res.send('Thank you for contacting us :)' + req.body.name + '!!  we will respond shortly');
// 	res.render('pages/contact', { users: users });
// });










var on_contents = function(callback,username) {
	var options = {
	  host: 'api.github.com',
	  // path: '/users/pichaya/followers',
	  path: '/users/' + username + '/follwers',
	  headers: {'user-agent': 'node.js'}
	}

	https.get(options, function(res) {
	  var body = ''; // Will contain the final response
	  // Received data is a buffer.
	  // Adding it to our body
	  res.on('data', function(data){
	    body += data;
	  });
	  // After the response is completed, parse it and log it to the console
	  res.on('end', function() {
	    var parsed = JSON.parse(body);
	    // console.log(parsed);
	    callback(parsed);
	  });
	  
	})
};

function onFinish(data) {
    console.log(data);
    router.get('/contact', function(req, res){
    	var users = [{}];
    	res.render('pages/contact', { users: users });
    });
}

function getUsername(req) {
	router.post('/contact', function(req,res){
    	var username = req.body.name;
    	var users = data;
    	console.log("POST-------------");
    	res.render('pages/contact', { users: users });
    });
}


on_contents(onFinish,getUsername);


// request({
// 	'User-Agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.0.13) Gecko/2009073021 Firefox/3.0.13',
// 	url: 'https://api.github.com/users/pichaya/followers', 
// 	json: true

// }, function(err, res, json) {
//   if (err) {
//     throw err;
//   }
//   console.log(json);
// });

// router.get('/contact', function(req, res){
//   request('https://api.github.com/users/pichaya/followers', function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       var info = JSON.parse(body)
//       console.log(info);
//       // do more stuff
//       res.send(info);
//     }
//   })
// });


// console.log('Creating a simple HTTPs request');

// https.get("https://api.github.com/users/pichaya/followers", function(res) {
//   var body = ''; // Will contain the final response
//   // Received data is a buffer.
//   // Adding it to our body
//   res.on('data', function(data){
//     body += data;
//   });
//   // After the response is completed, parse it and log it to the console
//   res.on('end', function() {
//     var parsed = JSON.stringify(body);
//     console.log(parsed);
//   });
// })
// // If any error has occured, log error to console
// .on('error', function(e) {
//   console.log("Got error: -------------------" + e.message);
// });