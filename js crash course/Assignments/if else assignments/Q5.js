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
   alert(`${number1} is maximum`);
 }
 if(number1 < number2 && number1 < number3){
   result = number1;
   alert(`${number1} is minimum`);
 }
  
   if(number2 > number1 && number2 > number3){
   result = number2;
   alert(`${number2} is maximum`);
 }
 if(number2 < number1 && number2 < number3){
   result = number2;
   alert(`${number2} is minimum`);
 }
  
   if(number3 > number1 && number3 > number2){
   result = number3;
   alert(`${number3} is maximum`);
 }
 if(number3 < number1 && number3 < number2){
   result = number3;
   alert(`${number345} is minimum`);
 }


