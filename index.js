let num1 = 0; // Initialize num1 with a default value
let num2 = 0; // Initialize num2 with a default value

document.getElementById("num1-el").textContent = "Num1: " + num1;
document.getElementById("num2-el").textContent = "Num2: " + num2;

function updateNumbers() {
    num1 = parseFloat(document.getElementById("num1-input").value) || 0;
    num2 = parseFloat(document.getElementById("num2-input").value) || 0;

    document.getElementById("num1-el").textContent = "Num1: " + num1;
    document.getElementById("num2-el").textContent = "Num2: " + num2;
}

let sumEl = document.getElementById("sum-el");

function add() {
    updateNumbers();
    let result = num1 + num2;
    sumEl.textContent = "Sum: " + result;
}

function subtract() {
    updateNumbers();
    let result = num1 - num2;
    sumEl.textContent = "Sum: " + result;
}

function divide() {
    updateNumbers();
    let result = num1 / num2;
    sumEl.textContent = "Sum: " + result;
}

function multiply() {
    updateNumbers();
    let result = num1 * num2;
    sumEl.textContent = "Sum: " + result;
}
