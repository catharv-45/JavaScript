//is it ok sir
console.log(0.1 + 0.2 === 0.3 );// false
console.log(0.1 + 0.2); //0.30000000000000004

// convert object into string
const obj1 = {
    a : 1,
    b : 2,

}
const str = JSON.stringify(obj1);
console.log(str); // {"a":1,"b":2}

//create shallow copy of an object
const obj2 = {
    name: "Atharv",
    age: 20
}
const copy = {...obj2};
console.log(copy); //{ name: 'Atharv', age: 20 }

// change value in onject
const obj3 = {
  a: 1,
  nested: { b: 2 }
};
const copy1 = { ...obj3 };
copy1.nested.b = 100;
console.log(obj3.nested.b); // 100 (changed)

// What is reduce method?
//-> reduce method is used to reduce array to a single value(like sum, product)

const numbers = [1,2,3,4];

const sum = numbers.reduce((acc,curr)=>{
    return acc + curr;
},0);
console.log(sum);

// The map() method is used to create a new array by applying a function to each element of the original array.

const result = numbers.map(num => num * 2);
console.log(result); 
// [2, 4, 6, 8]

const result1 = numbers.filter(num => num * 2);
console.log(result1); //[ 1, 2, 3, 4 ]

//The filter() method is used to create a new array with only those elements that satisfy a given condition.

const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);
// [2, 4, 6]