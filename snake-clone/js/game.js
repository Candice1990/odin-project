$(document).ready(function() {
  Game.menu();

});

var Game = (function() {

	var score;
	var food;
	var count;
	var snakePosition = [[]];
	var snakeHead = [];
	var foodX;
	var foodY;
	var snakeDirection;

  // Made the init functions to set all variable back to the
  function init() {
  	
    score = 0;
    food = 0;
    count = 0;
    snakePosition = [[]];
    foodX = null;
    foodY = null;
  }

  function paintSnakeHead(x, y) {
  	
    // Adds color to the first div of the snake. This is the div the player will control.
    $("div[data-x=" + x + "][data-y=" + y + "]")
      .css("background-color", "#fff")
      .addClass("snake");
    if (count === 0) {
      snakePosition = [[20, 20]];
    } else {
      snakePosition[count] = [x, y];
      
    }
  }

  // Gets the difference of the count and score variables and subtracts them by 1. Removes the tail from the snake and changes the 
  // board back to black.
  function removeTail() {
  	
    if (count > 1) {
      var tailCount = count - 1 - score;
      $("div[data-x=" + snakePosition[tailCount][0] + "][data-y=" + snakePosition[tailCount][1] + "]")
        .css("background-color", "#000")
        .removeClass("snake");
    }
  }

  function randomNumber() {
  	
      foodX = Math.floor(Math.random() * 40);
      foodY = Math.floor(Math.random() * 40);
    }
    // Detects collision with the food and adds one div to the snake body.
  function placeFood() {
  	
    if (score === food) {
      randomNumber();
      food += 1;
      $("div[data-x=" + foodX + "][data-y=" + foodY + "]").css("background-color", "red");
    } else if (foodX === snakeHead[0] && foodY === snakeHead[1]) {
      score += 1;
    }

  }

  // Takes player input and points the snake in the suggested direction.
  function direction() {
  
    $(document).keydown(function(e) {
      e.preventDefault();
      switch (e.which) {
        case 37:
          snakeDirection = 'left';
          //left arrow key
          break;
        case 38:
          snakeDirection = 'up';
          //up arrow key
          break;
        case 39:
          snakeDirection = 'right';
          //right arrow key
          break;
        case 40:
          snakeDirection = 'down';
          //bottom arrow key
          break;
      }

    });
  }
  // Unable to get clearInterval to work properly. Put in interval as params to narrow scope to no avail. Tried global var too.
  function start() {
  	var interval = setInterval(function() {move(interval)}, 200);
  }

  function stop(interval) {
  	window.clearInterval(interval);
  	gameover();
  }

  // Moves snake in whatever direction the snakeDirection variable contains.
  function move(interval) {
  	 
	    switch (snakeDirection) {
	      case 'left':
	        snakeHead[0] -= 1;
	        // Moves the snake left
	        break;
	      case 'up':
	        snakeHead[1] -= 1;
	        // Moves the snake up
	        break;
	      case 'right':
	        snakeHead[0] += 1;
	        // Moves the snake right
	        break;
	      case 'down':
	        snakeHead[1] += 1;
	        // Moves the snake down
	        break;
	    }
	    count += 1;
	    paintSnakeHead(snakeHead[0], snakeHead[1]);
	    removeTail();
      placeFood();
      scoreDisplay();
	    direction();

	    // Checks to see if the snake has struck the edge of the screen or if it has struck itself
	    if (snakeHead[0] > 39 || snakeHead[0] < 0) {
      	stop(interval);
	    } else if (snakeHead[1] > 39 || snakeHead[1] < 0) {
      	stop(interval);	
	    }
	    	console.log("interval: " + interval);
  }

  // Displays instructions to the game.
  function menu() {
  	
    init();
    $(".gameover").hide();
    scoreDisplay();
    $("#play").click(function() {
      $(".menu").hide();
      play();
    });

  }

  // Displays the score above the board.
  function scoreDisplay() {
  	
    $("#score").html("Score: " + score);
  }

  function play() {
    render(40);
    snakeHead = [20, 20];
    snakeDirection = 'right';
    start();
  }

  function gameover() {
    $('.grid').hide();
    $('.gameover').show();
    $("#playerScore").append(score);
    $('#restart').click(function() {
      $(".gameover").hide();
      	init();
      	play();
	    });
    $('#menu').click(function() {
      $(".menu").show();
	      menu();
    });
  }

  // 40x40 grid to use as the game board.
  function render(size) {
    // Divides the divs by the board size
    var grid = Math.floor(640 / size);
    // Loop for the y values 
    for (var y = 0; y < size; y++) {
      // Loop for the x values
      for (var x = 0; x < size; x++) {
        // Appends the grid divs to the board with data-x & data-y values
        $('#board').append('<div class="grid" data-x="' + x + '" data-y="' + y + '"></div>');
      };

    };

    // Sets the grid divs width and height
    var gridDiv = $('.grid');
    $(gridDiv).css({
      "width": grid,
      "height": grid
    });

    $(gridDiv).css('background-color', '#000');

  }

  return {
    menu: menu
  };
})();