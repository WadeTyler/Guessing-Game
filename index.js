
var randomNum = -1;
var inputNum = "";
var guessedNums = [];
var numberOfGuesses = 0;

function guess() {
    assignInputNum();
    guessedNums.push(inputNum);
    numberOfGuesses++;

    if (inputNum == randomNum) {
        correct();
        return;
    }

    else if (inputNum > randomNum) {
        lower();
    }

    else if (inputNum < randomNum) {
        higher();
    }

    

    document.getElementById('guessedNumbers').innerHTML = "Guessed numbers are: " + guessedNums;
    document.getElementById('numGueses').innerHTML = "No. of guess: " + numberOfGuesses;


}

function assignInputNum() {
    inputNum = document.getElementById('textBox').value;
}

function assignRandomNum() {
    randomNum = Math.floor(Math.random() * 100) + 1;
}
assignRandomNum();


function lower() {
    document.getElementById('higherOrLower').innerHTML = "Your guess is too high";
}

function higher() {
    document.getElementById('higherOrLower').innerHTML = "Your guess is too low";
}

function correct() {
    document.getElementById('higherOrLower').innerHTML = "Yippee!! You win!";
    document.getElementById('numGueses').innerHTML = "The number was: " + randomNum;
    document.getElementById('guessedNumbers').innerHTML = "you guess it in " + numberOfGuesses + " guesses";
}

var textBox = document.getElementById("textBox");
textBox.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        guess();
    }
})