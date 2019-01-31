// using the http module
var express = require('express')
var app = express()

//Helpers
var db = require('./db.js')
 
// look for PORT environment variable, 
// else look for CLI argument,
// else use hard coded value for port 8080
const port = process.env.PORT || process.argv[2] || 8080;

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.json({'context': 'Welcome to the Miner Consumer Site back-end API. Please refer to the HATEOAS links for further calls.','links': [{'name': 'users', 'href': '/users/'},{'name': 'sites', 'href': '/sites/'}] });
  res.end();
})

//Define request response in root URL (/)
app.get('/users', db.getUsers)

//Define request response in root URL (/)
app.get('/sites', db.getSites)

//Launch listening server on port Heroku-capable port
app.listen(port, function () {
  console.log('App listening as would be expected!')
})
