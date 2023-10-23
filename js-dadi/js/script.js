// INPUTT
const unserNamber = Math.floor(Math.random() * (6 - 1) ) + 1;

const computerNamber = Math.floor(Math.random() * (6 - 1) ) + 1;

// LOGIC
let result;
if (unserNamber > computerNamber) {
    result = "Sei stato FORTUNATO per questa volta, vediamo se lo sarai ancora"
} else if (unserNamber === computerNamber){
    result = "Mi dispiace ma sono usciti due numeri UGUALI, riprova magari sarai più FORTUNATO"
} else {
    result = "Mi dispiace, quasta volta sei stato SFORTUNATO, perchè non riprovi, magari la prossima volta sarai più FORTUNATO"
}

// OUTPUT
// TEXT
const provocazioneElem = document.createElement("p");
provocazioneElem.innerHTML = `${result}`;
provocazioneElem.classList.add("js_provocazione")

const textElem = document.querySelector(".text");
textElem.append(provocazioneElem);
// BUTTON GIOCA

const buttonElem = document.createElement("button");
buttonElem.innerHTML = `GIOCA`;
buttonElem.classList.add("js_button")

const containterElem = document.querySelector(".container");
containterElem.append(buttonElem);


// NUMBER DADI
const userDadoiElem = document.getElementById("user");
userDadoiElem.innerHTML += `${unserNamber}`;

const pcDadoElem = document.getElementById("pc");
pcDadoElem.innerHTML += `${computerNamber}`



// const provocationsElem = document.querySelector("p");
// provocationsElem.innerHTML += `${result}`


