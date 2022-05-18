/*
 10. 01/01/1900, the day was Monday.
 If any year is input through keyboard, 
 write a program to find out the day on first January of that year?
*/

 
let year;
  
  year = prompt("PLEASE ENTER A YEAR");
  
  if(year >= 1900 && year < 2000){
    alert(`MONDAY/JANUARY/${year}`);
  }
  else if(year >= 2001 && year <= 2022){
    alert(`FRIDAY/JANUARY/${year}`);
  }
  else{
    alert("INVALID INPUT");
  }
    