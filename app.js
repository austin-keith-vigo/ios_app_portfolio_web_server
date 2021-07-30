const express = require('express');
const app = express()
const port = 8080;

// Connection to MySQL
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "avigo",
  password: "localhost",
  database: "portfolio"
});

app.get('/', (req, res) => {
    res.send('Welcome!');
    console.log('DEBUG endpoint /experience/all/: Getting all experiences')
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM experience", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
    });
});


// TODO: Create an endpoint to get all experience objects
app.get('/experience/all', (req, res) => {
    console.log('DEBUG endpoint /experience/all/: Getting all experiences')
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM experience", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
    });
});

// TODO: Create an endpoint to get an experience object

// TODO: Create an endpoint to update an experience object

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
