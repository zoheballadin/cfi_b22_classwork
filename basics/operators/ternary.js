//Ternary Operators

//Syntax 

//Expression ? (Do this if True) : (Do this if False)

//Check if a Number is Even or Odd
//Check if a Number is Positive or Negative 
//Program to Check if a Number is Perfect Square or Not

var readlineSync = require('readline-sync');

var number = readlineSync.questionInt("Enter a Number : ");

//Handle Zero Case
(number > 0) ? console.log("Number is Postive") : console.log("Number is Negative");
