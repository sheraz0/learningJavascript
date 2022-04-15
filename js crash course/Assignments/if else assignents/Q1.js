/*
1. Write a program that reads user age and prints
 “CHILD” if age <18, “ADULT” if 18<=age<35 and “SENIOR” if age >=35?
 */ 

let age;
  
age = Number(prompt("What is your age?"));

if(age < 18 ){
  console.log("CHILD");
}
else if(age >= 18 && age < 35) {
  console.log("ADULT");
}
else if(age >= 35) {
  console.log("SENIOR");
}
else{
  console.log("INVALID INPUT");
}
