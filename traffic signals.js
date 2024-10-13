let stopButtonElement = document.getElementById("stopButton");
let stopLightElement = document.getElementById("stopLight");

let readyButtonElement = document.getElementById("readyButton");
let readyLightElement = document.getElementById("readyLight");

let goButtonElement = document.getElementById("goButton");
let goLightElement = document.getElementById("goLight");

function stopButton() {
    stopButtonElement.style.backgroundColor = "#cf1124";
    stopLightElement.style.backgroundColor = "#cf1124";

    readyButtonElement.style.backgroundColor = "#1f1d41";
    readyLightElement.style.backgroundColor = "#4b5069";

    goButtonElement.style.backgroundColor = "#1f1d41";
    goLightElement.style.backgroundColor = "#4b5069";
}

function readyButton() {
    readyButtonElement.style.backgroundColor = "#f7c948";
    readyLightElement.style.backgroundColor = "#f7c948";

    stopButtonElement.style.backgroundColor = "#1f1d41";
    stopLightElement.style.backgroundColor = "#4b5069";

    goButtonElement.style.backgroundColor = "#1f1d41";
    goLightElement.style.backgroundColor = "#4b5069";
}

function goButton() {
    goButtonElement.style.backgroundColor = "#199473";
    goLightElement.style.backgroundColor = "#199473";

    readyButtonElement.style.backgroundColor = "#1f1d41";
    readyLightElement.style.backgroundColor = "#4b5069";

    stopButtonElement.style.backgroundColor = "#1f1d41";
    stopLightElement.style.backgroundColor = "#4b5069";
}