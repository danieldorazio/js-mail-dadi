//DATI
const email = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com", "paperina@gmail.com", "qui@gmail.com", "quo@gmail.com", "qua@gmail.com"];

// INPUT
const userEmail = prompt("inserisci la tua email");
console.log(userEmail);


// LOGIC
let flag = false;

for (let i = 0; i < email.length; i++) {
    if (userEmail === email[i]) {
        flag = true;
        
    }
}

// OUTPUT

const resultUser = document.getElementById("result");
if (flag) {
    resultUser.innerHTML += `<div>La tua email è registrata, puoi accedere</div>`
} else {
    resultUser.innerHTML += `<div>Non è registrata, clicca qui se la vuoi registra per registrare</div>`
}
