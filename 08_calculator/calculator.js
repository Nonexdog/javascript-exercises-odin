const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numArray) {
  let total = 0;
	for (number of numArray) {
    total += number;
  }

  return total;
};

const multiply = function(multArray) {
  let total = 1;
  for (number of multArray) {
    total *= number;
  }
  return total;
};

const power = function(num, pow) {
	return num**pow;
};

const factorial = function(num) {
  let total = 1;
  if (num < 0) {
    return NaN;
  } else {
    for (let i = 1; i <= num; i++) {
      total *= i;
    } 
  }

  return total > 0 ? total : 1;
};

/* console.log(add(0,0));
console.log(add(2,2));
console.log(add(2,6)); */

// console.log(subtract(10, 4));

// console.log(sum([]));
// console.log(sum([7]));
// console.log(sum([7,11]));
// console.log(sum([1,3,4,56]));

// console.log(multiply([2, 4]));
// console.log(multiply([2, 4, 6, 8, 10, 12, 14]));

// console.log(power(4, 3));

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(10));

// Do not edit below this line

