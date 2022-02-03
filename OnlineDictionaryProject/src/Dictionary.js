const express = require("express");
const app = express();
const wordJs = require("./word.js");
const port = 8080;
const cors = require("cors");


app.use(cors());
app.use(express.urlencoded({
    extended: true
}))
app.post("/search", function (req, res) {
  wordJs.search(req.body.query, res);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  wordJs.connect();
});
