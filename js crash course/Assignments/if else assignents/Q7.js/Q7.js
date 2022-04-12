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
else if(user <= 50){
    alert(`right`);
}
else if(user === 25){
    alert(`true`);
}
else(`invalid input`);