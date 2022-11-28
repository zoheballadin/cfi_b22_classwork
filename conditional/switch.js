//SWITCH CASE
var readlineSync = require('readline-sync');
console.clear();
var num1 = readlineSync.questionInt("Enter Number 1 : ");
var num2 = readlineSync.questionInt("Enter Number 2 : ");

//CLI MENU
console.log("----------------------------");
console.log("SIMPLE CALCULATOR FOR MATHS");
console.log(`\t Press + for Addition \n\t Press - for Subtraction`)
console.log("----------------------------");


var symbol = readlineSync.question("Enter What you need to Perform : ");
switch (symbol) {
    case "+":
        //Code for That Thing
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        //Code for Minus




        break;
    default:
        console.log("Invalid Input")
        break;

}

//Assignment - 1 Week 4

/*

Create a CLI Application with the Follow Instructions

******************************
        AREA CALCULATOR
******************************

1. Press 1 to Select Square
2. Press 2 to Select Circle
3. Press 3 to Select Rectangle
4. Press 4 to Select Triangle

Please Enter your Choice : 


*/