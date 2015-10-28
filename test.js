var expect = require('chai').expect; // can just say expect instead of chai.expect
var greet = require('./greet.js');

// need this to run another instance of node so test can be run to make sure
// command line argument is handled correctly not sure how to fully implement yet.
// var cmdLineCheck = require('child_process');

// test to make sure the greet function works - refactored for practice
describe('greeting test', function() {
  it('should return a greeting', function(done) {
    expect(greet.greetPerson.sayHello('Tim')).to.equal('hello Tim');
    done();
  });
});
