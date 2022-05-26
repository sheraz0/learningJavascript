
  /*
   2. Write an program that uses for loop statement to calculate
   and print the product of odd integers from 10-20
  */

 let product = 1;

    for(let a = 10; a <= 25; a++){
      if(a % 2 === 1){
        product = product * a;
      }
    }
    console.log(`product is : ${product}`);

 
