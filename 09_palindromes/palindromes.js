const palindromes = function (string) {
  const reversedString = string.split('').reverse().join('');
  return string === reversedString;
};

console.log(palindromes('racecar'));
console.log(palindromes('tacos'));

// Do not edit below this line
// module.exports = palindromes;
