const name = "hitesh"
const repoCount = 50;


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Atha-rv')

console.log(gameName[0]);        //output:h
console.log(gameName.__proto__);  //output : {}
console.log(gameName.length);
console.log(gameName.toUpperCase());  // ATHA-RV
console.log(gameName.charAt(2));  // h
console.log(gameName.indexOf('t')); // 1

const newString = gameName.substring(0,4)
console.log(newString);      //Atha

const anotherString = gameName.slice(0,4)
console.log(anotherString);    //Atha

const newStringOne ="       Atharv       "
console.log(newStringOne);  
console.log(newStringOne.trim()); //remove spaces

const url = "https://Atharv@20.com"
console.log(url.replace('20',"-"));   // replace 20 by -
console.log(url.includes('Atharv'));    //true

console.log(gameName.split('-'));// ['Atha', 'rv']
