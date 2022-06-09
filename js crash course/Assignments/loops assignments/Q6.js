/*
6. Write an program that uses for loop statement to find 
 the smallest of several integers. Assume that the first value read specifies
 the number of values remaining and the first number is not one of the integers to
 compare? 
*/

let sml;
let int = prompt("ENTER A VALID INTEGER");
console.log("FIRST INTEGER IS :" + int);

for(let a = 1; a <= int; a++){
let nextNum = prompt('PLEASE ENTER NEXT NUMBER');
console.log(nextNum);
if(nextNum === nextNum){
sml = nextNum;
}
}

console.log(`the smallest integer is ${sml}`);