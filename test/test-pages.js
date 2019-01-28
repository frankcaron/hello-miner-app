var expect  = require('chai').expect;
var request = require('request');

var port = process.env.PORT || process.argv[2] || 8080;
var path = '';

if (process.env.NODE_ENV === 'production') {
	path = 'https://evening-ridge-11930.herokuapp.com/';
} else {
    path = 'http://localhost:' + port;
}

it('Main page content', function(done) {
    request(path, function(error, response, body) {
        expect(body).to.equal('hello Frank!');
        done();
    });
});