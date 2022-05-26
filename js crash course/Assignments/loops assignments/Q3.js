/*
 3. Write an program that uses for loop statement to calculate
 and print the product of odd integers from 1-25 which are divisible by 5?
*/

let product = 1;

for(let a = 1; a <= 25; a++){
  if(a % 2 === 1 && a % 5 === 0){
    product = product * a; 
  }
}
console.log(`product is : ${product}`);

 

  