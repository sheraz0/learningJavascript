	/*  5. Write a program that finds minimum and maximum of three numbers
        using multiple-if or nested-if statement?
    */
  
    let n1;
    let n2;
    let n3;
    let result;
    
    n1 = prompt("PLEASE ENTER A FIRST NUMBER");
    n2 = prompt("PLRASE ENTER A SECOND NUMBER");
    n3 = prompt("PLEASE ENTER A THIRD NUMBER");
    
    if(n1 > n2 && n1 > n3){
      result = n1;
      alert(`${n1} IS MAXIMUM`);
      
      if(n1 < n2 && n1 < n3){
        result = n1;
        alert(`${n1} IS MINIMUM`);
      }
    }
    if(n2 > n1 && n2 > n3){
      result = n2;
      alert(`${n2} IS MAXIMUM`);
      
      if(n2 < n1 && n2 < n3){
        result = n2;
        alert(`${n2} IS MINIMUM`);
      }
    }
    if(n3 > n1 && n3 > n2){
      result = n3;
      alert(`${n3} IS MAXIMUM`);
      
      if(n3 < n1 && n3 < n2){
        result = n3;
        alert(`${n3} IS MINIMUM`);
      }
    }