/* 
4. Write an program that uses for loop statement to input a sequence of integers. 
Assume that the first integer read specifies the number of values
remaining to be entered,Read the numbers and print them.
A typical input statement might be 5 100 200 300 400 500
*/

let soi = prompt("PLEASE ENTER A FIRST INTEGERS");
console.log("First Number is: " + soi);

for(let a = 1; a <= soi; a++){
    let NextNumber = prompt("ENTER NEXT NUMBER");
    console.log(NextNumber);
}