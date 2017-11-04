document.onkeyup = function(event){


	function game(){

	var colors = ["blue", "red", "purple", "black", "pink", "green", "gray", "orange", "yellow"];
	var word = colors[Math.floor(Math.random()*colors.length)];
	var guessesLeft = 10;
	var answerArray = []; 
	var text;	



	for (var i = 0; i < word.length; i++){
			asnwerArray[i] = "_";
		}



	for (guessesLeft > 0){

	text = answerArray.join(" ");
  	document.getElementById("answer").innerHTML = text;
	

	
	document.onkeyup = function(event){
		var letterInput = String.fromCharCode(event.key).toLowerCase();

	for (var i = 0; i < word.length; i++)
			if (if answerArray[i] == letterInput){
				answerArray[i] = letterInput;
				if (text === word){
					document.getElementById("congratulations").innerHTML = "Congratulations.  You won.";
					//document.body.style.backgroundColor = "word";
					function game();
				}
			}
			guessesLeft--;	
			document.getElementById("counter").innerHTML = "Guess Left " + guessesLeft;
    		document.getElementById("answer").innerHTML = answerArray.join(" ");
  }
  			if (guessesLeft == 0){
  				document.write("You lose the game.");
;  			}
}
		
}

}
function game();
}


function game();
};