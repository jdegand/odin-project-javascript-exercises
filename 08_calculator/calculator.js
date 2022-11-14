const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array) {
	return array.reduce((a,b)=> a + b, 0)
};

const multiply = function(nums) {
  return nums.reduce((a,b)=> a * b)
};

const power = function(num, p) {
	return num ** p
};

const factorial = function(num) {
  let result = num;

  if(num === 0) return 1
    
  while (num > 1) { 
    num--;
    result = result * num; 
  }

  return result;
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
