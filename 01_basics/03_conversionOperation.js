let score = true
//let score = "33"
// let score = null
// let score = undefined 

console.log(typeof score);
console.log(typeof(score));  //both are same 

let valueInNumber = Number(score) // convert sting into number
console.log(typeof valueInNumber) // output is number 

console.log(valueInNumber);  // 33 as output for string "33"
// 0 as value for null
//NaN as value for undefined
// 1 for boolean value

//et isLoggedIn = 1 => o/p:  true
//let isLoggedIn = 0  => o/p: false
// let isLoggedIn = "" => o/p: false
let isLoggedIn = "atharv"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let somenumber = 33;
let stringnumber =String(somenumber)
console.log(stringnumber);
console.log(typeof stringnumber);
