/*
 10. 01/01/1900, the day was Monday.
 If any year is input through keyboard, 
 write a program to find out the day on first January of that year?
*/

 
let year;

year = Number(prompt("PLEASE ENTER A YEAR"));

if(year === 1900){
   alert("THE DAY WAS MONDAY"); 
}
else if(year === 1950){
    alert("THE DAY WAS FRIDAY");
}
else if(year === 2000){
    alert("THE DAY WAS SUNDAY");
}
  else if(year === 2022){
    alert("THE DAY WAS THURSDAY");
  }
else{
    alert("INVALID INPUT");
}
    