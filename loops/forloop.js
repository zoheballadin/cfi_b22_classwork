//FOR LOOP SYNTAX

// for (var i = -1000; i <= -1000; i--) {
//     console.log(i);
// }
// //
var count = 0;

// for (var i = 0; i < 1000; i += 3) {
//     console.log(i);
//     count++;
// }

// for (var i = 0; i < 1000; i++) {
//     if (i % 3 == 0) console.log(i);
//     count++;
// }


// for (let i = 0; i < 1000; i++) {
//     console.log(++i);
//     count++;
// }


// for (let i = 1; i < 1000; i += 3) {
//     console.log(i);
//     count++;
// }

for (let i = 1; i < 1000; i *= 2) {
    console.log(i);
    count++;
}

console.log(count);