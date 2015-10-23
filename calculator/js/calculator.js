var mathArray = [];
var number = "0";
screen(number);

// Used to put var number and print it to the input box #screen
function screen(value) {
	document.getElementById("screen").value = value;
}

// Takes users button clicks and adds them to var number and runs screen();
function buttonPress(num) {
	if (number !== "0") {
		number += "" + num;
	} else {
		number = num;
	}
	screen(number);
}

// Clear
function operators(val) {
	if(val === "clear") { 
		mathArray = [];
		number = "0";
		screen(number);
	} else if(val === "divide") {
		mathArray.push(number, "/");
		number = "0";
	} else if (val === "multiply") {
		mathArray.push(number, "*");
		number = "0";
	} else if (val === "subtract") {
		mathArray.push(number, "-");
		number = "0";
	} else if (val === "add") {
		mathArray.push(number, "+");
		number = "0";
	} else if (val === "equal") {
		mathArray.push(number);
		var equals = eval(mathArray[0] + mathArray[1] + mathArray[2]); // Converts the array into a math problem (i.e. "7", "+", "8" is now 7 + 8) and solves
		screen(equals);
		mathArray = []; // Empties the array
		number = equals; // Replaces the number variable with the solution so as to push that number into mathArray[0] when a operator is chosen.
	} else {
		screen("Error");
	}
}