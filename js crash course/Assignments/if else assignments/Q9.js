/*
 9. A pharmaceutical company pays 10% house rent and 90% daily allowance of basic salary
 to its employees if the basic pay of the employee is less than 1500.
 The company pays 20% house rent and 95% daily allowance of basic salary to 
 its employees if the basic pay of the employee is greater than or equal to 1500. Write an algorithm 
 that takes basic salary of an employee and calculate and prints his gross salary?
    
*/


let hR;
let dA;
let bS;
let gS;

hR = Number(prompt('Enter a house rent'));
dA = Number(prompt('Enter a Daily Allowance'));
bS = Number(prompt('Enter a Basic Salary'));

if(bS >= 1500){
  gS = (hR / dA) + bS;
}else if(bS < 1500){
  gS = (hR / dA) + bS;
}else{
  alert('please enter a valid information');
}

if(gS){
  alert(`Gross Salary is : ${gS}`);
}