alert("game(a).js loaded");
var colors = ["blue", "red", "purple", "pink", "green", "orange", "yellow", "gray"];

var word;
var guessesLeft;
var answerArray;
var guesses;

initializeGame();

function initializeGame() {
    word = colors[Math.floor(Math.random() * colors.length)];
    console.log("Selected word:", word);
    guessesLeft = 10;
    guesses = [];

    answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }

    updateDisplay();
}

function updateDisplay() {
    document.getElementById("answer").textContent =
        answerArray.join(" ");

    document.getElementById("counter").textContent =
        "Guesses Left: " + guessesLeft;

    document.getElementById("guesses").textContent =
        "Guessed Letters: " + guesses.join(", ");

    document.getElementById("congratulations").textContent = "";
    document.getElementById("lose").textContent = "";
}

function guessLetter(letter) {
    letter = letter.toLowerCase();

    // Ignore invalid guesses
    if (letter.length !== 1 || !/[a-z]/.test(letter)) {
        return;
    }

    // Ignore repeated guesses
    if (guesses.includes(letter)) {
        return;
    }

    guesses.push(letter);

    var found = false;

    for (var i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            answerArray[i] = letter;
            found = true;
        }
    }

    if (!found) {
        guessesLeft--;
    }

    updateDisplay();

    // Win check
    if (answerArray.join("") === word) {
        document.getElementById("congratulations").textContent =
            "🎉 Congratulations! You guessed the word: " + word;
    }

    // Lose check
    if (guessesLeft <= 0) {
        document.getElementById("lose").textContent =
            "❌ Game Over! The word was: " + word;
    }
}

// Listen for keyboard input
document.addEventListener("keydown", function(event) {
    if (
        guessesLeft > 0 &&
        answerArray.join("") !== word
    ) {
        guessLetter(event.key);
    }
});
