/*
3. Write a program that calculates roots of quadratic equation. 
Implement all three cases of roots.
(Roots are equal/roots are real/roots are imaginary)?
*/

let root1;
let root2;

let a = Number(prompt('Enter a number one'));
let b = Number(prompt('Enter a number two'));
let c = Number(prompt('Enter a number three'));

let cal = b * b - 4 * a * c;

if(cal === 0){
  root1 = root2 = b * b - 4 * a * c;
  console.log(`root are equal ${root1} and ${root2}`);
}
else if(cal > 0){
   root1 = (- b + math.sqrt(b - 4 * a * c) / 2 * a);
  root1 = (- b - math.sqrt(b - 4 * a * c) / 2 * a);
  console.log(`root are real ${root1} and ${root2}`);
}