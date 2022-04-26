	/*
 9. A pharmaceutical company pays 10% house rent and 90% daily allowance of basic salary
 to its employees if the basic pay of the employee is less than 1500.
 The company pays 20% house rent and 95% daily allowance of basic salary to 
 its employees if the basic pay of the employee is greater than or equal to 1500. Write an algorithm 
 that takes basic salary of an employee and calculate and prints his gross salary?
    
*/
  
let houseRent;
let dailyAllowance;
let basicSalary;
let gross_salary =  houseRent + dailyAllowance + basicSalary;
let result;

houseRent = prompt('Enter a House_Rent');
dailyAllowance = prompt('Enter a  Daily_Allowance');
basicSalary = prompt('Enter a  Basic_Salary');

if(gross_salary >= 1500){
  result = (gross_salary / 1500) * 100;
  alert(`Gross Salary is ${result}`);
}
else if(gross_salary < 1500){
  result = (gross_salary / 1500) * 100;
   alert(`Gross Salary is ${result}`);
}
else{
  alert('invalid input');
}