var exports = module.exports;

// store greetPerson method in a literal object
exports.greetPerson = {
  sayHello: function(name) {
    return 'hello ' + name;
  }
};

// gets argument from command line and outputs to screen
var myArgs = process.argv.slice(2);
cliName = myArgs[0];
console.log('Hello ' + cliName);
