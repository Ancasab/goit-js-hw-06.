// Scrieți un script care:

// Va număra și afișa în consolă numărul total de categorii din ul#categories, adică elementele li.item.
// Pentru fiecare element li.item din lista ul#categories, va găsi și afișa în consolă titlul elementului (tag-ul <h2>) și numărul de elemente din acea categorie (toate elementele <li>).
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

"use strict"

const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
    const categoryTitle = category.querySelector("h2").textContent;
    const categoryElements = category.querySelector("ul li").textContent;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements:  ${categoryElements.length}`)
})