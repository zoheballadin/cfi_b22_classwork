var arr = [];
var arr2 = new Array(10);
// var arr;

arr[0] = 1;
arr[2] = 5;
arr[5] = 100;
console.log(arr);
// console.log(arr[1]);

console.log(arr2);
console.log(arr2.length);

var c = [1, 2, 3]

//Assignment Question:
//Generate a New Array after taking Input from User and Assign a Default value of 0 to all Elements

//10
//[0,0,0,0,0,0,0,0,0,0]
//  0  1  2  3   4  5   6   7   8   9
var arr3 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
//      -10 -9 -8 -7 -6 -5 -4 -3 -2 -1  
arr3[4] = "Hello";
console.log(arr3);

console.log(arr3[arr3.length - 1]);


console.log(arr3.at(-(arr3.length)));
console.log(arr3[-1]);