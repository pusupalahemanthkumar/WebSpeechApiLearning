# Introduction To Web Speech API

### The Web Speech API makes web apps able to handle voice data. There are two components to this API:
-  Speech recognition is accessed via the SpeechRecognition interface, which provides the ability to recognize voice context from an audio input (normally via the device's default speech recognition service) and respond appropriately. Generally you'll use the interface's constructor to create a new SpeechRecognition object, which has a number of event handlers available for detecting when speech is input through the device's microphone. The SpeechGrammar interface represents a container for a particular set of grammar that your app should recognise. Grammar is defined using JSpeech Grammar Format (JSGF.)

- Speech synthesis is accessed via the SpeechSynthesis interface, a text-to-speech component that allows programs to read out their text content (normally via the device's default speech synthesiser.) Different voice types are represented by SpeechSynthesisVoice objects, and different parts of text that you want to be spoken are represented by SpeechSynthesisUtterance objects. You can get these spoken by passing them to the SpeechSynthesis.speak() method.

## Speech recognition
Speech recognition involves receiving speech through a device's microphone, which is then checked by a speech recognition service against a list of grammar (basically, the vocabulary you want to have recognised in a particular app.) When a word or phrase is successfully recognised, it is returned as a result (or list of results) as a text string, and further actions can be initiated as a result.

The Web Speech API has a main controller interface for this — SpeechRecognition — plus a number of closely-related interfaces for representing grammar, results, etc. Generally, the default speech recognition system available on the device will be used for the speech recognition — most modern OSes have a speech recognition system for issuing voice commands. Think about Dictation on macOS, Siri on iOS, Cortana on Windows 10, Android Speech, etc.
### Notes:
- **`SpeechRecognition.continuous: Controls whether continuous results are captured (true), or just a single result each time recognition is started (false).`**
- **`SpeechRecognition.lang: Sets the language of the recognition. Setting this is good practice, and therefore recommended.`**
- **`SpeechRecognition.interimResults: Defines whether the speech recognition system should return interim results, or just final results. Final results are good enough for this simple demo.`**
- **`SpeechRecognition.maxAlternatives: Sets the number of alternative potential matches that should be returned per result. This can sometimes be useful, say if a result is not completely clear and you want to display a list if alternatives for the user to choose the correct one from. But it is not needed for this simple demo, so we are just specifying one (which is actually the default anyway.)`**
