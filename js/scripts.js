var add = function(number1, number2) {
	return number1 + number2;
};
var number1 = parseInt(prompt("Choose any number:"));
var number2 = parseInt(prompt("Choose another number:"));
var resultA = add(number1,number2);
alert(resultA);

var subtract = function(number1, number2) {
	return number1 - number2;
};
var number1 = parseInt(prompt("Choose any number:"));
var number2 = parseInt(prompt("Choose another number:"));
var resultS = subtract(number1,number2);
alert(resultS);

var multiply = function(number1, number2) {
	return number1 * number2;
};
var number1 = parseInt(prompt("Choose any number:"));
var number2 = parseInt(prompt("Choose another number:"));
var resultM = multiply(number1, number2);
alert(resultM);

var divide = function(number1, number2) {
	return number1 / number2;
};
var number1 = parseInt(prompt("Choose any number:"));
var number2 = parseInt(prompt("Choose another number:"));
var resultD = divide(number1, number2);
alert(resultD);

