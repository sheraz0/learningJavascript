/*
//////////////////////
// linking  javascript file
/*let js = 'amazing';
console.log(js);
if(js === 'amazing') alert('javascript is Fun')
let operator = 40-15/2;
console.log(operator);

let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';
myHeading.style.border = '1px solid Blue';*/

//////////////////////
//Data Types
/*
let myAge = 20;
console.log(myAge); 
console.log(typeof myAge);

let myName = 'Sheraz Akram';
console.log(myName);
console.log(typeof myName);

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 'sheraz';
console.log(year);
console.log(typeof year);

console.log(typeof null);

//////////////////////////

let num1 = 5;
let num2 = 5;
let result = num1 + num2;
alert(result);

let temp = 31;
temp = 25;
alert('Today temprature is' + ' ' + temp);

var weight = 50;
weight = 60;
alert('my weight is' + ' ' + weight);


//creating a const to save my name the value of this const can't be changed
const myName = sheraz;
myName = akram;
alert('my name is' + ' ' + name);

const newName = 'ali'
alert('Name is' + ' ' + newName);
*/

///////////////////////////////////////////////
//alert('Hello world');
/*
let js = 'amazing';
if(js === 'amazing') alert('javascript is fun');

js = 'boring';
if(js === 'boring') alert('javascript is fun');

///////////////////////////////////////////////
//values and  variables

//name convention
let firstName = 'sheraz';
console.log(firstName);
console.log(firstName);
console.log(firstName);

let $function = 'programmer';
console.log($function);

let Person = 'akram';
console.log(Person);

//variable name cannot start with a number
let 1person = 'akram';
console.log(1Person);


//////////////////////////////////////
// data types
let year = 2002;
console.log(year);
console.log(typeof year);

let firstName = 'sheraz';
console.log(firstName);
console.log(typeof firstName);

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let cars;
console.log(cars);
console.log(typeof cars);

console.log(typeof null);


//////////////////////////////////
//let var or const

//let value can be change
let age = 20;
age = 25;

//const value cannot be change
const temp = 35;
temp = 25;

//var variable similar to let
var weather = 'summer';
weather = 'winter';

//////////////////////////////////
// Basic operator

// Mathematics operator
const now = 2040;
const ageSheraz = now - 2002;
const ageArsal = now - 2015;
console.log(ageSheraz, ageArsal);

const firstName = 'sheraz';
const lastName = 'akram';
console.log(firstName + ' ' + lastName);

//assignment operator
let x = 10 + 5;
x += 10;
x *= 4;
x ++;
x --;  
console.log(x);

//comparison operator

console.log(ageSheraz > ageArsal);
console.log(ageArsal > ageSheraz);

const isFullAge = ageArsal >= 15;
console.log(isFullAge >= 15);

console.log(now - 2002 > now - 2015);

////////////////////////////////////////
// oerator precedence

let x = y;
x = y = 25 - 10 - 5;
 console.log(x, y);

 const now = 2040;
 const ageSheraz = now - 2002;
 const ageArsal = now - 2015;
 const averageAge = ageSheraz + ageArsal / 2;
console.log(ageSheraz, ageArsal, averageAge);

///////////////////////////////////////////////
// #1 Coding challenge

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.88;

const markBMI = massMark / heightMark ** 2;
const johnBMI = massJohn / (heightJohn * heightJohn);
const markHeigherBmi = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHeigherBmi);

///////////////////////////////////////////////
// string Template and literals
const newName = 'Hussain';
const birth = 20;
const work = 'student';

const sheraz = " i'm " + newName + ' ' + birth + ' year old ' + work;
console.log(sheraz); 

const newSheraz = `iam ${newName}, a ${birth} year old ${work}`;
console.log(newSheraz);

/////////////////////////////////////////////////////
 //TAKING DECISION if/else statement

 const age = 17;

 if(age >= 18){
     alert('Sarah can start driving license');
 }else{
     const yearsleft = 18 - age;
     alert(`Sarah is too young. wait another ${yearsleft} year`);
 }

 const birthYear = 2012;
  let century;
  if(birthYear <= 2000){
      century = 20;
  }else{
      century = 21;
  }
  alert(century);

  /////////////////////////////////////
  // coding challenge #2
  const massMark = 78;
  const heightMark = 1.69;
  const massJohn = 92;
  const heightJohn = 1.88;
  
  const markBMI = massMark / heightMark ** 2;
  const johnBMI = massJohn / (heightJohn * heightJohn);
  const markHeigherBMI = markBMI > johnBMI;
  
  if(markBMI > johnBMI){
      alert(`mark higher ${markBMI} to john ${johnBMI}`);
  }else{
      alert('john higher to mark');
  }
  
  ///////////////////////////////////////
  //type conversion
  const inputYear = '2002';
  console.log(typeof inputYear);
  console.log(typeof Number(inputYear));
  
  //const inputWord = 12345;
  //console.log(typeof inputWord);
  //console.log(string(inputWord));

  //type coercion
  console.log('1' + '2' + 3);
  console.log('10' - '5' - '3');

  let n = '1' + 1; // 11
  n= n - 1;
  console.log(n);

  /////////////////////////////
  // Truthy and Falsy value

  console.log(Boolean(''));
  console.log(Boolean('hussain'));
  console.log(Boolean({}));
  console.log(Boolean(0));
  console.log(Boolean(undefined));

  const score = 0;
  if(score){
      alert('your score is zero!');
  }else{
      alert('you are winner');
  }

  const myName = 'hussain';
  if(myName){
      alert('your age is empty');
  }else{
      alert('your are agree'); 
     }
     */







