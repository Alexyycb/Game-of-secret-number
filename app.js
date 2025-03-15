let listOfSecretNumbers = [];
let limitNumber = 200;
let secretNumber = generateRandomNumber();
function generateRandomNumber () {
    let chosenNumber = parseInt(Math.random() * limitNumber + 1);
    let amountOfSecretNumbers = listOfSecretNumbers.length;
    if (amountOfSecretNumbers == limitNumber) {
        listOfSecretNumbers = [];
    }
    if (listOfSecretNumbers.includes(chosenNumber)) {
        return generateRandomNumber();
        }
        else {
            listOfSecretNumbers.push(chosenNumber);
            console.log(listOfSecretNumbers);
            return chosenNumber;
        }
    }
let numberOfAttempts = 1;
function displayText(tag, text) {
let camp = document.querySelector(tag);
camp.innerHTML = text;
responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate:1.2});
}
function displayInitialMessage() {
    displayText('h1', 'Game of secret number');
    displayText('p', `Choose a number from 1 to ${limitNumber}`);
}
displayInitialMessage();
function checkKick() {
    console.log(secretNumber)
    let kick = document.querySelector('input').value;
    if (secretNumber == kick) {
        let wordAttempts = numberOfAttempts > 1 ? 'attempts' : 'attempt';
        let messageOfWinning = `The secret number is ${secretNumber}, you won in ${numberOfAttempts} ${wordAttempts}!`;
        displayText('h1', 'WIN!!!! XD');
        displayText('p', messageOfWinning);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        displayText('h1', 'It wasnt this time... ;(');
        if (secretNumber > kick) {
            displayText('p', `The secret number is greater than (>) ${kick}`);
        }
        else {
            displayText('p', `The secret number is less than (<) ${kick}`);
        }
        numberOfAttempts++;
        clearCamp();
    }
}
function clearCamp() {
    kick = document.querySelector('input');
    kick.value = '';
}
function restartTheGame() {
    secretNumber = generateRandomNumber();
     console.log(secretNumber);
    clearCamp();
    numberOfAttempts = 1;
    displayInitialMessage();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}