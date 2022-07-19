//1. create functions for: add, subtract, multiply, divide
const add = function(a, b) {
    return a + b;	
   };
const subtract = function(a, b) {
    return a - b;
};   
const multiply = function(a, b) {
    return a * b;
};  
const divide = function(a, b) {
    return a / b;
}

//2. crate function OPERATE that takes an operator and 2 numbers then
    //calls one of the above functions on the numbers
  
const operate = function(num1, num2, operator) {
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (operator == "*") {
    return multiply(num1, num2);
  } else if (operator == "/") {
    return divide(num1, num2);
  }
}

//3. Create a basic HTML calculator with buttons for each digit,
    //each of the above functions and an “Equals” key.
    //dont worry yet about wiring it together with js functions

