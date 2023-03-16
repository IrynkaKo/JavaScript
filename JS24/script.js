let bigNumber = prompt("Enter first number");
   let smallNumber = prompt("Enter second number");
    
    function summingNumbers(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Error: both parameters must be numbers";
  }
  return Number(a) + Number(b);
}

 let sum = summingNumbers(bigNumber, smallNumber);
 alert(` ${sum}`);


  
  
   let firstNumber = prompt("Enter first number");
   let secondNumber = prompt("Enter second number");

   function divideNumbers(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Error: both parameters must be numbers";
  }
  if (a === 0 || b === 0) {
    return "Error: division by zero";
  }
  return a / b;
}

    let result = divideNumbers(firstNumber, secondNumber);
    alert(`${result}`);


    let newNumber = prompt("Enter first number");
    let newnewNumber = prompt("Enter second number");
    
    function multiplyNumbers(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Error: both parameters must be numbers";
  }
  return a * b ;
}

 let multiply = multiplyNumbers(newNumber, newnewNumber);
 alert(` ${multiply}`);



    let lastNumber = prompt("Enter first number");
    let verylastNumber = prompt("Enter second number");
    
    function minusNumbers(a, b) {
    if (isNaN(a) || isNaN(b)) {
    return "Error: both parameters must be numbers";
    }

    if (b > a){
    return ("Are you sure you want to continue?");
    }

    return a - b;
}

   let check = minusNumbers(lastNumber, verylastNumber);
   alert(` ${check}`);



   const numbers = [  860, 140, 53, 74, 867 ,100 ,11 ,20,699,921];
   function findMin(numbers) {
   let min = numbers[0];
   for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

function findMax(numbers) {
  let max = numbers[0]; 
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

console.log(findMin(numbers)); 
console.log(findMax(numbers));