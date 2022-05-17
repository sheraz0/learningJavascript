  /*
   6. Read two positive integer numbers N1 & N2 
   and then test whether the larger number is exactly divisible by the smaller one.
   In the process, check that the input numbers are valid (N1 &N2>0) and 
   then check which of the number is greater?
  */
  
   
   let N1;
   let N2;
   let result;
   
   N1 = Number(prompt("PLEASE ENTER A FIRST VALID NUMBER"));
   N2 = Number(prompt("PLEASE ENTER A SECOND VALID NUMBER")); 
   
   if(N1 > N2 && N1 % N2 === 0){
     result = N1 % N2;
     alert(`THIS NUMBE IS EXACTLY DIVISBLE`);
   }
   else if(N2 > N1 && N2 % N1 === 0){
     result = N1 % N2;
     alert(`THIS NUMBER IS EXACTLY DIVISBLE`);
   }
   else{
     alert("NOT EXACTLY DIVISBLE");
   }
  