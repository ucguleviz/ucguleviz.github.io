// Importing node modules
const express = require("express");
const pug = require("pug");
const path = require("path");
const PORT = 8080;
 
const app = express();

app.use(express.urlencoded({
  extended: true
}))
 
// Setting our view engine to pug
app.set("view engine", "pug");
 
// Setting our default views
app.set("views", __dirname + "/views");
 
// Serving public assets
app.use(express.static(
    path.join(__dirname + "/public")));

 
var counter =0;
var score=0;

const questions = [
  "1, 1, 2, 3, 5", //fibonacci
  "1, 4, 9, 16, 25", //squares
  "2, 3, 5, 7, 11", //primes
  "1, 2, 4, 8, 16" //powers of 2
];

// Home page will render "quiz.pug"
app.get("/", (req, res) => {
  res.render("quiz",{score:0,question:questions[counter]});
});

app.post('/submit-form', (req, res) => {

  const answer = parseInt(req.body.answer)
  const answers = [8, 36, 13, 32];
  if (answer === answers[counter]) {
      score++;
  }
  counter++;
  if (counter === 4) {
    res.render("result",{score:score});
  } else {
    res.render("quiz",{score:score,question:questions[counter]});
  }
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})