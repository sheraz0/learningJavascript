/*
6. Write an program that uses for loop statement to find 
 the smallest of several integers. Assume that the first value read specifies
 the number of values remaining and the first number is not one of the integers to
 compare? 
*/

 
let smallNum = 0;
let inputUser = Number(prompt("ENTER A VALID INTEGER"));
smallNum = prompt("Enter next input");

for(let a = 1; a < inputUser; a++){
let nextNum = Number(prompt('PLEASE ENTER NEXT NUMBER'));  
console.log("NEXT NUMBER IS: " + nextNum);
 
  if(nextNum < smallNum){
  smallNum =  nextNum;
 }
}
 console.log("The smallest integer is: " +  smallNum);
