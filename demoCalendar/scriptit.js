console.log("Hello there JSCRIPT");
let today = new Date();
let daytoday = today.getDay();

function getInputValue() {
    let addend1 = getNumber1();
    let addend2 = getNumber2();
    
    let sum = Number(addend1) + Number(addend2);
    let text = document.getElementById("demo").textContent;
    document.getElementById("demo").innerHTML = addend1 + ' + ' + addend2 + ' = ' + sum; 
  }

  
  function getNumber1() {
    let inputVal = document.getElementById("num1").value;
    return inputVal;
  }
  function getNumber2() {
    let inputVal = document.getElementById("num2").value;
    return inputVal;
  }