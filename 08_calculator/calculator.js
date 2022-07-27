const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = function(arr) {
	let sum = arr.reduce((a, b) => a + b, 0);
  return sum;
};

const multiply = function(arr) {
  let mult = arr.reduce((a, b) => a * b, 1);
  return mult;
};

const power = (a, b) => a**b;

const factorial = function(a) {
	if (a == 0) return 1;
  if (a == 1) return 1;
  if (a == 2) return 2;
  return a * factorial(a -1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
