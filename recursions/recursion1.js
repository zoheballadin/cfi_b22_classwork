//What is a Recursion?

//A Function Calling itself is called a Recursion

//Initial Point
//Fix Base Statement / Termination Point
//Call Back Expression


//Factorial of a Number
/*
Factorial of a whole number 'n' is defined as the product of that number with every whole number less than or equal to 'n' till 1

0! = 1
1! = 1
2! = 2x1 = 2
3! = 3x2x1 = 6
4! = 4x3x2x1=24
5! = 5x4x3x2x1 =120

General form of a Factorial:
n! = n x (n-1)!

factorial(n) = n x factorial(n-1)

*/

//

//Function Definition

// Types of Functions
// Pre Defined Functions - Ex. Math.random()
// User Defined Functions Ex. print 100 numbers
// Recursive Functions Ex: Functions calling Themselves

//factorial(1) =1

function factorial(n) {
    if (n == 1 || n == 0) {
        return 1;
    } 
    return n * factorial(n - 1);
}

console.log(factorial(170));