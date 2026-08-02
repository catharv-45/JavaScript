// Problem 1 -> Write a function which do "Atharv" "Chavan" -> ACthhaavravn
// 35 to 37min most imp watch it
// Method 1
function AddString(s1,s2){
    let l1 = s1.length;
    let l2 =s2.length;
    let s3 ='';
    if(l1<=l2){
        for(let i=0;i<l1;i++){
            s3 += s1[i];
            s3 += s2[i];
        }
        for(let i=l1;i<l2;i++){
            s3 +=s2[i];
        }
    }
    if(l1>l2){
        for(let i=0;i<l2;i++){
            s3 += s1[i];
            s3 += s2[i];
        }
        for(let i=l2;i<l1;i++){
            s3 +=s1[i];
        }
    }
    return s3;
}
let result = AddString("Atharv","Chavan");
console.log(result);

// Method 2
function mergeStrings(s1, s2) {
    let result = "";
    let maxLength = Math.max(s1.length, s2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < s1.length) result += s1[i];
        if (i < s2.length) result += s2[i];
    }

    return result;
}

console.log(mergeStrings("Atharv", "Chavan")); // ACthhaavravn

// Problem 2 -> Longest word in statement 

function LongestWord(str1){
    let words = str1.split(' ');
    let result = words.reduce((MaxWord, word)=>{
        return MaxWord.length > word.length ? MaxWord : word ;
        
    }, "");
    return result;
}

console.log(LongestWord("Hi My name is Atharv"));

console.log(2-'2'); // 0

// Problem 3 ->     Merge all subarrays into one array.

let arr = [[1,2],[3,4],[5,6],[7,8]];

let resultArray = [];

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        resultArray[resultArray.length] = arr[i][j];
        // resultArray.push(arr[i][j]);
    }
}
console.log(resultArray);

// what is infinite curring ?

//Infinite Currying is a technique where a function keeps returning another function and 
//allows you to call it any number of times until you explicitly stop and get the final result.


function sum(a) {
    return function (b) {
        if (b === undefined) {
            return a;
        }
        return sum(a + b);
    };
}

console.log(sum(1)(2)(3)(4)()); // 10
console.log(sum(5)(10)(15)());  // 30

/* 
Difference between settimeout and setInterval

setTimeout() -> Executes the function only once after the specified delay.
             -> Used for one time , Returns a timeout ID.
             -> Can be stopped using clearTimeout().
setInterval() -> Executes the function repeatedly after every specified interval.
              -> Used for repeating tasks, Returns an interval ID.
              -> Can be stopped using clearInterval().

*/

setTimeout(() => {
    // console.log("Hello after 2 seconds");
}, 2000);

let id = setInterval(() => {
   // console.log("Hello");
}, 1000);

setTimeout(() => {
    clearInterval(id);
}, 5000);

// Problem 4 -> give duplicate values in array

let newArr = [1,2,3,4,5,1,2];

// Method 1
let duplicateNum = newArr.filter((item, index)=>{
    // indexOf(item) returns the index of the FIRST occurrence of the item.
    // If the current index is NOT the first occurrence,
    // then this item is a duplicate.
    return newArr.indexOf(item) !== index ;
});

// Set removes duplicate values from the duplicates array.
// Spread operator (...) converts the Set back into an array.
console.log([...new Set(duplicateNum)]);

// Method 2
let arr2 = [1, 2, 3, 2, 4, 5, 1, 6, 3];

let duplicates = [];
for (let i = 0; i < arr2.length; i++) {
    for (let j = i + 1; j < arr2.length; j++) {
        if (arr2[i] === arr2[j] && !duplicates.includes(arr2[i])) {
            duplicates.push(arr2[i]);
        }
    }
}
console.log(duplicates);

/*
Difference between client side javascript and server side javascript ?

Client-side JavaScript runs in the browser and is used for user interface interactions, 
while server-side JavaScript runs on the server and is used for backend operations 
like APIs, databases, and authentication.
*/

/*Object destructuring means -> 
 Object destructuring is a way to extract values from an object and store them 
into variables using the same property names.

Example -> 
*/
const student = {
    name: "Atharv",
    age: 21,
    branch: "CSE"
};
let name = student.name;
let age = student.age;
// const { name, age, branch } = student;
console.log(name);
console.log(age);

// type of pop up boxes in JS -> alert(), confirm(), prompt()

/* difference between session storage and local storage ?

localStorage stores data permanently until it is deleted, while sessionStorage stores 
data only for the duration of a browser tab session. Both store data as key-value 
pairs and provide methods like setItem(), getItem(), and removeItem().
*/
/*
Splice method -> splice() is an array method used to add, remove, or replace elements in an array. 
It modifies the original array and returns the removed elements.

slice() creates a new array by copying a portion of an existing array without changing 
the original array, while splice() changes the original array by adding, 
removing, or replacing elements.
*/

/* what is best promises or async

Promises are the foundation for handling asynchronous operations in JavaScript, 
while async/await is a cleaner syntax built on top of Promises. 
In most modern applications, async/await is preferred because it improves 
readability and error handling.

*/