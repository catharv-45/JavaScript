// primitive (call by value means copy value of variable)

// types : String, Number, Boolean, null, undefined, Symbol, BigInt

// javaScipt is dynamically type language


const score = 200;            // number
const scoreValue =100.3;      // number
const isLoggedIn = false;     // boolean
const outsideTemp = null;    // object
let userEmail;               // undefined
const id = Symbol('123');    // Symbol
const newid = Symbol('123');    //Symbol

console.log(id === newid);    //false

const bigNumber = 938589839n;   //BigInt

//Reference(Non primitive)

//Array,Object,Functions // but all return value is function means object function,Array function

const heros =["shaktiman","naagraj","doga"];
let myObj={
    name : "Atharv",
    age : 22
}

const myFunction = function(){//function
    console.log("Hello world");
}
console.log(typeof heros);  //object
console.log(typeof myObj);   //object 
console.log(typeof myFunction); //function