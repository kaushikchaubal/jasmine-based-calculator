var Calculator = require('../src/Calculator');
var calculator;

beforeEach(function() {
  calculator = new Calculator();
});

it("Add two numbers", function() {
      expect(calculator.sum(1, 3)).toEqual(4);
});

it("Subtract two numbers", function() {
      expect(calculator.subtract(1, 3)).toEqual(-2);
});

it("Multiply two numbers", function() {
      expect(calculator.multiply(1, 3)).toEqual(3);
});

it("Divide two numbers", function() {
      expect(calculator.divide(6, 3)).toEqual(2);
});