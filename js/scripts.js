$(function() {
	$("input.number").click(numberButtonClicked)
});

var currentNumber = "";

function numberButtonClicked(clickEvent) {
	var numberClicked = clickEvent.target.value

	currentNumber = currentNumber + numberClicked

	$("span#prompt").html(currentNumber)  

$(function() {
	$("input.operator").click(operatorButtonClicked)
});

	var currentOperator = currentNumber + numberClicked;

function operatorButtonClicked(Event) {
	var operatorClicked = Event.target.value

	$("span#prompt").html(currentOperator)
};};