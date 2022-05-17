 /*
    8. Write a program that takes the length of two legs of a right triangle
     as input and calculates the area and hypotenuse?
 */
    let base;
    let hieght;
    let hypotenuse;
    
    base = prompt("PLEASE ENTER A BASE");
    height = prompt("PLEASE ENTER A HEIGHT");
    
    if(base > 0){
      result = (base * base) + (height * height);
      alert(`RIGHT TRIANGLE FIRST LEG ${result}`);
    }
    else if(height > 0){
      result = (height * height) + (base * base);
      alert(`RIGHT TRIANGLE SECOND LEG ${result}`);
    }
    else{
      alert("INVALID INPUT");
    }
      