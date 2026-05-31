let display = document.getElementById('display');
let expression = '';

function appendNumber(num) {
    expression += num;
    updateDisplay();
}

function appendOperator(operator) {
    if (expression !== '' && !isNaN(expression[expression.length - 1])) {
        expression += operator;
        updateDisplay();
    }
}

function updateDisplay() {
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    updateDisplay();
}

function deleteLastChar() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        if (expression !== '') {
            expression = eval(expression);
            updateDisplay();
        }
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    if (event.key >= '0' && event.key <= '9') {
        appendNumber(event.key);
    } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        appendOperator(event.key);
    } else if (event.key === 'Enter' || event.key === '=') {
        calculate();
    } else if (event.key === 'Backspace') {
        deleteLastChar();
    } else if (event.key === 'c' || event.key === 'C') {
        clearDisplay();
    }
});
