let displayElement = document.getElementById('display');
let currentInput = '0';
let isResultDisplayed = false;

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

function deleteDigit() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

function appendNumber(number) {
    if (isResultDisplayed) {
        currentInput = number.toString();
        isResultDisplayed = false;
    } else {
        if (currentInput === '0') {
            currentInput = number.toString();
        } else {
            currentInput += number;
        }
    }
    updateDisplay();
}

function appendSymbol(symbol) {
    if (isResultDisplayed) {
        isResultDisplayed = false;
    }
    currentInput += symbol;
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        isResultDisplayed = true;
    } catch (e) {
        currentInput = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    displayElement.textContent = currentInput;
}
