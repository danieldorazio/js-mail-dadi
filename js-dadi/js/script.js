const unserNamber = Math.floor(Math.random() * (6 - 1) ) + 1;

const computerNamber = Math.floor(Math.random() * (6 - 1) ) + 1;

let result;
if (unserNamber > computerNamber) {
    result = "Sei stato FORTUNATO per questa volta, vediamo se lo sarai ancora"
} else if (unserNamber === computerNamber){
    result = "Mi dispiace ma sono usciti due numeri UGUALI, riprova magari sarai più FORTUNATO"
} else {
    result = "Mi dispiace, quasta volta sei stato SFORTUNATO, perchè non riprovi, magari la prossima volta sarai più FORTUNATO"
}


const numeriElem = document.getElementById("numeri");
numeriElem.innerHTML += `Il numero del tuo dado è ${unserNamber} mentre qeullo del tuo avversario è ${computerNamber} ${result}`

const provocationsElem = document.querySelector("p");
provocationsElem.innerHTML += `${result}`
