var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express(); // Tells node that we are creating an "express" server
var port = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());





app.listen(port, function() {
	console.log("App listening on PORT: " + port);
});