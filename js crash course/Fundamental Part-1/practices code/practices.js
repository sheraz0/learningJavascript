//Basic
/*
let fruh = 'foobar';
console.log(fruh);
*/

////////////////////////////

//comments
// a single line comment
/*
multi-line
comment
*/

///////////////////////

//Declarations
/*
var x = 1;
var y = 1;
var z = x + y;
console.log(z);

let myName = 'sheraz';
myName = 'akram';
console.log(myName);

const firstName = 'sheraz';
const secondName = 'akram';
const age = 20;
const sheraz = " iam " + firstName + ", my father is " + secondName + ' ' + age + " year old ";
console.log(sheraz);
*/

/////////////////////////////////////////

//variables? who's value can be change

/*
let temp = 35;
temp = 25;
alert('Temprature is' + '  ' + temp);

//values cannot be changed
const Name = 'sheraz';
Name = 'akram';
alert(Name);
*/

//////////////////////////

//Evaluating variables
/*
var a;
console.log('the value of a is' + ' ' + a);

var y;
console.log(`The value of y is ${y}`);

var n = 'null';
console.log(n * 2);
*/

/////////////////////////

//variable scope
/*
if(true){
    var x = 5;
}
console.log(x); //x is 5

if(true){
    var y = 5;
}
console.log(y);
*/

/////////////////////////

//variable hoisting
/*
Example no 1
*/
 
console.log(x === undefined); //true
 var x = 3;

 /*
 Example no 2
 */

var myVar = 'my value';
(function(){
    console.log(myVar);
    var myVar = 'local value';
})();

var x;
console.log(x === undefined);
x = 3;




