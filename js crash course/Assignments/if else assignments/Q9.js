  /*
	 9. A pharmaceutical company pays 10% house rent and 90%
     daily allowance of basic salary to its employees if the basic pay of the employee
     is less than 1500. The company pays 20% house rent and 95% daily allowance of basic salary
     to its employees if the basic pay of the employee is greater than or equal to 1500. Write an algorithm that takes basic salary of an employee and calculate and prints his gross salary?
  */
  
     let hrt;
     let da;
     let bs;
     let gs;
     let result;
     
     bs = prompt("PLEASE ENTER A BASIC SALARY");
     
     if(bs > 1500){
       hrt = bs * 20 / 100;
       da = bs * 95 / 100;
       gs = hrt + bs;
       alert(`gross_salary is ${gs}`);
     }
     else if(bs < 1500){
       hrt = bs * 20 / 100;
       da = bs * 95 /100;
       gs = hrt + bs;
       alert(`gross_salary is ${gs}`);
     }
     else{
       alert("INVALID INPUT");
     }