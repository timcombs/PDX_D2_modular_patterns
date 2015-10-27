var expect = require('chai').expect; // can just say expect instead of chai.expect
var greet = require('./greet.js');

// need this to run another instance of node so test can be run to make sure
// cli argument is handled correctly not sure how to fully implement yet.
// var cmdLineCheck = require('child_process');

// tests to make sure the greet function works
describe('access string', function() {
  it('should return a greeting', function(done){
    expect(greet.sayName.greet('Brian')).to.eql('hello Brian');
    done();
  });
});
