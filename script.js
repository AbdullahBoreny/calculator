
    
    


const clearButton = document.querySelector(".clear");
const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".operand");
const operators = document.querySelectorAll(".operator");

  
let firstNumber ="";
    let operatorion = "";
    let secNumber = "";
    let displayValue = '0';
    
    



numbers.forEach(number => {
number.addEventListener("click",() => {
  display.textContent += number.value
  if(operator ==="") {
    firstNumber +=display.textContent;
    
  }
  else {
    secNumber += display.textContent
    
  }
  
}
)});


operators.forEach(op => {
  op.addEventListener("click", () => {
    let result = operate(firstNumber,operators,secNumber);
    display.textContent = result
  }
)});















clearButton.addEventListener("click", () => {
    display.textContent ="";
});

   





function operate(operand1,operator,operand2){
    if(operator ==="+"){
        result = add(operand1,operand2); 
        return result;
    }
    else if(operator ==="-"){
      return subtract(operand1,operand2);
    }
    else if(operator ==="/") {
      return division(operand1,operand2);
    }
    else if(operator ==="*") {
      return multiply(operand1,operand2);
    }
    }

    




    
    const add = function(a,b) {
      return a +b;
    };
    
    const subtract = function(a,b) {
      return a - b;
    };
    
    
    
    const multiply = function(array) {
      let number =1;
        array.forEach(element => {
            number = number * element;
    });
        return number;
    };
    
    const division = function(a,b) {
        return a/b;
    }
    