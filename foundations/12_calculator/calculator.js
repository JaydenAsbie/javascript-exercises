const add = function(a,b) {
    return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
    let totals = numbers.reduce((total, number) => {
        return total + number;
    },0);

    return totals; 
	
};

const multiply = function(numbers) {
    let result = 1;

    for (let i = 0; i < numbers.length; i++) {
        result *= numbers[i];
    }

    return result;
};

const power = function(a, b) {
    let result = 1;

    for(let i = 0; i < b; i++){
        result *= a;
    }
	return result;
};

const factorial = function(a) {
  let result = 1;

  for (let i = 2; i <= a; i++) {
    result *= i;
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
