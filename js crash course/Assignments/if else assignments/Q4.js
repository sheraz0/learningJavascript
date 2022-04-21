/*
4. Write segment of a program that reads a grade A,B,C,D or F
and then prints Excellent, Good, Fair, Poor or Failure depending on the grade.
Use multiple if statement?
*/

let grade;

 grade = prompt('please enter a grade');

 if(grade === 'A' || grade === 'a' ){
     console.log(`Excellent`);
}
 else if(grade === 'B' || grade === 'b'){
     console.log('Good');
}
 else if(grade === 'C'  || grade === 'c'){
    console.log('Fair');
}
else if(grade === 'D'  || grade === 'd'){
    console.log('Poor');
}
else if(grade === 'F'  || grade === 'f'){
    console.log('Failure');
}
else{
    console.log('invalid input');
}
