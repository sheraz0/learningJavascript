 /*
	4. Write segment of a program that reads a grade A,B,C,D or F and
     then prints Excellent, Good, Fair, Poor or Failure depending on the grade.
     Use multiple if statement?
*/
  let grade;
  
  grade = prompt("PLEASE ENTER A VALID GRADE");
  
  if(grade === "A" || grade === "a"){
    alert("YOU ARE EXCELLENT😍");
  }
  else if(grade === "B" || grade === "a"){
    alert("YOU ARE GOOD🥰");
  }
  else if(grade === "C" || grade === "c"){
    alert("YOU ARE FAIR😅");
  }
  else if(grade === "D" || grade === "d"){
    alert("you are poor😫");
  }
  else if(grade === "F" || grade === "f"){
    alert("YOU ARE FAIL😭");
  }
  else{
    alert("invalid input");
  }