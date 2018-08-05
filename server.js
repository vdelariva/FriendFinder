// Dependencies
// ____________________________________________________________________________________

var express = require("express");
var bodyParser = require("body-parser");

// Setup the Express App
// ____________________________________________________________________________________

var app = express();
var PORT = process.env.PORT || 8080;


// Setup the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup access to static assets, specifically app.js
app.use(express.static('app/public'))

// Router
// The below points the server to a series of "route" files.
// These routes give the server a "map" of how to respond when users visit or request data from various URLs.

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Start server to listen to client requests.
// ____________________________________________________________________________________

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
