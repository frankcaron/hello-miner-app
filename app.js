// using the http module
var express = require('express')
var app = express()
 
// look for PORT environment variable, 
// else look for CLI argument,
// else use hard coded value for port 8080
port = process.env.PORT || process.argv[2] || 8080;

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.end('hello Frank!')
})

//Launch listening server on port Heroku-capable port
app.listen(port, function () {
  console.log('App listening as would be expected!')
})
