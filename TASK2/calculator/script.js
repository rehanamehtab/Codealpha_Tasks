document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = Array.from(document.querySelectorAll(".btn"));
    let currentInput = '';
    let operator = '';
    let previousValue = '';

    function updateDisplay(value) {
        display.textContent = value;
    }

    function calculate() {
        try {
            const result = eval(currentInput);
            updateDisplay(result);
            currentInput = result;
        } catch {
            updateDisplay('Error');
            currentInput = '';
        }
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            if (button.classList.contains("number") || button.classList.contains("dot")) {
                if (currentInput === '0' && value !== '.') {
                    currentInput = value;
                } else {
                    currentInput += value;
                }
                updateDisplay(currentInput);
            } else if (button.classList.contains("operator")) {
                if (currentInput !== '') {
                    previousValue = currentInput;
                    operator = value;
                    currentInput = '';
                }
            } else if (button.classList.contains("equal")) {
                if (operator !== '') {
                    currentInput = `${previousValue} ${operator} ${currentInput}`;
                    calculate();
                    operator = '';
                    previousValue = '';
                }
            } else if (button.classList.contains("clear")) {
                currentInput = '';
                updateDisplay('0');
            } else if (button.classList.contains("exit")) {
                window.close();
            }
        });
    });
});
