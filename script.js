
    let operand1 ="";
    let operator = "";
    let operand2 = "";
    let displayValue = '0';
    
    
    




const clearButton = document.querySelector(".clear");
const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".operand");





buttons.forEach(number => {
number.addEventListener("click",() => {

  
  display.textContent +=number.value;
}
)});





clearButton.addEventListener("click", () => {
    display.textContent =null;
});

   


    
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



function operate(operand1,operator,operand2){
    if(operator ==="+"){
        result = add(operand1,operand2); 
    }
    }

    
