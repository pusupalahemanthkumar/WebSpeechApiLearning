

// Getting DOM Here.
const output = document.querySelector(".output");
const bg = document.querySelector("html");
const hints = document.querySelector(".hints");
const btn =document.querySelector(".btn");

// Getting SpeechRecognition And Other Related Things  Here.
// Note : below we need to use "var" keyword not const
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

// Defining Grammar Here
const colors = [
  "aqua",
  "azure",
  "beige",
  "bisque",
  "black",
  "blue",
  "brown",
  "chocolate",
  "coral",
];
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = " + colors.join(" | ") + " ;";

// Initializing Speech Recognition  & Grammar Here.
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();

// Setting Up Grammar Here.
speechRecognitionList.addFromString(grammar, 1);

// Setting Up  few other properties of the recognition instance before we move on
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// Adding ColorsNames  In UI using JavaScript Here.
let colorHTML = "";
colors.forEach((color, idx) => {
  console.log(color, idx);
  colorHTML =
    colorHTML +
    `<li style="background-color:${color};"> ${color}</li>`;
});
hints.innerHTML = `<ul>${colorHTML}</ul>`;

// Adding Event Handler Here.
btn.addEventListener("click",()=>{
  recognition.start();
  console.log("Ready to Receive Color Command");
})

// Getting Result Here.
recognition.onresult=(event)=>{
  let color =event.results[0][0].transcript;
  output.textContent =`Result Received : ${color}.`;
  bg.style.background=color;
  
}

// On Speech End
recognition.onspeechend = ()=> {
  recognition.stop();
}

// On No Match 
recognition.onnomatch = (event)=> {
  output.textContent = 'I didnt recognise that color.';
}

recognition.onerror = (event)=> {
  output.textContent = 'Error occurred in recognition: ' + event.error;
}



