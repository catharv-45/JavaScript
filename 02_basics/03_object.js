// singleton
//Object.create


// object literals
const mySym = Symbol("key1")
const JsUser = {
     name:"Atharv",
     "full name":"Atharv Chavan",
     [mySym]: "mykey1",
     age : 18,
     location : "Sangli",
     email:"abchdsjf.com"

}
console.log(JsUser.age);     // 18
console.log(JsUser["email"]); // abchdsjf.com
console.log(JsUser.email); // abchdsjf.com

console.log(JsUser["full name"])  // for accessing the full name value

console.log(JsUser[mySym]);  //mykey1
console.log(JsUser.mySym); //undefined

JsUser.email = "Atharv@gmail.com"
//Object.freeze(JsUser);    // After this it does not allowed to change value of object

JsUser.email = "Sahil.gmail.com"
console.log(JsUser);


JsUser.greeting = function(){
     console.log("Hello Friends");

}
JsUser.greetingtwo = function(){
     console.log(`Hello Friends, ${this.name}`);

}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo())
