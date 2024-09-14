let display = document.getElementById('display');
let buttons = document.querySelectorAll('.button');
let clearButton = document.getElementById('clear');

let calculator = {
    displayValue: '0',
    firstOperand: null,
    operator: null,
    waitingForSecondOperand: false,

    handleButtonPress: function(button) {
        let keyValue = button.textContent;

        if (keyValue === '=') {
            this.displayValue = "1 M1SS Y0U B0S51NG";
        } else if (keyValue === '÷' || keyValue === 'x' || keyValue === '-' || keyValue === '+') {
            if (this.firstOperand) {
                this.operator = keyValue;
                this.waitingForSecondOperand = true;
            } else {
                this.firstOperand = parseFloat(this.displayValue);
                this.operator = keyValue;
                this.waitingForSecondOperand = true;
            }
        } else if (keyValue === 'C') { // Handle Clear button press
            this.displayValue = '0';
            this.firstOperand = null;
            this.operator = null;
            this.waitingForSecondOperand = false;
        } else {
            if (this.waitingForSecondOperand) {
                this.displayValue = keyValue;
                this.waitingForSecondOperand = false;
            } else {
                if (this.displayValue === '0') {
                    this.displayValue = keyValue; // Update displayValue with the new key value
                } else {
                    this.displayValue += keyValue; // Append the new key value to the existing displayValue
                }
            }
        }

        display.textContent = this.displayValue; // Update the display with the new value
    },

    performOperation: function(firstOperand, operator, secondOperand) {
        switch (operator) {
            case '+':
                return firstOperand + secondOperand;
            case '-':
                return firstOperand - secondOperand;
            case 'x':
                return firstOperand * secondOperand;
            case '÷':
                return firstOperand / secondOperand;
        }
    }
};

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        calculator.handleButtonPress(button);
    });
});

clearButton.addEventListener('click', function() {
    calculator.handleButtonPress(clearButton);
});