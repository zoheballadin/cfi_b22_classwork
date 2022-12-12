// function mul(i){
//     if (i==6){
//         return
//     }
//     else{
//         console.log(i)
//         return mul(++i)
//     }
// }
// mul(1)

// function f(n){
//     if (n==0 || n==1) return n;
//     if (n%3 != 0) return 0;
//     return f(n/3)
// }

// console.log(f(4));


// function f(n) {
//     if (n == 0) return;
//     console.log(n % 2)
//     f(Math.floor(n / 2))
// }
// f(15)

//Write a Recursive Function to Convert a Decimal to
//Ternary and Octal

//CLI
//1. Press 1 for Ternary
//2. Press 2 for Octal



/*

15 -1
7 - 1
3 - 1
1

15%2 = 1
7%2 =1
3%2 =1

15/2 =7.5 => 7
7/2 = 3.5 => 3

*/


// function fun1(x, y) {
//     if (y == 0) return 0;
//     return (x + fun1(x, y - 1))
// }
// var res = fun1(5, 10);
// console.log(res);

//x*y


function robot(n, a, b) {
    if (n <= 0) { return; }
    robot(n - 1, b, b + n)
    console.log(n, a, b)
    robot(n - 1, b, a + n)
}

robot(3,5,3)