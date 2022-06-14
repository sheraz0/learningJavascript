/*
 Write an algorithm that determines the first n 
 (user supplied number) Fibonacci numbers
*/


let f1 = 0;
let f2 = 1;
console.log(f1);
console.log(f2);

let n = prompt("Enter a Number");

for(let i = 1; i <= n-2; i++){
  let x = f1 + f2;
  f1 = f2;
  f2 = x;
 console.log(x);
}