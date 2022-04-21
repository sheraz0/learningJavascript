/*
  3. Write a program that calculates roots of quadratic equation. 
  Implement all three cases of roots. 
  (Roots are equal/roots are real/roots are imaginary)?
*/

 
let root1;
let root2;
let formula = -b * b - 4 * a * c;

a = Number(prompt('Enter a value of a'));
b = Number(prompt('Enter a value of b'));
c = Number(prompt('Enter a value of c'));

if(formula > 0){
  root1 = (-b + (b * b - 4 * a *  c)) / (2 * a);
  root2 = (-b - (b * b - 4 * a *  c)) / (2 * a);
  
  alert(`Roots are real ${root1} and ${root2}`);
}else if(formula === 0){
  root1 = root2 = -b / (2 * a);
  
  alert(`Roots are equal ${root1} and ${root2}`);
}else if(formula < 0){
  root1 = -b / (2 * a) + (b * b - 4 * a * c) / (2 * a);
  root1 = -b / (2 * a) - (b * b - 4 * a * c) / (2 * a);
  
  alert(`Roots are imaginary ${root1} and ${root2}`);
}else{
  alert('invalid input');
}
