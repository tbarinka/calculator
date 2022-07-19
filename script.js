

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
  
const operate = function(operator, num1, num2) {
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
const btns = document.querySelectorAll('.btn');
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
const operatorBtns = document.querySelectorAll('.operator');
const addBtn = document.querySelector('#btn-add');


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

operatorBtns.forEach(operator => {
  operator.addEventListener('click', function() {
    const tempA = display.textContent;
    console.log(tempA);
  })

});


//1. store display value tempA
  //& store operator as value OP
//2. add event listener for equals
  //on equals, do two things:
      //store display value as tempB
      //pass OP, tempA, and tempB into operate function
//4. return operate(OP, tempA, tempB)




//add Event listener for ADD function, such that a click triggers this event:
  //store the display value as TempA
  //clear text content
  //await input as TempB
  //'click =' does two things:
    //1. stores display.textContent as tempB
    //2. passes tempA and tempB into addition











