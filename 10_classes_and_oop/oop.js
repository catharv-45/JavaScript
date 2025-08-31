// object literal- collection of properties

const user = {
    username:"hitesh",
    loginCount:8,
    signedIn:true,

    getUserDetails : function(){
        // if we do not use this keyword than it show error
        console.log(`Username:${this.username}`);
        console.log(this);//refers to current context
    }
}
console.log(user.username);
//console.log(user.getUserDetails());// show all object value 
console.log(this); // output : {}

// constructor function
//const promiseone = new Promise() // new key word known as constructor function
// const date =new Date();

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

   // return this
   this.greeting =function(){
    console.log(`Welcome ${this.username}`);
   }
   return this
}

//const userOne = User('hitesh',12, true)
//const userTwo = User('Atharv',11,true)
//console.log(userOne);// it show user two value which is wrong

// after using new keyword
const userOne = new User('hitesh',12, true)
const userTwo = new User('Atharv',11,true)

console.log(userOne.constructor);
//console.log(userTwo);
