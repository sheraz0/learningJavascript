/*
7. Write an program to calculate : PI = 4-4/3+4/5-4/7+4/9-4/11+4/13 
*/

   
let x;
let sum = 0;
let PI = 4;

for(let i = 1; i <= 13; i++){
  if(i%2 === 1){
    x = sum + PI/i;
    sum = x*(-1);
   }
  }
  console.log(`calculate PI is: ${sum}`);


 
