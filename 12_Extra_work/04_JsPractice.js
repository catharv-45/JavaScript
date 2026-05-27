// 84 interview

let arr1 = [10,20,30,40,50,60,70,80,90,100];

console.log(arr1.find((num)=>num>50)); // return only first element: 60 
/*
Q.1 difference between undeclare and undefined variables
    undeclare -> where which we have not declare
    undefined -> variable which we have declare but not assign any value

Q.2 Types of error in Javascript : 
    reference Type error and syntax  error

-  we cannot redeclare let and const only var can be redeclare

Q.3 what is temporial date zone
*/


// console.log(a,b); // undefined , referenceError
// var a = 10;
// let b = 100;

// destructuring the object 
let obj = {a:1,b:2,c:3};
let {a,b} = obj;
console.log(obj);

/*
Q.4 difference betwwen forin and forof loop
    forin -> work on object to get key and values 
    forof -> work on array to get elements in array
*/

// convert object key into array : 
const obj = {
  name: "Atharv",
  age: 21,
  city: "Sangli"
};

const keys = Object.keys(obj);
console.log(keys);

// convert object values into array :
const values = Object.values(obj);
console.log(values);

// convert object into key-values array : 
const arr = Object.entries(obj);
console.log(arr);

/*
Q.5 difference between function declaration and function expression 
    declaration means when only delare function not store in any variable
    expression means when we assign function function to variable
*/