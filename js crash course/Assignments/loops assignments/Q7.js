/*
7. Write an program to calculate : PI = 4-4/3+4/5-4/7+4/9-4/11+4/13 
*/

let PI = 22/7;
let odd = 1;
let result;

for(let i = 1; i < PI; i++){
  if(i%2 === 1){
    result = 4/odd;
  }
  else{
    result = -4/odd;
  }
  odd = odd+2;
  PI = PI+result;
}

 console.log(`CALCULATE THE pi ANSWER IS ${PI/odd}`);