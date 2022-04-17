/*
 2. Write a program that creates a simple calculator. 
 It reads two float numbers N1 ,N2 and a character CH(+,-,*,/), 
 then perform calculations depending upon the type of character enter by the 
 user and display the result in the format...N1 op N2=result?
 */

  let N1;
  let N2;
  let CH = ( ' +, -, *, / ' );
  let result;

  N1 = Number(prompt('Enter value for N1'));
  CH = Number(prompt('Enter a operator +, -, *, /'));
  N2 = Number(prompt('Enter vlaue for N2'));
  
  console.log(typeof CH);
  

  if(CH ===   ' + '){
    result = N1 + N2;
  }
  else if(CH ===   ' - '){
      result = N1 - N2;
  }
  else if(CH ===   ' * '){
      result = N1 * N2;
  }
  else if(CH ===   ' / '){
      result = N1 / N2;
  }
  
  console.log(`${N1} ${CH} ${N2} = ${result}`);
