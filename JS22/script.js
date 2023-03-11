let bigNumber;
let smallNumber;
bigNumber = prompt("Enter first number");
smallNumber = prompt("Enter second number");
alert(Number(bigNumber) + Number(smallNumber));



let firstNumber;
let secondNumber;
firstNumber = prompt("Enter first number");
secondNumber = prompt("Enter second number");
alert(firstNumber  / secondNumber);
if (secondNumber === 0);{ 
alert("Error");
} 

let newNumber;
let new1Number;
let check;
newNumber = prompt("Enter first number");
new1Number = prompt("Enter second number");


if (new1Number < newNumber){
alert(newNumber - new1Number);
} else if (new1Number > newNumber){
check=confirm("Are you sure you want to continue?");
} if (check) {
alert(newNumber - new1Number);
}

if (newNumber === '' || new1Number === '') {
alert("Error");
} 




let lastNumber;
let last1Number;
lastNumber = prompt("Enter first number");
last1Number = prompt("Enter second number");
alert(lastNumber * last1Number);
