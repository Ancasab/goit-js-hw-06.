// Scrieți un script care, atunci când se introduce un text în input#name-input (evenimentul input), înlocuiește valoarea lui span#name-output cu valoarea curentă din input#name-input. Dacă input-ul este gol, în acel span se va afișa "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

"use strict";

const inputNameElement = document.getElementById("name-input");
const outputNameElement = document.getElementById("name-output")


function updateOutputName() {
    outputNameElement.textContent = inputNameElement.value || "Anonymous";
};
 
inputNameElement.addEventListener('input', () => updateOutputName());

