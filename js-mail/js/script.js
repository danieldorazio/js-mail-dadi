//DATI
const email = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com", "paperina@gmail.com", "qui@gmail.com", "quo@gmail.com", "qua@gmail.com"];

// INPUT
const userEmail = document.getElementById("mail");
const userEmailValue = userEmail.value;
console.log(userEmailValue);

const buttonSend = document.createElement("button");
buttonSend.innerHTML = "INVIA"

const inputElem = document.querySelector(".input");
inputElem.append(buttonSend);

// FUNZIONAMEMTO AL CLICK

buttonSend.addEventListener("click", function() {
    // INPUT
    const userEmailValue = userEmail.value;
    console.log(userEmailValue);

    // LOGIC
    let flag = false;

    for (let i = 0; i < email.length; i++) {
        if (userEmailValue === email[i]) {
            flag = true;
        }
    }

    // OUTPUT
    const resultUser = document.createElement("div");
    resultUser.classList.add("resultUser");
    if (flag) {
        resultUser.innerHTML = `<p>La tua email è registrata, puoi accedere</p>`
    } else {
        resultUser.innerHTML = `<p>Non è registrata, clicca qui se la vuoi registra per registrare</p>`
        
        // REGISTRATI BUTTON
        const addButton = document.createElement("button");
        addButton.innerHTML = "Registrati";

        const resultUserElem = document.querySelector("div");
        resultUserElem.append(addButton);

        // BUTTON CLICK
        addButton.addEventListener ("click", function(){
            email.push(userEmailValue)
            console.log(email);
            resultUser.innerHTML = `<p>Registrato</p>`
        })
    }

    const containerElem = document.querySelector(".container");
    containerElem.append(resultUser);
})

