 /*
 7. Write a program that reads an integer number from the
    user (within range 1-100). Then it check that whether the number is greater than,
    less than or equal to 50?
 */
  
 let user;
 
 user = prompt("PLEASE ENTER A VALID NUMBER");
 
 if(user > 50 && user <= 100){
   alert("THIS NUMBER IS GREATER THAN TO FIFTY");
 }
 else if(user === 50 && user > 0){
   alert("THIS NUMBER IS EQUAL TO FIFTY");
 }
 else if(user < 50 && user > 0){
   alert("THIS NUMBER IS LESS THAN TO FIFITY ");
 }
 else{
   alert("INVALID INPUT");
 }