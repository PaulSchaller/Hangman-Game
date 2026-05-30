var colors = ["blue", "red", "purple", "pink", "green", "orange", "yellow", "gray"];

var word;
var guessesLeft;
var answerArray;
var guesses;

console.log("hello");

function initializeGame() {
    word = colors[Math.floor(Math.random() * colors.length)];
    guesses = [];
    guessesLeft = 10;

    // Clear messages from previous game
    document.getElementById("congratulations").innerHTML = "";
    document.getElementById("lose").innerHTML = "";

    updateAnswerArray();
    updateGuessesLeft();
    updateGuessedLetters();

    console.log("New word:", word); // For testing
}

function updateAnswerArray() {
    answerArray = [];

    for (var i = 0; i < word.length; i++) {
        var wordLetter = word[i];

        if (guesses.includes(wordLetter)) {
            answerArray.push(wordLetter);
        } else {
            answerArray.push("_");
        }
    }

    document.getElementById("answer").innerHTML =
        answerArray.join(" ");
}

function updateGuessesLeft() {
    document.getElementById("counter").innerHTML =
        "Guesses Left: " + guessesLeft;
}

function updateGuessedLetters() {
    document.getElementById("guesses").innerHTML =
        "Guessed Letters: " + guesses.join(", ");
}

initializeGame();

document.onkeyup = function (event) {

    // Use modern keyboard input method
    var letterInput = event.key.toLowerCase();

    // Ignore non-letter keys
    if (!/^[a-z]$/.test(letterInput)) {
        return;
    }

    console.log("Key pressed:", letterInput);
    console.log("Current guesses:", guesses);
    console.log("Word:", word);
    console.log("Answer:", answerArray.join(""));

    // Only process letters that haven't been guessed yet
    if (!guesses.includes(letterInput)) {

        guesses.push(letterInput);
        updateGuessedLetters();

        if (!word.includes(letterInput)) {
            guessesLeft--;
            updateGuessesLeft();

            console.log("Guesses left:", guessesLeft);
        }

        // Refresh displayed word after every new guess
        updateAnswerArray();
    }

    // Check for win
    if (answerArray.join("") === word) {
        document.getElementById("congratulations").innerHTML =
            "Congratulations. You won!";

        setTimeout(function () {
            initializeGame();
        }, 1500);
    }

    // Check for loss
    else if (guessesLeft === 0) {
        document.getElementById("lose").innerHTML =
            "Sorry. You lose. The word was '" + word + "'.";

        setTimeout(function () {
            initializeGame();
        }, 1500);
    }
};
