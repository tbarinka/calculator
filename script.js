

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


  
const display = document.querySelector('#display')
const btn = document.querySelectorAll('.btn');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const btn4 = document.querySelector('#btn-4');
const btn5 = document.querySelector('#btn-5');
const btn6 = document.querySelector('#btn-6');
const btn7 = document.querySelector('#btn-7');
const btn8 = document.querySelector('#btn-8');
const btn9 = document.querySelector('#btn-9');
const btnAC = document.querySelector('#btn-AC');
const operatorBtn = document.querySelectorAll('.operator');


btn1.addEventListener('click', function() {
  display.textContent += 1;
});
btn2.addEventListener('click', function() {
  display.textContent += 2;
});
btn3.addEventListener('click', function() {
  display.textContent += 3;
});
btn4.addEventListener('click', function() {
  display.textContent += 4;
});
btn5.addEventListener('click', function() {
  display.textContent += 5;
});
btn6.addEventListener('click', function() {
  display.textContent += 6;
});
btn7.addEventListener('click', function() {
  display.textContent += 7;
});
btn8.addEventListener('click', function() {
  display.textContent += 8;
});
btn9.addEventListener('click', function() {
  display.textContent += 9;
});
btnAC.addEventListener('click', function() {
  display.textContent = "";
});

btn.forEach(button => {
  button.addEventListener('click', function() {
    const temp = display.textContent;
    console.log(temp);
    
  })
});




//store the display value in a variable








