var path = require("path");
var express = require("express");
var PORT = process.env.PORT || 8082;
var app = express();
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.listen(PORT, function() {
  console.log("App listening on PORT:" + PORT);
});
