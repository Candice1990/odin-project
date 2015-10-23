
(function() {


	window.game = {};

	var turn;
	var player1;
	var tileX;
	var tileO;
	var right = $("#player-right");
	var left = $("#player-left");

	// Initializes the game and gets player one's marker.
	game.init = function() {
		var play = $("#play");
		tileX = [];
		tileO = [];

		$(play).html("Player 1 select X or O.");
		$(".player").one("click", function() {
			player1 = this.id;
			

			if (player1 === "player-left") {
				player1 = "X";
				turn = 1;
				game.instructionsX();
			} else {
				player1 = "O";
				turn = 2;
				game.instructionsO();
			}
		});
	}

	game.play = function() {
		game.init();
		// Waits for the player to click and places the marker.
		$(".tiles").one("click", function() {	
			$(".player").css("background-color", "#00f");
			if (turn % 2 === 0) {
				game.playerO.call(this, game.instructionsX);
			} else {
				game.playerX.call(this, game.instructionsO);
			}
			game.checkGame();
		});
	}

	// Gives the player X instructions.
	game.instructionsX = function() {
		var text;
		if (player1 === "X") {
			text = "Player 1, place your X.";
		} else {
			text = "Player 2, place your X.";
		}
		$(left).css("background-color", "#f00");
		$("#play").html(text);
	}

	// Gives the player O instructions.
	game.instructionsO = function() {
		var text;
		if (player1 === "O") {
			text = "Player 1, place your O.";
		} else {
			text = "Player 2, place your O";
		}
		$(right).css("background-color", "#f00");
		$("#play").html(text);
	}

	// Places the X marker for the player.
	game.playerX = function(callback) {
		$(this).html("X");
		tileX.push(parseInt(this.id));
		turn += 1;
		callback.call(this);
	}

	// Places the O marker for the player.
	game.playerO = function(callback) {
		$(this).html("O");	
		tileO.push(parseInt(this.id));
		turn += 1;
		callback.call(this);
	}

	game.checkGame = function() {  // Checks to see if a player has won the game.
		var winO = false;
		var winX = false;
		var winnerTiles = [];

		if (tileO.indexOf(1) !== -1 && tileO.indexOf(2) !== -1 && tileO.indexOf(3) !== -1) {				// O = [1,2,3]
			winO = true;
			winnerTiles.push(1,2,3);
		} else if (tileX.indexOf(1) !== -1 && tileX.indexOf(2) !== -1 && tileX.indexOf(3) !== -1) {			// X = [1,2,3]
			winX = true;
			winnerTiles.push(1,2,3);
		} else if (tileO.indexOf(1) !== -1 && tileO.indexOf(4) !== -1 && tileO.indexOf(7) !== -1) {			// O = [1,4,7]
			winO = true;
			winnerTiles.push(1,4,7);
		} else if (tileX.indexOf(1) !== -1 && tileX.indexOf(4) !== -1 && tileX.indexOf(7) !== -1) {			// X = [1,4,7]
			winX = true;
			winnerTiles.push(1,4,7);
		} else if (tileO.indexOf(1) !== -1 && tileO.indexOf(5) !== -1 && tileO.indexOf(9) !== -1) {			// O = [1,5,9]
			winO = true;
			winnerTiles.push(1,5,9);
		} else if (tileX.indexOf(1) !== -1 && tileX.indexOf(5) !== -1 && tileX.indexOf(9) !== -1) {			// X = [1,5,9]
			winX = true;
			winnerTiles.push(1,5,9);
		} else if (tileO.indexOf(2) !== -1 && tileO.indexOf(5) !== -1 && tileO.indexOf(8) !== -1) {			// O = [2,5,8]
			winO = true;
			winnerTiles.push(2,5,8);
		} else if (tileX.indexOf(2) !== -1 && tileX.indexOf(5) !== -1 && tileX.indexOf(8) !== -1) {			// X = [2,5,8]
			winX = true;
			winnerTiles.push(2,5,8);
		} else if (tileO.indexOf(3) !== -1 && tileO.indexOf(4) !== -1 && tileO.indexOf(5) !== -1) {			// O = [3,4,5]
			winO = true;
			winnerTiles.push(3,4,5);
		} else if (tileX.indexOf(3) !== -1 && tileX.indexOf(4) !== -1 && tileX.indexOf(5) !== -1) {			// X = [3,4,5]
			winX = true;
			winnerTiles.push(3,4,5);
		} else if (tileO.indexOf(3) !== -1 && tileO.indexOf(6) !== -1 && tileO.indexOf(9) !== -1) {			// O = [3,6,9]
			winO = true;
			winnerTiles.push(3,6,9);
		} else if (tileX.indexOf(3) !== -1 && tileX.indexOf(6) !== -1 && tileX.indexOf(9) !== -1) {			// X = [3,6,9]
			winX = true;
			winnerTiles.push(3,6,9);
		} else if (tileO.indexOf(3) !== -1 && tileO.indexOf(5) !== -1 && tileO.indexOf(7) !== -1) {			// O = [3,5,7]
			winO = true;
			winnerTiles.push(3,5,7);
		} else if (tileX.indexOf(3) !== -1 && tileX.indexOf(5) !== -1 && tileX.indexOf(7) !== -1) {			// X = [3,5,7]
			winX = true;
			winnerTiles.push(3,5,7);
		} else if (tileO.indexOf(4) !== -1 && tileO.indexOf(5) !== -1 && tileO.indexOf(6) !== -1) {			// O = [4,5,6]
			winO = true;
			winnerTiles.push(4,5,6);
		} else if (tileX.indexOf(4) !== -1 && tileX.indexOf(5) !== -1 && tileX.indexOf(6) !== -1) {			// X = [4,5,6]
			winX = true;
			winnerTiles.push(4,5,6);
		} else if (tileO.indexOf(7) !== -1 && tileO.indexOf(8) !== -1 && tileO.indexOf(9) !== -1) {			// O = [7,8,9]
			winO = true;
			winnerTiles.push(7,8,9);
		} else if (tileX.indexOf(7) !== -1 && tileX.indexOf(8) !== -1 && tileX.indexOf(9) !== -1) {			// X = [7,8,9]
			winX = true;
			winnerTiles.push(7,8,9);
		}

		if (winO === true || winX === true) {					// If a player has won the game
			if (winO === true) {
				if (player1 === "O") {
					$("#play").html("Player 1 wins! Play again?");		// Displays who won
				} else {
					$("#play").html("Player 2 wins! Play again?");
				}

			} else if (winX === true) {
				if (player1 === "X") {
					$("#play").html("Player 1 wins! Play again?");		// Displays who won
				} else {
					$("#play").html("Player 2 wins! Play again?");
				}
			}
			for (var i = 0; i < winnerTiles.length; i++) {
				$("#" + winnerTiles[i]).css("background-color", "#0f0");		// Turns the winning tiles green
			}
			
			$(".tiles").off("click");									// Disables ability to click X's and O's
			$("#play").click(function() {	
				$(right, left).css("background-color", "#00f");			// Resets the background color of the buttons
				$(".tiles").css("background-color", "#e6e6e6");			// Resets the background color of the tiles
				$(".tiles").html("&nbsp;");								// Clears the X's and O's from the board
				location.reload();										// Starts new game
			});


		}

		if (tileX.length > 4 || tileO.length > 4) {
			if (winO === false && winX === false) {
				$("#play").html("It's a draw. Play again?");
				$("#play").click(function() {
					location.reload();
				});
			}
		}	
	}

}());

game.play();