/*
7. Write a program that reads an integer number from the user (within range 1-100). 
Then it check that whether the number is greater than,
less than or equal to 50?
*/

let user;

user = Number(prompt('Enter a number'));
console.log(typeof user);

if(user >= 51 && user <= 100){
    alert('This number is greater than 50');
}
else if(user >= 1 && user <= 49){
    alert('This number is less than 50');
}
else if(user === 50){
    alert('This number is equal 50');
}
else{
    alert('invalid input');
}
  