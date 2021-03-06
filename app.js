/***************************
INIT CODE
***************************/
const express = require('express');
const app = express()
const port = 8080;

// Connection to MySQL
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "avigo",
  password: "g00dlUck!",
  database: "portfolio"
});

/***************************
ENDPOINTS
***************************/
const Operations = require("./operations")

app.get('/', (req, res) => {
    res.send('Welcome!');
});

// TODO: Create an endpoint to get all experience objects
app.get('/experience/all', (req, res) => {
    console.log('DEBUG endpoint /experience/all/: Getting all experiences')
    Operations.experiences_get_all(con, function(error, experiences) {

        // Log error
        if (error == null) {
            console.log('DEBUG endpoint /experience/all: error = ' + String(error))
        } 

        res.json({
            error: error,
            experiences: experiences
        })

    })
});

// TODO: Create an endpoint to get an experience object

// TODO: Create an endpoint to update an experience object

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
