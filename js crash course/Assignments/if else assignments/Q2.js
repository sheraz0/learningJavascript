/*
2. Write a program that creates a simple calculator. 
It reads two float numbers N1 ,N2 and a character CH(+,-,*,/),
 then perform calculations depending upon the type of character enter by
  the user and display the result in the format...N1 op N2=result?
*/

let N1;
let N2;
let CH;
let result;

N1 = Number(prompt("please enter a valid number 1"));
CH = prompt("please enter a character + - / *");
N2 = Number(prompt("please enter a valid number 2"));


if(CH === '+'){
result = N1 + N2;
  alert(result);
} 
else if(CH === '-'){
result = N1 - N2;
  alert(result);
}
else if(CH === '/'){
result = N1 / N2;
  alert(result);
}
else if(CH === '*'){
result = N1 * N2;
  alert(result);
}
else{
alert("invalid input");
}
 
 if(result){
   alert(`${N1} ${CH} ${N2} = ${result}`);
 }