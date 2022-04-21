/*
  8. Write a program that takes the length of two legs of a right triangle 
  as input and calculates the area and hypotenuse?
  */

  let a;
  let b;
  let result;
  
  a = prompt('Enter a Base');
  b = prompt('Enter a Height');
  
  if(a && b > 0){
   result = (1/2) * a * b;
   alert(`The area of a right triangle is ${result}`);
  }else{
    alert('invalid input');
  }
