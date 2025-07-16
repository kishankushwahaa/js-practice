const accountId = 343232
let accountEmail = "hfsjai@gmail.com"
var accountPassword = "12345"
accountCity = "janakpur"

// accountId =2 //not allowed

accountEmail = "dhdb@.com"
accountPassword = "21211222"
accountCity = "kathmandu"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity])