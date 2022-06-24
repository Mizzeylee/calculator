const num1 = parseFloat(prompt('Enter first number:'));
const operator = prompt('Enter operator(+, -, /, *)');
const num2 =parseFloat( prompt('Enter second number'));
let again = 'Please refresh page to make another calculation';


let result = 0;
if (isNaN(num1) || isNaN(num2)) {
    alert('Wrong data input! Please refresh page and provide correct data!');
} else {  

    if (operator == '+'){
        result = num1 + num2;
    } else if (operator == '-') {
        result = num1 - num2;
    } else if (operator == '*') {
        result = num1 * num2;
    } else if (operator == '/') {
        result = num1 / num2;
    }
    prompt(num1 + operator + num2 + '=' + result);
    document.write(num1 + operator + num2 + '=' + result);
    window.alert(again)
} 