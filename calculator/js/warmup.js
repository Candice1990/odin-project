// Prints to the console the greatest number in the given array
var my_max = function(...arr) {
	var max = Math.max.apply(null, arr);
	console.log(max);
};

my_max(20, 50, 10);
my_max(35, 70, 20, 15, 80);

// Prints to the console the number of vowels in the given strings
var vowel_count = function(string) {
	var vowels = string.match(/([aeiuoy])/ig);
	console.log(vowels.length);
};

vowel_count("This is a test to see how many vowels are in this sentence.");
console.log("Should be 19 printed above.");
vowel_count("It works!");
console.log("Should be 2 printed above.");


// Prints to the console the given string reversed
var reverse = function(string) {
	var backwards = string.split("").reverse().join("");
	console.log(backwards);
};

reverse("This is test!");
reverse("I reversed this string with my reverse function!");