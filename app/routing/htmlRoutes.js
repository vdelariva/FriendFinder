var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../puclic/home.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  
  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
