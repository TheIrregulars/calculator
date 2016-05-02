$(function() {
	$("input.number").click(numberButtonClicked)
});

var currentNumber = "";

function numberButtonClicked(clickEvent) {
	var numberClicked = clickEvent.target.value

	currentNumber = currentNumber + numberClicked

	$("span#prompt").html(currentNumber)  
};


