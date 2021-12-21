let nCont = [];
let outputHtml = document.querySelector('.output-numbers');
alert('Hai 30 secondi di tempo per memorizzare i numeri che appariranno sullo schermo, sei pronto?')

function randomNumber() {
    while(nCont.length < 5) {
        let randomNum = Math.floor(Math.random() * (200 - 1 + 1) + 1);
        nCont.push(randomNum);
        if(!nCont.includes (randomNum)) {
            nCont.push(randomNum);
        };
    };
    outputHtml.innerHTML = nCont.sort(function(a, b){return a-b});
    return nCont
};

let randomGen = randomNumber();

let numeriUser = [];

setTimeout(function hideNumbers() {
outputHtml.className = 'display-none';
}, 30000);

setTimeout(function questions(){
    let domandaNum;
    alert('Ora inserisci i numeri visti uno alla volta, nell\'ordine che preferisci. Premi "Ok" quando sei pronto a partire!')
    while(numeriUser.length < 5) {
        domandaNum = parseInt(prompt('Inserisci uno dei numeri visti precedentemente'));
        numeriUser.push(parseInt(domandaNum));
    }
    console.log(numeriUser);
    console.log(nCont);

    let numeriIndovinati = [];
    let count = 0;
    for(i = 0; i < numeriUser.length; i++) {
        if(numeriUser[i] == nCont[0] || numeriUser[i] == nCont[1] || numeriUser[i] == nCont[2] || numeriUser[i] == nCont[3] || numeriUser[i] == nCont[4]){
            if(!numeriIndovinati.includes (numeriUser[i])) {
                numeriIndovinati.push(numeriUser[i]);
                count++;
            };
        };
    };

    outputHtml.classList.remove('display-none');

    if(count === 1) {
        outputHtml.innerHTML = `Hai indovinato ${count} numero` 
        outputHtml = document.querySelector('.guessed-numbers');
        outputHtml.innerHTML = `(${numeriIndovinati})`;
    } else {
        outputHtml.innerHTML = `Hai indovinato ${count} numeri`;
        outputHtml = document.querySelector('.guessed-numbers');
        outputHtml.innerHTML = `(${numeriIndovinati})`;
    };
}, 31000);
