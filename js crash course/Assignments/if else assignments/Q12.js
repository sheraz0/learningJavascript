/*
 Write segment of a program that reads a grade A,B,C,D or F and
 then prints Excellent, Good, Fair, Poor or Failure depending on the grade.
 Use multiple if statement?
*/

let grade =prompt("PLEASE ENTER YOUR VALID GRADE");
  
switch(true){
   
    case (grade === "A" || grade === "a"):
    alert("EXCELLENT");
    break;
    case (grade === "B" || grade === "b"):
    alert("GOOD");
    break;
    case (grade === "C" || grade === "c"):
    alert("FAIR");
    break;
    case (grade === "D" || grade === "d"):
    alert("POOR");
    break;
    case (grade === "F" || grade === "f"):
    alert("FAILURE");
    break;
    default:
    alert("invalid input");
}