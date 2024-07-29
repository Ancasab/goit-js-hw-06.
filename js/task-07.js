// Scrieți un script care răspunde la modificarea valorii din input#font - size - control(evenimentul input) și modifică stilurile inline al span#text prin actualizarea proprietății font - size.Ca rezultat, atunci când glisați scrollbar - ul, dimensiunea textului se va schimba.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

"use strict";

const fontSizeControl = document.getElementById('font-size-control');
const textElement = document.getElementById('text');

fontSizeControl.addEventListener('input', () => {
    const fontSize = fontSizeControl.value + 'px';
    console.log(`New fontsize is: ${fontSize}`)
    textElement.style.fontSize = fontSize;
});







//Nu merge codul de mai jos si nu prea inteleg ce gresesc

// let previousValue = fontSizeControl.value
// console.log(`Previous value is: ${previousValue}`);

// fontSizeControl.addEventListener("input", () => {
//     const currentValue = fontSizeControl.value
//     console.log(currentValue);
//     const direction = currentValue > previousValue ? "right" : "left";
//     const fontSize = currentValue + (direction === "right" ? +'px' : '-px');
//     textElement.style.fontSize = fontSize;
// }) 


