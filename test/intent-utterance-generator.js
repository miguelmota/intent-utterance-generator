var test = require('tape');
var intentUtteranceGenerator = require('../intent-utterance-generator');

test('intentUtteranceGenerator', function (t) {
  'use strict';

  t.plan(7);

  var intents = {
    StartNewGameIntent: [
      '(start|begin|launch) new game',
      'start over'
    ],
    HighScoreIntent: 'What are the (top|high) scores'
  };

  t.deepEqual(intentUtteranceGenerator().toString(), '');
  t.deepEqual(intentUtteranceGenerator(2342).toString(), '');
  t.deepEqual(intentUtteranceGenerator({}).toString(), '');
  t.deepEqual(intentUtteranceGenerator([]).toString(), '');
  t.deepEqual(intentUtteranceGenerator(['adsf']).toString(), '');
  t.deepEqual(intentUtteranceGenerator(function() {}).toString(), '');
  t.deepEqual(intentUtteranceGenerator(intents).toString(), `StartNewGameIntent start new game
StartNewGameIntent begin new game
StartNewGameIntent launch new game
StartNewGameIntent start over

HighScoreIntent What are the top scores
HighScoreIntent What are the high scores
`);
});
