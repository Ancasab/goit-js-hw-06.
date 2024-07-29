// Scrieți un script de control al formularului de login.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Gestionarea trimiterii formularului form.login-form trebuie să fie în cadrul evenimentului submit.
// La trimiterea formularului, pagina nu trebuie să se reîncarce.
// Dacă formularul are câmpuri goale, afișați un alert care avertizează că toate câmpurile trebuie completate.
// Dacă utilizatorul a completat toate câmpurile și a trimis formularul, colectați valorile câmpului într-un obiect în care numele câmpului va fi numele proprietății, iar valoarea câmpului va fi valoarea proprietății. Pentru a accesa elementele formularului, folosiți proprietatea elements.
// Afișați obiectul cu datele introduse în consolă și ștergeți valorile câmpurilor din formular, folosind metoda reset.

"use strict";

    // VAR 1
// const loginForm = document.querySelector(".login-form");
// console.log(loginForm);
// const email = loginForm.elements.email;
// console.log(email);
// const password = loginForm.elements.password;
// console.log(password)

// loginForm.addEventListener("submit", (event) => { 
//     event.preventDefault();
//     if (email.value === "" || password.value === "") {
//         alert("Toate campurile trebuie completate !")
//         return;
        
//     } else {
//         alert("Formularul de login a fost trimis. Esti logat! ")
//     }
//     const userData = {
//         email,
//         password,
//     }
//     console.log(userData);

//     email.value = "";
//     password.value = "";

// })


  // VAR 2
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenim reîncărcarea paginii

    const email = loginForm.elements.email.value;
    const password = loginForm.elements.password.value;

    if (!email || !password) {
        alert('Toate câmpurile trebuie completate.');
        return;
    }

    const userData = {
        email,
        password
    };

    console.log(userData);

    loginForm.reset();
});
