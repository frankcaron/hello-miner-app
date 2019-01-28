var expect  = require('chai').expect;
var request = require('request');

//Test Main Page Content
it('Main page content', function(done) {
    request('http://localhost:8080' , function(error, response, body) {
        expect(body).to.equal('hello Frank!');
        done();
    });
});