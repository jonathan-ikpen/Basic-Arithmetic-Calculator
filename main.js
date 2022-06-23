let operator = prompt(`
Choose an operation: 

    1. Addition ➕
    2. Subtraction ➖
    3. Multiplication ❌
    4. Division ➗
`);

let num1 = parseFloat(prompt("input first number: "));
let num2 = parseFloat(prompt("input second number: "));
let result;

if (operator == 1) {
  result = num1 + num2;
} else if (operator == 2) {
  result = num1 - num2;
} else if (operator == 3) {
  result = num1 * num2;
} else if (operator == 4) {
  result = num1 / num2;
}

console.log(result);

prompt(`
    
    Result: ${result}

`);
