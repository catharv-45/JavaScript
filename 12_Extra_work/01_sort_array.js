const arr = [1,2,3,4,5,6];
console.log(...arr);

function maxProduct(arr){
    const sortedArr = arr.sort((a,b)=>b-a);
    return sortedArr[0]*sortedArr[1];
}
const answer =  maxProduct(arr);
console.log(answer);

// delete all element in array with the help of one line
// arr.length = 0;
 arr.splice(0,arr.length);
console.log(...arr);

// merge two object 
const obj1 = {
    title : 'atharv',
    age : 18
}

const obj2 = {
    title : 'raj',
    age : 20
}

const obj3 = {...obj1,...obj2}; // best option

const mergedObj = {
  obj1,
  obj2
};

console.log(obj3);