//local Variables
var wins = 0;
var guessesRemaining = 10;
var gameFinished = false;

//Computer Choice Array:
var wordArray = ["baku", "kabul", "berlin", "bangui", "seoul", "beirut", "sofia"];
var wordChoice = wordArray[Math.floor(Math.random() * wordArray.length)];
console.log(wordChoice);

var alreadyGuessed = [];
var playSpace;

//keypress function to start and logs in console
document.onkeypress = function(event) {
    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();
    lettersAlredyGuessed.innerHTML += userGuess + " ";
    if (wordChoice.includes(userGuess)) {
        // TODO: Put userGuess into playSpace at position 0
        var letterPosition = wordChoice.indexOf(userGuess);
        playSpace[letterPosition] = userGuess;
        drawPlaySpace();
        if (playSpace.join('') === wordChoice) {
            gameFinished = true;
            wins++;
            $('#total-wins').text(wins);
            resetBack();
        }
        console.log(playSpace.join(''), wordChoice)
    }

};

//selecting element
var lettersAlredyGuessed = document.getElementById('already-guessed');

//functions for creating underscores and spaces between the underscores
function drawBlanks() {
    var underscoreArray = [];
    for (i = 0; i < wordChoice.length; i++) {
        underscoreArray.push("_");
    }
    return underscoreArray;
}

var playSpace = drawBlanks();

function resetBack() {
    console.log('reset')
    wordChoice = wordArray[Math.floor(Math.random() * wordArray.length)];
    lettersAlredyGuessed.innerHTML = "";
    playSpace = drawBlanks();
    setTimeout(drawPlaySpace, 1000);
    // drawPlaySpace();
}

function drawPlaySpace() {
    for (i = 0; i < playSpace.length; i++) {
        document.getElementById("current-word").innerHTML = playSpace.join(" ");
    }
}

//drawPlaySpace();