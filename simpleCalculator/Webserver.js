const express = require('express');
const url = require('url');
const app = express();
const port = 8080;

app.get('/calculate', function(req, res) {
    var q = url.parse(req.url, true);
    var vals = q.query;

    var result;
    if (vals.operation === "sum") {
        result = parseInt(vals.first) + parseInt(vals.second);
    } else if (vals.operation === "division") {
        result = parseInt(vals.first) / parseInt(vals.second);
    } else if (vals.operation === "multiply") {
        result = parseInt(vals.first) * parseInt(vals.second);
    } else if (vals.operation === "extraction") {
        result = parseInt(vals.first) - parseInt(vals.second);
    }

    res.send(`<!DOCTYPE html>
    <html>
    <head><meta charset=\"utf-8\"/>
    <title>Calculator Web Site</title>
    </head>
    <body>
    <p>The Answer is: ${String(result)}</p>
    <button onclick="history.back()">Another Calculation</button>
    </body>
    </html> `);
});

app.listen(port, function() {
    console.log(`Simple Calculator app listening on port ${port}!`)
});