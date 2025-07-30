const score = 400
console.log(score)

const balance =new Number(100)
console.log(balance);

console.log(balance.toString().length);  //3 as length
console.log(balance.toFixed(2));   //100.00

const otherNumber = 123.83478
console.log(otherNumber.toPrecision(3));   //124

const hunderds = 10000000
console.log(hunderds.toLocaleString('en-IN'));  //1,00,00,000


// ********************** Maths ****************************

console.log(Math);
console.log(Math.abs(-4)); // 4 as output
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2));  // 5
console.log(Math.floor(4.9));  //4
console.log(Math.sqrt(25));    //5
console.log(Math.pow(2,5));    //32

console.log(Math.min(4,3,6,8)); // 3
console.log(Math.max(4,6,3,9));  //9

console.log(Math.random());   // get value between o to 1
console.log(Math.floor(Math.random()*10)+1);


const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1))+min) // to get element between 10 to 20







