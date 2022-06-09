/*
5.Write an program that uses for loop statement to sum a sequence of integers.
Assume that the first integer read specifies the number of values remaining 
to be entered.Your program should read only one value per statement.
A typical input statement might be 5	100	200	300	400 500?
*/

let sum = 0;
let n = Number(prompt("ENTER FIRST INTEGER"));
console.log(`FIRST INTEGER IS : ${n}`);

for(let i = 1; i <= n; i++){
    let NextNumber = Number(prompt("ENTER NEXT NUMBER"));
    sum = sum + NextNumber;
}

console.log(`SUM OF ALL INTEGERS: ${sum}`);