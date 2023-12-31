const fibonacci = function(position) {
  let currentValue = 1;
  let newLastValue = 0;
  let oldLastValue = 0;
  if (position >= 0) {
    for (let i = 0; i < position; i++) {
      currentValue += oldLastValue;
      oldLastValue = newLastValue;
      newLastValue = currentValue;
    }

    return currentValue;
  } else {
    return 'OOPS'
  }
  
  
};

console.log(fibonacci(4));
console.log(fibonacci(6));
console.log(fibonacci(10));
console.log(fibonacci(15));
console.log(fibonacci(25));
console.log(fibonacci(0));
console.log(fibonacci(-25));
console.log(fibonacci('0'));
console.log(fibonacci('2'));
console.log(fibonacci('8'));

// First, take the position to be wanted as the limit value. 
// To make this work, you need to keep summing in a loop until you get to the desired position
// There should be three initial values: The current value, which starts at position 0 (= 1), and then two Last Values to shift every new value into. New and Old. 
// The summation should do the following: 
  // First, sum the currentValue to the newLastValue. 
  // Then, assign the newLast to the Old. Finally, assign the current value to the newLast. 



// console.log(fibonacci(6));



// Do not edit below this line
// module.exports = fibonacci;
