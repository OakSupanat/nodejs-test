
//require
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var app = express();
var port = 8888;
var cors = require('cors');
var path = require('path');

//use ejs+express layouts
app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs');
app.use(expressLayouts);


//use body parser
app.use(bodyParser.urlencoded());
app.use(cors());
//route the app
var router = require('./app/routes')
app.use('/github-followers', router);
app.use('/', router);



//set static files(css.etc)
app.use(express.static(__dirname + '/public'));

//start server
app.listen(port, function() {
	console.log("App started at port: " + port);
});



