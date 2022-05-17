 /*  1. Write a program that reads user age and prints “CHILD” if age <18,
  “ADULT” if 18<=age<35 and “SENIOR” if age >=35?
 */

  let user;
  user = prompt("please enter your valid age");
  
  if(user < 18){
    alert("CHILD");
  }
  else if(user <= 18 || user < 35){
    alert("Adult");
  }
  else if(user >= 35){
    alert("SENIOR");
  }
  else{
    alert("invalid input");
  }