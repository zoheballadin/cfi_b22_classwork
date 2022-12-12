var readlineSync = require('readline-sync');
console.clear();
var ip = readlineSync.question("Please enter your IP Address : ");

while (!validateIP(ip)) {
    ip = readlineSync.question("You have Entered an Invalid IP Address, Please Try Again : ");
}
function validateIP(ip_address) {
    var arr_ip = ip_address.split(".");
    
    //Check Length
    if (arr_ip.length != 4) {
        return false;
    }
    for (var i = 0; i < arr_ip.length; i++) {
        if (!(Number.isInteger(parseInt(arr_ip[i])))) {
            return false;
        }
        if (!(arr_ip[i] >= 0 && arr_ip[i] <= 255)) {
            return false;
        }
    }
    return true;
}
console.log(validateIP(ip));

