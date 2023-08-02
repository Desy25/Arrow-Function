// `((2 + 4) * (5 + 2) - 2) / 5`

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const log = value => console.log(value);

const step1 = sum(2, 4);               // 2 + 4 = 6
const step2 = sum(5, 2);               // 5 + 2 = 7
const step3 = multiply(step1, step2);  // 6 * 7 = 42
const step4 = subtract(step3, 2);      // 42 - 2 = 40
const result = divide(step4, 5);       // 40 / 5 = 8

log(result);
