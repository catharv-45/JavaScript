const myArr = [ 0,1,2,3,4,5,6];
const friends =["sahil",,"panjab"];
const myArr2 = (1,2,3,4)

console.log(myArr[0]);  // Accessing array element which has 0 index

// Array methods 

myArr.push(7);       // Add the element
// myArr.pop();        //delete last element 
console.log(myArr);

myArr.unshift(9);     // Add element at starting 
myArr.shift();        //delete first element of array

console.log(myArr.includes(9));  //It check the element is present or not 
console.log(myArr.indexOf(9));    //it show -1 because element is not in array

const newArr = myArr.join();

console.log(myArr);
console.log(newArr);  // it represent the string

// slice & splice

console.log("A" , myArr);

const myn1 = myArr.slice(1,3); // include 1 and 2 only not 3

console.log(myn1);          //output : [1,2]
console.log("B", myArr);    // output : [0,1,2,3,4,5,6,7]

const myn2 = myArr.splice(1,3);  // delete that portion of given range
console.log("C", myArr);    // output : C [0,4,5,6,7]
console.log(myn2);         // output : [1,2,3]



