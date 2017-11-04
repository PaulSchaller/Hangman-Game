var colors = ["blue", "red", "purple", "black", "pink", "green", "gray", "orange", "yellow"];
var word = colors[Math.floor(Math.random()*colors.length)];
var guessesLeft = 10;
var answerArray = []; 
var text;
var guesses = [];
console.log("helol")
function updateAnswerArray(){
	answerArray = [];
		for (var i = 0; i < word.length; i++){
			var wordLetter = word[i];
			if (guesses.includes(wordLetter)){
				answerArray.push(wordLetter);
			}
			else {
				answerArray.push("_");
			}
			// text = word.split("").join(" ");
			// console.log(text);
		}

}

document.onkeyup = function(event){
		var letterInput = String.fromCharCode(event.which).toLowerCase();
		updateAnswerArray();
		console.log(guesses, word, answerArray.join(" "))
		if (answerArray.join("") === word){
		document.getElementById("congratulations").innerHTML = "Congratulations.  You won.";
		// 					//document.body.style.backgroundColor = "word";
		}
		if (!guesses.includes(letterInput)){
			guesses.push(letterInput);
			if (!word.includes(letterInput)){
				guessesLeft--;
				document.getElementById("counter").innerHTML = "Guess Left " + guessesLeft;
			} else {
				updateAnswerArray();
				document.getElementById("answer").innerHTML = answerArray.join(" ");

			}
		}
		// for (var i = 0; i < word.length; i++) {

		// 	if (word[i] == letterInput){
		// 		answerArray[i] = letterInput;;

		// 		
		// 				}
		// 			}
		// 			guessesLeft--;	
		// 			document.getElementById("answer").innerHTML = answerArray.join(" ");

		// 			if (guessesLeft == 0){
		// 				document.getElementById("counter").innerHTML = "You lose the game.";
		// 				game();
		// 			}

		// 		}
		};