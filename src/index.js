var express = require('express');
var app = express();

var Calculator = require('../src/Calculator');
var calculator = new Calculator();

app.get('/sum', function (req, res) {
    let firstNumber = req.query.firstNumber;
    let secondNumber = req.query.secondNumber;
    let answer = calculator.sum(parseInt(firstNumber), parseInt(secondNumber));
  
    res.send('Summation of ' + firstNumber + ' & ' + secondNumber + " is " + answer);
})

app.get('/', function (req, res) {
    res.send('Hello User - use the correct endpoint to use the Calculator events!')
})

app.listen(3000, function () {
    console.log('Jasmine-based Calculator running on port 3000!')
})