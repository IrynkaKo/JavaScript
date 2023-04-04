let startingValue = prompt("Enter a number:");
let startingValue1 = prompt("Enter a number:");


     startingValue = Number(startingValue);
     startingValue1 = Number(startingValue1);

let accumulator = new Accumulator(startingValue);
let accumulator1 = new CancelableAccumulator (startingValue1);


function Accumulator(startingValue) {
  this.value = startingValue;
}
Accumulator.prototype.increment = function() {
  this.value += 1;
  alert(this.value)
}
Accumulator.prototype.decrement = function() {
  this.value -= 1;
  alert(this.value)
}


function CancelableAccumulator(startingValue1) {
  Accumulator.call(this, startingValue1);
}

CancelableAccumulator.prototype = Object.create(Accumulator.prototype);
CancelableAccumulator.prototype.constructor = CancelableAccumulator;

CancelableAccumulator.prototype.clear = function(newValue) {
  this.value = newValue;
  alert(this.value);
}



accumulator.increment();
accumulator.increment();
accumulator.decrement();
accumulator1.increment();
accumulator1.increment();
accumulator1.decrement();
accumulator1.clear();







