//BitWise Operators in JS

//BITWISE AND    &

/*   

Truth Table
A   B   A&B
0   0   0   
0   1   0
1   0   0
1   1   1

*/

console.log(10 & 5);

/*

1. Convert Decimals to Binaries
10 & 5

10  =   1 0 1 0
5   =   0 1 0 1
        0 0 0 0   = 0        


10 & 7

10  =   1 0 1 0
7   =   0 1 1 1
        0 0 1 0 = 2


*/
console.log(10 & 7);




/* 
BITWISE OR    | 

Truth Table

A   B   A|B
0   0   0   
0   1   1
1   0   1
1   1   1   


6 | 9

6   =    0 1 1 0
9   =    1 0 0 1
    =    1 1 1 1  =15


*/

console.log(6 | 9);


/*

BITWISE XOR ^

Truth Table

A   B   A^B
0   0   0
0   1   1
1   0   1   
1   1   0


15 ^ 12

15  -   1 1 1 1
12  -   1 1 0 0
        0 0 1 1   3


*/

console.log(15 ^ 12);
//Blog Topic
//Use of Bitwise Operators in Programming Languages


/* 

BITWISE NOT  ~

FLIP / Invert the Bits 
Unary Operator

5   =    1 0 1
5   =    0 0 0 0 0 1 0 1
?    =   1 1 1 1 1 0 1 0
1's C =  0 0 0 0 0 1 0 1
                    +  1
2's C =  0 0 0 0 0 1 1 0
                -6
         

    =   0 1 0   //2

~a = -(a+1);


*/
// 1   -   00000000000000000000000000001
/*

2   -   10
4   -   100
6   -   110
8   -   1000
10  -   1010
12  -   1100
14  -   1110
16  -   10000
18  -   10010
20  -   10100

1   -   1
3   -   011
5   -   101
7   -   111
9   -   1001
11  -   1011
13  -   1101
15  -   1111
17  -   10001
19  -   10011


2 & 1
3 & 1
4 & 1
5 & 1

*/
console.log(
    2 & 1,
    3 & 1,
    4 & 1,
    5 & 1);



console.log(~5);

var a = 10, b = 5;

a = a & b;
console.log(a);
a &= b;
console.log(a);

