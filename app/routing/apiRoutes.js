// ____________________________________________________________________________________
// LOAD DATA
// Array of friend objects
// ____________________________________________________________________________________

var friendData = require("../data/friends");

// ____________________________________________________________________________________
// ROUTING
// ____________________________________________________________________________________

module.exports = function(app) {
// API GET Requests
// JSON of the data in the friend table
// ____________________________________________________________________________________

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

// API POST Requests
// Below code handles when a user submits a form and thus submits data to the server.
// In each of the below cases, when a user submits form data (a JSON object)
// ...the JSON is pushed to the appropriate JavaScript array
// (ex. User fills out the friend survey... this data is then sent to the server...
// Then the server saves the data to the friendArray)
// ---------------------------------------------------------------------------

  app.post("/api/friends", function(req) {
    // The "server" will add the information from the survey to the friendArray
    // req.body is available since we're using the body-parser middleware
      friendData.push(req.body);
  });

  // ---------------------------------------------------------------------------

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendData = [];

    console.log(friendData);
  });
};
