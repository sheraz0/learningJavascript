/*
 8. Write a program that uses a for statement to determine and promote
    the largest number of ten numbers input by the user
*/

let largestNum = 0;
for(let i = 1; i <= 10; i++){
 let nextNum = prompt("Enter Ten Numbers");
  console.log("Next One Number: " + nextNum);
  
  if(nextNum > largestNum){
    largestNum = nextNum;
  }
}

console.log("the largest number is: " + largestNum);
