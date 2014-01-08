var exec = require("child_process").exec;

var createHamlPreprocessor = function(args, config, logger, helper) {
  config = config || {};
  var log = logger.create('preprocessor.haml');

  return function(content, file, done) {
    log.debug('Processing "%s".', file.originalPath);
    exec('haml ' + file.originalPath, function (err, stdout, stderr) {
      done(stdout);
    });
  };
};

createHamlPreprocessor.$inject = ['args', 'config', 'logger', 'helper'];

// PUBLISH DI MODULE
module.exports = {
  'preprocessor:haml': ['factory', createHamlPreprocessor]
};
