function Calculator() {
}

Calculator.prototype.sum = function(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

Calculator.prototype.subtract = function(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

Calculator.prototype.multiply = function(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
};

Calculator.prototype.divide = function(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
};


module.exports = Calculator;