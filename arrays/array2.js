var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(a[0])
// console.log(a[1])
// console.log(a[2])
// console.log(a[3])
// console.log(a[4])
// console.log(a[5])
// console.log(a[6])
// console.log(a[7])
// console.log(a[8])
// console.log(a[9])


// for (var i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }

var arr2 = [0, 100, 200, 300, 400, 500, NaN];

var i = 0;
var length = 0;
while (arr2[i] != undefined) {
    console.log(arr2[i]);
    i++;
    length++;
}


// console.log(NaN)
console.log("Lenght of Array is ", length);