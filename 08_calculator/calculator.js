const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
  return num1-num2;
};

const sum = function(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++){
    total += array[i];
  }
  return total;
};

const multiply = function(array) {
  let total = 1;
  array.forEach( num => total *= num);
	return total;
};

const power = function(num1, num2) {
  let power = num1;
  for(let i = 0; i< num2-1; i++){
    power *= num1;
  }
  return power;
};

const factorial = function(num) {
if (num == 1){
    return 1;
  } else if (num ==0) {
    return 1;
  }	else {
    return num * factorial(num-1);
  }
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
