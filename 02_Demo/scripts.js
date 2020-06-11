// Getting DOM Here.
const inputForm = document.querySelector("form");
const inputTxt = document.querySelector(".txt");
const voiceSelect = document.querySelector("select");
const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector(".pitch-value");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector(".rate-value");

let voices = [];

// Getting speechSynthesis Here.
const synth = window.speechSynthesis;

// Utility Functions to get different voices options.
const populateVoiceList = () => {
  voices = synth.getVoices();
  for (i = 0; i < voices.length; i++) {
    const options = document.createElement("option");
    options.textContent = `${voices[i].name} ${voices[i].lang}`;
    if (voices[i].default) {
      options.textContent += `---DEFAULT`;
    }
    options.setAttribute("data-lang", voices[i].lang);
    options.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(options);
  }
};

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

// Event Handling Here.
inputForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption = voiceSelect.selectedOptions[0].getAttribute(
    "data-name"
  );
  for (i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  utterThis.pitch = pitch.value;
  utterThis.rate = rate.value;
  synth.speak(utterThis);

   utterThis.onpause = function(event) {
    var char = event.utterance.text.charAt(event.charIndex);
    console.log('Speech paused at character ' + event.charIndex + ' of "' +
    event.utterance.text + '", which is "' + char + '".');
  }
});


//Updating the displayed pitch and rate values
pitch.addEventListener("change", () => {
  console.log(pitchValue);
  pitchValue.textContent = pitch.value;
});
rate.addEventListener("change", () => {
  console.log(rate.value);
  rateValue.textContent = rate.value;
});
