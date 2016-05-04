function clearPrompt() {
	var prompt = document.getElementById("prompt");
	prompt.value = '0';
	storedNum = '0';
	calculationFinished = true;
	operation = operations.none;
}

function clearPreviousResult() {
	var prompt = document.getElementById("prompt");
	if (calculationFinished) {
		prompt.value = '0';
		calculationFinished = false;
	};
}

function numInput(digit) {
	var prompt = document.getElementById("prompt")
	clearPreviousResult();
	if (prompt.value === '0') prompt.value = '';
	prompt.value += digit;

}

function insertDecimal() {
	var prompt = document.getElementById("prompt");
	clearPreviousResult();
	if (prompt.value.indexOf('.') === -1) prompt.value += '.'; 

}

operations = {
	none: function(left, right) {
		return right;
	},
	add: function(left, right) {
		return left + right;
	},

	multiply: function(left, right) {
		return left * right;
	}
};

function setOperation(command) {
	var prompt = document.getElementById("prompt");
	calculate();
	storedNum = prompt.value;
	if (operations.hasOwnProperty(command)) {
		operation = operations[command]; 
	}
}

function calculate() {
	var prompt = document.getElementById("prompt");
	prompt.value = operation(+storedNum, +prompt.value);
	calculationFinished = true;
	operation = operations.none;
};

if ('addEventListener' in window)
	window.addEventListener('load', clearPrompt);
else
	window.attachEvent('onload', clearPrompt)
