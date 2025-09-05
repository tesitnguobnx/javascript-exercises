const add = function(a, b) {
  return a + b
};

const subtract = function(a , b) {
  return a - b
};

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(arr) {
  resultado = 1;
  for (let i = 0; i < arr.length; i++) {
    resultado *= arr[i]
  }
  return resultado
};

const power = function(a, b) {
  return a**b
};

const factorial = function(z) {
  resultado = 1;
  
  for (let i = 1; i <= z; i++) {
    resultado *= i
  }
  return resultado
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
