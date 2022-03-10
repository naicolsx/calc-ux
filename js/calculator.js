let number = document.getElementsByClassName("number");
let operatorMath = document.getElementsByClassName("operatorsMath");
let result = document.getElementById("containerResult");
// let number1 = document.get

function Sum(number1, number2) {
  result = number1 + number2;
  console.log(result);
  paintResult(result);
}

function Subtract(number1, number2) {
  result = number1 - number2;
  console.log(result);
  paintResult(result);
}

function Division(number1, number2) {
  result = number1 / number2;
  console.log(result);
  paintResult(result);
}

function Multiplication(number1, number2) {
  result = number1 * number2;
  console.log(result);
  paintResult(result);
}

function paintResult(result) {
  document.getElementById("resultNumber").innerHTML = result;
}
