# intent-utterance-expander

> [Alexa Skills Kit Sample Utterances](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/defining-the-voice-interface) generator.

# Install

```bash
npm install intent-utterance-generator
```

# Usage

The generator expects an object with intent names as keys and phrases to expand as the values. It uses [intent-utterance-expander](https://github.com/miguelmota/intent-utterance-expander) to expand phrases.


The result is a *Buffer* containing the generated expanded phrases which you can then copy over it to the Sample Utterances text field in the Alexa Skills Kit portal.


```javascript
const intentUtteranceGenerator = require('intent-utterance-generator');

var intents = {
  StartNewGameIntent: [
    '(start|begin|launch) new game',
    'start over'
  ],
  HighScoreIntent: 'What are the (top|high) scores'
};

console.log(intentUtteranceGenerator(intents).toString());

/*
StartNewGameIntent start new game
StartNewGameIntent begin new game
StartNewGameIntent launch new game
StartNewGameIntent start over

HighScoreIntent What are the top scores
HighScoreIntent What are the high scores
*/
```

# Test

```bash
npm test
```

# License

MIT
