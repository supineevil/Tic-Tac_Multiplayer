var currentPlayer = "X";
var board = document.getElementById("board");
var squares = document.getElementsByClassName("square");
var resetButton = document.getElementById("reset");
var winner = document.getElementById("winner");

// add event listener to each square
for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function() {
		if (this.innerHTML === "") {
			this.innerHTML = currentPlayer;
			this.style.color = (currentPlayer === "X") ? "blue" : "red";
			currentPlayer = (currentPlayer === "X") ? "O" : "X";
			checkForWinner();
		}
	});
}

// add event listener to reset button
resetButton.addEventListener("click", function() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].innerHTML = "";
		squares[i].style.color = "black";
	}
	currentPlayer = "X";
	winner.innerHTML = "";
});

function checkForWinner() {
	var winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	for (var i = 0; i < winningCombinations.length; i++) {
		var square1 = squares[winningCombinations[i][0]];
		var square2 = squares[winningCombinations[i][1]];
		var square3 = squares[winningCombinations[i][2]];
		
		if (square1.innerHTML !== "" && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML) {
			winner.innerHTML = "Player " + square1.innerHTML + " wins!";
			return;
		}
	}

	// check for tie game
	var tieGame = true;
	for (var i = 0; i < squares.length; i++) {
		if (squares[i].innerHTML === "") {
			tieGame = false;
			break;
		}
	}
	if (tieGame) {
		winner.innerHTML = "Tie game!";
	}
}





































// var currentPlayer = "X";
// var board = document.getElementById("board");
// var squares = document.getElementsByClassName("square");
// var resetButton = document.getElementById("reset");
// var winnerMessage = document.getElementById("winner-message");

// // add event listener to each square
// for (var i = 0; i < squares.length; i++) {
// 	squares[i].addEventListener("click", function() {
// 		if (this.innerHTML === "") {
// 			this.innerHTML = currentPlayer;
// 			this.style.color = (currentPlayer === "X") ? "blue" : "red";
// 			currentPlayer = (currentPlayer === "X") ? "O" : "X";
// 			checkForWinner();
// 		}
// 	});
// }

// // add event listener to reset button
// resetButton.addEventListener("click", function() {
// 	for (var i = 0; i < squares.length; i++) {
// 		squares[i].innerHTML = "";
// 		squares[i].style.color = "black";
// 	}
// 	currentPlayer = "X";
// 	winnerMessage.innerHTML = "";
// });

// function checkForWinner() {
// 	// check rows
// 	for (var i = 0; i < squares.length; i += 3) {
// 		if (squares[i].innerHTML !== "" && squares[i].innerHTML === squares[i+1].innerHTML && squares[i].innerHTML === squares[i+2].innerHTML) {
// 			winnerMessage.innerHTML = squares[i].innerHTML + " wins!";
// 			return;
// 		}
// 	}

// 	// check columns
// 	for (var i = 0; i < 3; i++) {
// 		if (squares[i].innerHTML !== "" && squares[i].innerHTML === squares[i+3].innerHTML && squares[i].innerHTML === squares[i+6].innerHTML) {
// 			winnerMessage.innerHTML = squares[i].innerHTML + " wins!";
// 			return;
// 		}
// 	}

// 	// check diagonals
// 	if (squares[0].innerHTML !== "" && squares[0].innerHTML === squares[4].innerHTML && squares[0].innerHTML === squares[8].innerHTML) {
// 		winnerMessage.innerHTML = squares[0].innerHTML + " wins!";
// 		return;
// 	}

// 	if (squares[2].innerHTML !== "" && squares[2].innerHTML === squares[4].innerHTML && squares[2].innerHTML === squares[6].innerHTML) {
// 		winnerMessage.innerHTML = squares[2].innerHTML + " wins!";
// 		return;
// 	}

// 	// check for tie
// 	var count = 0;
// 	for (var i = 0; i < squares.length; i++) {
// 		if (squares[i].innerHTML !== "") {
// 			count++;
// 		}
// 	}
// 	if (count === squares.length) {
// 		winnerMessage.innerHTML = "It's a tie!";
// 	}
// }
