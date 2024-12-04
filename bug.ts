function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

let result: number = add(5,3);
console.log(result); //Outputs 8
result = subtract(5,3);
console.log(result); //Outputs 2
result = multiply(5,3);
console.log(result); //Outputs 15
result = divide(5,0);
console.log(result); //Throws error: Cannot divide by zero