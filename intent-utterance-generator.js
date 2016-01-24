(function(root) {
  'use strict';

  const intentUtteranceExpander = require('intent-utterance-expander');

  function intentUtteranceGenerator(intents) {
    var utterancesCollection = '';

    if (!(intents instanceof Object) || Array.isArray(intents)) {
      return new Buffer(utterancesCollection);
    }

    var intentsSize = Object.keys(intents).length;
    var i = 0;

    for (var intent in intents) {
      i++;

      var lines = intents[intent];
      var newline = i < intentsSize ? '\n' : '';

      if (Array.isArray(lines)) {
        var collection = lines.map(function(line) {
          return expand(intent, line);
        });

        utterancesCollection += (collection.join('') + newline);
      } else if (typeof lines === 'string') {
        utterancesCollection += (expand(intent, lines) + newline);
      }
    }

    function expand(intent, line) {
      var intentUtterances = intentUtteranceExpander(line).reduce(function(intentUtterance, phrase) {
        var utterance = intent + ' ' + phrase;
        return intentUtterance += (utterance + '\n');
      }, '');

      return intentUtterances;
    }

    return new Buffer(utterancesCollection);
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = intentUtteranceGenerator;
    }
    exports.intentUtteranceGenerator = intentUtteranceGenerator;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return intentUtteranceGenerator;
    });
  } else {
    root.intentUtteranceGenerator = intentUtteranceGenerator;
  }

})(this);
