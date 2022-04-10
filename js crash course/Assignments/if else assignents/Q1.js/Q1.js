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
