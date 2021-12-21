let numberContainer = [];
let outputHtml = document.querySelector('.output-numbers');
alert('Hai 30 secondi di tempo per memorizzare i numeri che appariranno sullo schermo, sei pronto?')

function randomNumber() {
    while(numberContainer.length < 5) {
        let randomNum = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        numberContainer.push(randomNum);
        if(!numberContainer.includes (randomNum)) {
            numberContainer.push(randomNum);
        };
    };
    outputHtml.innerHTML = numberContainer.sort(function(a, b){return a-b});
    return numberContainer
};

let randomGen = randomNumber();

let numeriUser = [];

setTimeout(function hideNumbers() {
outputHtml.className = 'display-none';
}, 30000);

setTimeout(function questions(){
    let domandaNum;
    alert('Ora inserisci i numeri visti uno alla volta, in ordine corretto. Premi "Ok" quando sei pronto a partire!')
    while(numeriUser.length < 5) {
        domandaNum = parseInt(prompt('Inserisci uno dei numeri visti precedentemente'));
        numeriUser.push(parseInt(domandaNum));
    }
    console.log(numeriUser);
    console.log(numberContainer);

    let numeriIndovinati = [];
    let count = 0;
    for(i = 0; i < numeriUser.length; i++) {
        if(numeriUser[i] == numberContainer[i]) {
            count++;
            numeriIndovinati.push(numeriUser[i]);
            console.log(numeriIndovinati)
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
