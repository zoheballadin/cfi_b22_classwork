//String is a Group of Characters


var str = "abc";
console.log(str)
console.log(typeof (str));

var str2 = "DEF";
console.log(str + str2)

console.log(str.toUpperCase());
console.log(str2.toLowerCase());

console.log(str2[1])


//Take an Input from user as a String and Check if its 
// a Valid IPv4 address or Not, and Tell the Class of IP 
// and also determine if its Private or Public

var ip = "192.168.0.130";
console.log(ip.split(".")[0])

var keys = [192, 168, 1, 130];
console.log(keys.join("."))

//192.15451.15.12
//152201.115.22.2115
//12.12
//15
//asdf.asgd

//0.0.0.0
//255.255.255.255

//SPLICE AND SLICE
//Splice

let arr = ["I", "study", "JavaScript", "at", "CFI"];
var removed = arr.splice(2, 1);
console.log(arr);
console.log(removed);


//SLICE
let arr2 = ["I", "study", "JavaScript", "at", "CFI"];
console.log(arr2.slice(0, 3))
console.log(arr2.slice(1,3));

//Concat
var str1="ABCD";
var str2="DEFGH";

var new_str=str1.concat(str2);
// console.log(str1.concat(str2));
console.log(new_str)