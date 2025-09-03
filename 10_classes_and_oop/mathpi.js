
// console.log(Math.PI);  // 3.14159265
// Math.PI =5
// console.log(Math.PI); // it does not override output: 3.14159265


const descripter =  Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descripter);

const chai = {
    name:'patil',
    price:10,
    isAvailable :true,

    orderChai:function(){
      console.log('hello');
    }
}
//console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// define specific property in object like
//{
  //value: 'patil',
  //writable: true,
  //enumerable: true,
  //configurable: true
//}

/*Object.defineProperties(chai,'name',{
    writable:false,
    enumerable:false
})*/

console.log(Object.getOwnPropertyDescriptor(chai,'name'));

for (let [key,value] of Object.entries(chai)) {
  if(typeof value !== 'function'){
    console.log(`${key}: ${value}`);
  }
  
}