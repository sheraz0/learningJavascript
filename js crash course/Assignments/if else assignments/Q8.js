 /*
    8. Write a program that takes the length of two legs of a right triangle
     as input and calculates the area and hypotenuse?
 */
     let base;
     let height;
   
     base = prompt("PLEASE ENTER A BASE");
     height = prompt("PLEASE ENTER A HEIGHT");
   
   if(base || hypotenuse  > 0){
     area = 1 / 2 * base * height;
     hypotenuse = (base * base) + (height * height);
     alert(`Area ${area} and hypotenuse ${hypotenuse} of right triangle`);
   }
   else{
     alert("INVALID INPUT");
   }