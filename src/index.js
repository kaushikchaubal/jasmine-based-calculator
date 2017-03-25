var express = require('express');
var app = express();

var Calculator = require('../src/Calculator');
var calculator = new Calculator();

var port = process.env.PORT || 3000;

app.get('/sum', function (req, res) {
    let firstNumber = parseInt(req.query.firstNumber);
    let secondNumber = parseInt(req.query.secondNumber);
    let answer = calculator.sum(firstNumber, secondNumber);
  
    res.send('sum(' + firstNumber + ', ' + secondNumber + ") = " + answer);
});

app.get('/subtract', function (req, res) {
    let firstNumber = parseInt(req.query.firstNumber);
    let secondNumber = parseInt(req.query.secondNumber);
    let answer = calculator.subtract(firstNumber, secondNumber);
  
    res.send('subtract(' + firstNumber + ', ' + secondNumber + ") = " + answer);
});

app.get('/multiply', function (req, res) {
    let firstNumber = parseInt(req.query.firstNumber);
    let secondNumber = parseInt(req.query.secondNumber);
    let answer = calculator.multiply(firstNumber, secondNumber);
  
    res.send('multiply(' + firstNumber + ', ' + secondNumber + ") = " + answer);
});

app.get('/divide', function (req, res) {
    let firstNumber = parseInt(req.query.firstNumber);
    let secondNumber = parseInt(req.query.secondNumber);
    let answer = calculator.divide(firstNumber, secondNumber);
  
    res.send('divide(' + firstNumber + ', ' + secondNumber + ") = " + answer);
});

app.get('/', function (req, res) {
    res.send('Hello User - use the correct endpoint to use the Calculator events!');
});

app.listen(port, function () {
    console.log('Jasmine-based Calculator running on port ' + port);
})