

const add = function(a, b) {
    return parseInt(a) + parseInt(b);	
   };
const subtract = function(a, b) {
    return parseInt(a) - parseInt(b);
};   
const multiply = function(a, b) {
    return parseInt(a) * parseInt(b);
};  
const divide = function(a, b) {
    return parseInt(a) / parseInt(b);
}
  
const operate = function(operator, num1, num2) {
  if (operator == "add") {
    return add(num1, num2);
  } else if (operator == "subtract") {
    return subtract(num1, num2);
  } else if (operator == "multiply") {
    return multiply(num1, num2);
  } else if (operator == "divide") {
    return divide(num1, num2);
  }
}


const opContainer = document.querySelector('#OP-container');  
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
const btn0 = document.querySelector("#btn-0")

const equalBtn = document.querySelector('#btn-equal');
const btnAC = document.querySelector('#btn-AC');

const operatorBtns = document.querySelectorAll('.operator');
const addBtn = document.querySelector('#btn-add');
const divideBtn = document.querySelector('#btn-divide');
const multiplyBtn = document.querySelector('#btn-multiply');
const subtractBtn = document.querySelector('#btn-subtract');

let tempA = "";
let OP = "";
let tempB = "";

btn0.addEventListener('click', function() {
  display.textContent += 0;
});
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
  OP = "";
  tempA = "";
  tempB = "";
});


//these listeners store an intended value for an operation. Thus: click addBtn stores "+" in an invisible div,
  //which the operatorBtns.forEach listener will use to pass into the operate function
addBtn.addEventListener('click', function() {
  OP = "add";
});
divideBtn.addEventListener('click', function() {
  OP = "divide";
});
multiplyBtn.addEventListener('click', function() {
  OP = "multiply";
});
subtractBtn.addEventListener('click', function() {
  OP = "subtract";
});


function storeTempA() {
  tempA = display.textContent;
  console.log(tempA);
  display.textContent = "";
}
function storeTempB() {
  tempB = display.textContent;
  display.textContent = operate(OP, tempA, tempB);
}

operatorBtns.forEach(operator => {  
  operator.addEventListener('click', function() {
    tempA = display.textContent;
    display.textContent = "";
    console.log("tempA " + tempA);
    console.log("OP " + OP);
    })
})

equalBtn.addEventListener('click', function(){
  tempB = display.textContent;
  display.textContent = "";
  display.textContent = operate(OP, tempA, tempB);
  tempA = "";
  tempB = "";
  OP = "";
});




//operatorBtns.forEach(operator => {  
  //operator.addEventListener('click', function() {
    //tempA = display.textContent;
    //display.textContent = "";
   // console.log("tempA " + tempA);
   // console.log("OP " + OP);
    
   // equalBtn.addEventListener('click', function(){
    //  tempB = display.textContent;
   //   display.textContent = "";
    //  display.textContent = operate(OP, tempA, tempB);
    //  tempA = "";
   //  tempB = "";
    //  OP = "";
  //  })
 // })
//});





//1X. store display value tempA
  //&X store operator as value OP
//2. add event listener for equals
  //on equals, do two things:
      //store display value as tempB
      //pass OP, tempA, and tempB into operate function
//4. return operate(OP, tempA, tempB)
//5. find a way to cancel















