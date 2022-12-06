var b = [1, 2, 3];
console.log(b);
b[b.length] = 4;
console.log(b);
b.push(100);
b.push("Mohsin")
console.log(b);

//PUSH 
//It is used for Adding Elements to the End of an Array


//POP
//Used to Remove the Last Element from an Array
b.pop()
// console.log(b.pop())
console.log(b);


//SHIFT
//Removes the First Element from the Array
b.shift();
console.log(b);

//UNSHIFT
//Adding Element to the First Index
b.unshift(100,200,300,520);
console.log(b);