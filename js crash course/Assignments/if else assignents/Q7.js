/*
7. Write a program that reads an integer number from the user (within range 1-100). 
Then it check that whether the number is greater than,
less than or equal to 50?
*/

let user;

user = Number(prompt(`Enter a number`));
console.log(typeof user);

if(user > 100){
    alert(`wrong input`);
}
else if(user >= 50){
    alert(`this number is greater tan fifty`);
}
else if(user <= 50){
    alert(`this number is less than or equal fifty`);
}
else if(user === 1){
    alert(`this number is equal one`)
}
else(`invalid input`);