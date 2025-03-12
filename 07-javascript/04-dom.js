// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const inputField = document.getElementById("userInput1");
const copyButton = document.getElementById("copy");
const outputArea = document.querySelector(".output");

const liveInputField = document.getElementById("userInput2");
const liveOutputArea = document.querySelector("#inputEventExample p");

// add an event listener on the target element

copyButton.addEventListener("click", copyText);
liveInputField.addEventListener("input", updateLiveText);

// callback function to handle event

// Callback functions
function copyText() {
  outputArea.textContent = inputField.value;
}

function updateLiveText() {
  liveOutputArea.textContent = liveInputField.value;
}

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const inputField2 = document.getElementById("userInput2");
const outputArea2 = document.querySelector("#inputEventExample p");
// add an event listener on the target element
inputField2.addEventListener("input", updateLiveText);
// callback function to handle event
function updateLiveText() {
  outputArea2.textContent = inputField2.value;
}
