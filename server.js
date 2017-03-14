var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// Create the express app
var app = express();
// For use in the index.js route file. Lets us use req.body to retrieve form data from the page's body
app.use(bodyParser.urlencoded({ extended: true }));
console.log( __dirname);
// This tells the server to use a static file folder to handle requests for static content.
app.use(express.static(path.join(__dirname, "./static")));
// This sets the location where express will look for the ejs views
app.set('views', path.join(__dirname, './views'));
// This tells Express that ejs is the templating engine
app.set('view engine', 'ejs');

// We're going to have the file /routes/index.js handle all of our routing.
var route = require('./routes/index.js')(app); // We're creating the function 'route' and passing it app in the same line
// if you didn't have (app) in the line above you could write route(app); here to invoke route

// Tell the express app to listen on port 8400
app.listen(8400, function() {
 console.log("listening on port 8400");
});
