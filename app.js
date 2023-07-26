addResult = function add (a, b){
    return a+b;
}
subResult = function subtract(a,b){
    return a-b;
}
multiResult = function multiply(a,b){
    return a*b;
}
divResult = function divide(a,b){
    return a/b;
}
// Variables to store user input and intermediate values

let firstNum;
let secondNUm; 
let operator;
let operatorTrigger = false;
// Function to perform the arithmetic operation based on the operator

function operate(operator, firstNum, secondNUm){
    if (operator == '+'){
        return addResult(firstNum, secondNUm)
    }
    else if (operator == '-'){
        return subResult(firstNum, secondNUm)
    }
    else if (operator == '*'){
        return multiResult(firstNum, secondNUm)
    }else{
        return divResult(firstNum, secondNUm)
    }
}
let inputValue;
//This trigger is activated when:
//the operator trigger is activated,
//decides whether or not to remove
//the prev display value from the
//inputValus
let dumpDisplayValue = false;
// Button-Click event handlers
// Event listeners for digits 0 to 9
// Each click appends the corresponding digit to the display value
// If an operator has been pressed previously, it resets the display
const display = document.getElementById('display')
const one = document.getElementById('one')
one.addEventListener('click', function(){

    display.value += '1'
    console.log('-------------------');
    inputValue = display.value;
    console.log('-------------------');
    console.log('inputValue'+inputValue)
    if(operatorTrigger == true){
        display.value = '';
        //expression.pop();
        display.value = '1';
    }
    operatorTrigger = false;
})

const two = document.getElementById('two')
two.addEventListener('click', function(){

    display.value += '2'
    inputValue = display.value;
    if(operatorTrigger == true){
        display.value = '';
        display.value = '2'
    }
    operatorTrigger = false;
})
const thee = document.getElementById('three')
three.addEventListener('click', function(){

    display.value += '3'
    inputValue = display.value;
    if(operatorTrigger == true){
        display.value = '';
        display.value = '3'
    }
    operatorTrigger = false;
})
const four = document.getElementById('four')
four.addEventListener('click', function(){

    display.value += '4'
    inputValue = display.value;
    if(operatorTrigger == true){
        display.value = '';
        display.value = '4'
    }
    operatorTrigger = false;
})
const five = document.getElementById('five')
five.addEventListener('click', function(){
    display.value += '5'
    inputValue = display.value;
    if(operatorTrigger == true){
        display.value = '';
        display.value = '5'
    }
    operatorTrigger = false;
})

const six = document.getElementById('six')
six.addEventListener('click', function(){
    display.value += '6'
    inputValue = display.value;
    if(operatorTrigger == true){
        display.value = '';
        display.value = '6'
    }
    operatorTrigger = false;
})
const seven = document.getElementById('seven')
seven.addEventListener('click', function(){
    display.value += '7'
    inputValue = display.value;
    if(operatorTrigger == true){
        display.value = '';
        display.value = '7'
    }
    operatorTrigger = false;
})
const eight = document.getElementById('eight')
eight.addEventListener('click', function(){
    display.value += '8'
    inputValue = display.value;
    if(operatorTrigger == true){
        display.value = '';
        display.value = '8'
    }
    operatorTrigger = false;
})
const nine = document.getElementById('nine')
nine.addEventListener('click', function(){
    display.value += '9'
    inputValue = display.value;
    if(operatorTrigger == true){
        display.value = '';
        display.value = '9'
    }
    operatorTrigger = false;
})
const zero = document.getElementById('zero')
zero.addEventListener('click', function(){
    display.value += '0'
    inputValue = display.value;
    if(operatorTrigger == true){
        display.value = '';
        display.value = '0'
    }
    operatorTrigger = false;
})
// Clear button event handler
// Resets the display value and expression
const clear = document.getElementById('clear')
clear.addEventListener('click', function(){
    
    display.value = ''
    expression = '';
})
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const times = document.getElementById('times');
const obelus = document.getElementById('obelus');
const equals =document.getElementById('equals');

let expression ='';
// Event handlers for arithmetic operators (+, -, *, /)
// When an operator is pressed, it appends the current display value and operator to the expression
// Then, it calculates the result if there are enough elements in the expression array
// The result is displayed, and the expression is updated
plus.addEventListener('click', function(){
    //console.log('addExpressionToArrayTriggered')
    expression += inputValue + '+'
    console.log('expression');
    console.log(expression);
    console.log('expression');
    display.value = '' 
    result = addExpressionToArray()
    console.log('theOutcomeOfRunningAddExpressionToArray');
    console.log(result)
    console.log('theOutcomeOfRunningAddExpressionToArray');
    //if the length of result is 4,
    //operate(first 3 elements of result)
    //remove the first 3 elements of result and make them 1 element: total of operate
    //put the total of operate(first 3 elements) on the display

    if (result.length == 4){
        total = operate(result[1], parseInt(result[0]), parseInt(result[2]));
        result.splice(0, 3, String(total))
        console.log('result of operating on first 3 array elements');
        console.log(result);
        console.log('result of operating on first 3 array elements');
        display.placeholder = total;
        //WHY!?
        //newnewExpression = result;
        //console.log('newnewExpression');
        //console.log ( newnewExpression);
        //console.log('newnewExpression');
        expression = result;
        operatorTrigger = true;
        dumpDisplayValue = true;
    } 
})
minus.addEventListener('click', function(){
    expression += inputValue + '-'
    console.log(expression)
    display.value = ''
    result = addExpressionToArray()
    console.log(result)
    if (result.length == 4){
        total = operate(result[1], parseInt(result[0]), parseInt(result[2]));
        result.splice(0, 3, String(total))
        display.placeholder = total;
        newnewExpression = result;

        console.log ( newnewExpression);

        expression = newnewExpression;
        operatorTrigger = true;
    } 
    
})
times.addEventListener('click', function(){
    expression += inputValue + '*'
    console.log(expression)
    display.value = ''
    result = addExpressionToArray()
    console.log(result)
    if (result.length == 4){
        total = operate(result[1], parseInt(result[0]), parseInt(result[2]));
        result.splice(0, 3, String(total))
        display.placeholder = total;
        newnewExpression = result;

        console.log ( newnewExpression);

        expression = newnewExpression;
        operatorTrigger = true;
    }
})
obelus.addEventListener('click', function(){
    expression += inputValue + '/'
    console.log(expression)
    display.value = ''
    result = addExpressionToArray()
    console.log(result)
    if (result.length == 4){
        total = operate(result[1], parseInt(result[0]), parseInt(result[2]));
        result.splice(0, 3, String(total))
        display.placeholder = total;
        newnewExpression = result;

        console.log ( newnewExpression);

        expression = newnewExpression;
        operatorTrigger = true;
    }
})
// Equals button event handler
// It evaluates the expression and displays the result
equals.addEventListener('click', function(){
    tot = operate(expression[1],expression[0], expression[2]);
    display.value = tot
    console.log(expression)

})
// Function to split the expression into numbers and operators
// It returns an array with alternating numbers and operators
function addExpressionToArray (){
    
    expression += display.value;
    const regex = /[+\-*/]/g;
    //use regex to split the expression at operator points
    //add just the numbers to the an array called separate
    const separate = expression.split(regex).filter(Boolean);
    console.log(separate);
    display.value = '';
    
    const operators = [];
    //creating an array of operators using the original expression 
    for (const character of expression) {
      if (character === "+") {
        operators.push(character);
      } else if (character === "*") {
        operators.push(character);
      } else if (character === "-") {
        operators.push(character);
      } else if (character === "/") {
        operators.push(character);
      }
    }
    console.log(operators)  
    let newExpression =[];
    //alternating between number and operator
    //adding that to a variable: newExpression
    const maxLength = Math.max(separate.length, operators.length);
    for (let i = 0; i < maxLength; i++){
        if(i < separate.length){
            newExpression.push(separate[i]);
        }
        if (i < operators.length){
            newExpression.push(operators[i])
        }
    }
    console.log(newExpression)
    return newExpression
}

