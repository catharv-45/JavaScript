const user = {
    username :"Atharv",
    price: 999,

    welcomeMessage:function(){ // function is declare inside the object
        console.log(`${this.username},welcome to website`); // we can refer current object value by this keywords
        //console.log(this);   //all value of user object 
    }

}
/*user.welcomeMessage()
user.username ="Sam";
user.welcomeMessage()*/
console.log(this);       // output : {}

//passing object in Function
/*const user = {
    username:"Atharv",
    price:200

}

function handleObject(anyobject){
      console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}*/


// +++++++++++++++++++ Arrow Function +++++++++++++++++
// we can use this function in arrow also
const chai = () => {
    let username ="Atharv"
    console.log(this.username); //undefined
}
// chai()

/* const addTwo = (num1,num2) => { // Explicit return
    return num1 + num2;
}*/

// Emplict return: return keyword is not used
const addTwo = (num1,num2) =>  num1+num2 // for one line statment
console.log(addTwo(3,4));

// const myArray = [2,3,4,5,6]
// myArray.forEach()