// INPUTT
const unserNamber = Math.floor(Math.random() * (6 - 1) ) + 1;

const computerNamber = Math.floor(Math.random() * (6 - 1) ) + 1;

// LOGIC
let result;
if (unserNamber > computerNamber) {
    result = "Sei stato FORTUNATO per questa volta, vediamo se lo sarai ancora"
} else if (unserNamber === computerNamber){
    result = "Parità sono usciti due numeri UGUALI, riprova magari sarai più FORTUNATO"
} else {
    result = "Sei stato SFORTUNATO, riprova, sarai più FORTUNATO"
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

// BUTTON AL CLICK
buttonElem.addEventListener("click", function() {
    location.reload();
})



// NUMBER DADI
const userDadoiElem = document.getElementById("user");
userDadoiElem.innerHTML += `${unserNamber}`;

const pcDadoElem = document.getElementById("pc");
pcDadoElem.innerHTML += `${computerNamber}`




