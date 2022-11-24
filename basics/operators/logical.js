

console.log(5 < 100 && 100 > 10 && 12 < 10);
console.log(5 < 100 || 100 > 10 || 12 < 10);

console.log(100 && 40 && 30);
console.log(100 && 40 && 0 && 15);
console.log(100 && 40 && "" && 15);
console.log(100 && 40 && undefined && 15);
console.log(100 && 40 && null && 15);


console.log("Logical OR");
console.log(100 || 40 || 30);
console.log(100 || 40 || 0 || 15);
console.log(100 || 40 || "" || 15);
console.log(100 || 40 || undefined || 15);
console.log(100 || 40 || null || 15);

console.log("" || 0 || undefined || null || NaN || "hello");
console.log("" && 0 && undefined && null && NaN && "hello");



//Zero Values or Falsy Values 

/*
0
Empty String 
undefined
null
false
NaN
*/

/*

Logical NOT


*/
console.log("Logical NOT")
console.log(!(5 < 100 && 100 > 10 && 12 < 10));
console.log(!("" && 0 && undefined && null && NaN && "hello"));
console.log(!("" || 0 || undefined || null || NaN || "hello"));
