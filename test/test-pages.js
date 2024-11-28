var expect  = require('chai').expect;
var request = require('request');

var port = process.env.PORT || process.argv[2] || 8080;
var path = '';

if (process.env.NODE_ENV === 'production') {
	path = 'https://evening-ridge-11930.herokuapp.com/';
} else {
    path = 'http://localhost:' + port;
}

it('Main page content', function() {
    request(path, function(error, response, body) {
        //console.log(error);
        expect(body).to.equal({'context': 'Welcome to the Miner Consumer Site back-end API. Please refer to the HATEOAS links for further calls.','links': [{'name': 'users', 'href': '/users/'},{'name': 'sites', 'href': '/sites/'}] });
        done();
    });
});
