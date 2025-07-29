const accountId = 144223;      // cannot change the value 

let accountEmail = "atharv.com"
var accountpassword ="12345"
accountCity = "pune"
let accountState; //undefined

// accountId = 2  // not allowed 

accountEmail = "abcc@.com"
accountpassword = "123232"
accountCity ="mumbai"

console.log(accountId);
console.table([accountId,accountEmail,accountpassword,accountCity,accountState])


/*
prefer not to use var 
because of issue in block scope and functional scope

*/