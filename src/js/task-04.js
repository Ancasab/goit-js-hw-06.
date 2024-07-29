// Contorul este format dintr-un tag span și două butoane care, atunci când sunt apăsate, ar trebui să-și mărească sau scadă valoarea cu unu.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Declarați o variabilă counterValue ce va stoca valoarea curentă a contorului și asignați-i valoarea 0 pentru început.
// Adăugați click handler pe butoane, în interiorul cărora vei mări sau micșora valoarea contorului.
// Printeaza in consola noua valoare a variabilei counterValue.

"use strict";

const counterValueElement = document.getElementById('value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');


let counterValue = 0;


function updateCounterValue(newValue) {
    counterValueElement.textContent = newValue;
    console.log('New counter:', newValue);
}

decrementButton.addEventListener('click', () => {
  updateCounterValue(counterValue-=1);
});

incrementButton.addEventListener('click', () =>{
  updateCounterValue(counterValue+=1);
});

// Afișajul cu valoarea inițială
// updateCounterValue(counterValue);




