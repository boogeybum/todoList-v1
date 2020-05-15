const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get("/", function(req, res) {

  let today = new Date();
  let currentDay = today.getDay();
  let day = '';

  if (currentDay === 6 || currentDay === 0) {
    day = 'Weekend';
    // res.send("<h1>i luv weekends!</h1>");
  } else {
    day = 'Weekday';
    // res.send("<h1>🎶Working for the weekend🎶</h1>");
  }
  res.render('list', {kindOfDay: day});
});


app.listen(PORT, function() {
  console.log("Server started on port: " + PORT);
});