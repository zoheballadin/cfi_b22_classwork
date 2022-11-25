var readlineSync = require('readline-sync');

//Greatest of Two Numbers

//Take 2 Number Inputs
console.clear();
var num1 = readlineSync.questionInt("Enter Number 1 : ");
var num2 = readlineSync.questionInt("Enter Number 2 : ");

(num1 > num2) ? console.log("Number 1 is Greater") : console.log("Number 2 is Greater");
