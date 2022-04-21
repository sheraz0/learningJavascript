	/*
5. Write a program that finds minimum and maximum of 
three numbers using multiple-if or nested-if statement?
*/

let number1;
let number2;
let number3;
let result;

number1 = Number(prompt('Enter number one'));
number2 = Number(prompt('Enter number two'));
number3 = Number(prompt('Enter number three'));

if(number1 > number2 && number1 > number3){
  result = number1;
  
  if(number3 < number1 && number3 < number2)
    result = number3;
}

if(result){
alert(`${number1} is maximum and ${number3} is minimum`);
}

