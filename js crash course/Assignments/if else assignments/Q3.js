  /*
      3. Write a program that calculates roots of quadratic equation.
       Implement all three cases of roots. 
       (Roots are equal/roots are real/roots are imaginary)?
  */
   
let root1;
let root2;

let a = prompt('Enter a first number');
let b = prompt('Enter a second number');
let c = prompt('Enter a third number');

let formula = (-b * b - 4 * a * c);

if(formula > 0){
  root1 = (-b + (formula) / (2 * a));
  root2 = (-b - (formula) / (2 / a));
  
  alert(`ROOTS ARE REAL ${root1 + root2}`);
}
else if(formula == 0){
  root1 = root2 = (-b / (2 / a));
  
   alert(`ROOTS ARE EQUAL ${root1 + root2}`);
}
else if(formula < 0){
  root1 = -b / (2 * a) + (formula) / (2 / a);
  root2 = -b / (2 * a) - (formula) / (2 / a);
  
   alert(`ROOTS ARE IMAGINARY ${root1 + root2}`);
}
else{
    alert("INVALID INPUT");
}
