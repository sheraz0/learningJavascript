/*
  6. Read two positive integer numbers N1 & N2 and then test whether 
  the larger number is exactly divisible by the smaller one. In the process, check that 
  the input numbers are valid (N1 &N2>0) and then check which of the number is greater?
  */

  let N1;
  let N2;

  N1 = Number(prompt('Enter a number1'));
  N2 = Number(prompt('Enter a number2'));

  if(N1 && N2 > 0){
      alert('this number is greater');
  } 
  else{
      alert('this number is smaller');
  }