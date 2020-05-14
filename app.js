const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", function(req, res) {

  let today = new Date();
  let currentDay = today.getDay();

  if (currentDay === 6 || currentDay === 0) {
    res.send("<h1>i luv weekends!</h1>");
  } else {
    res.send("<h1>🎶Working for the weekend🎶</h1>");
  }
});


app.listen(PORT, function() {
  console.log("Server started on port: " + PORT);
});