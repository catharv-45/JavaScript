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

//let isLoggedIn = 1 => o/p:  true
//let isLoggedIn = 0  => o/p: false
// let isLoggedIn = "" => o/p: false

let isLoggedIn = "atharv"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)  //true

let somenumber = 33;
let stringnumber =String(somenumber)
console.log(stringnumber);  //33
console.log(typeof stringnumber);//string


//   ***************************   Operations   ************************

let value = 3
let negValue = -value
console.log(negValue); //-3

console.log(2**3); // output 8

let str1 ="hello"
let str2 ="atharv"

console.log(str1+str2)

console.log("1" + 2);      // 12
console.log(1 + "2");      // 12
console.log("1" + 2 +2 );  // 122
console.log(1 + 2 + "2"); // 32

console.log(true);  //true
console.log(+true);  //1
console.log(+"");    //0

