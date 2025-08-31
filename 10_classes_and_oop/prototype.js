let myname = 'atharv    ';
let mychannel ='chai     ';

//console.log(myname.trim().length);

// we have to create our function for trim 

let myHeros = ['thor','spiderman']

let heroPower = {
    thor:'hammer',
    spiderman : 'sling',

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
// create our prototype
Object.prototype.atharv =function(){
    console.log(`atharv is present in all objects`)
}
// heroPower.atharv();
myHeros.atharv();

Array.prototype.heyatharv = function(){
    console.log(`Atharv is here`)
}
myHeros.heyatharv();
// heroPower.heyatharv();//error

// array prototype cannot use for object only for array 
//but object prototype is used for all function,array and object

// inheritance

const User ={
    name:'chai',
    email:'Atharv@gmail.com'
}


const Teacher = {
    makeVideo:true
}
const TeachingSupport = {
    isAvailable :false

}
const TASupport = {
    makeAssignment:'JS assignment',
    fulltime:true,
    __proto__: TeachingSupport // it is used for accessing properties of teachingSupport

}
//also we can use outside
Teacher.__proto__ = User;


// new approch/ modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher);

let anotherUsername ="Atharv chavan    ";

String.prototype.trueLength = function(){
    console.log(`${this}`)// atharv chavan
    console.log(`${this.name}`);//undefined
    console.log(`True length is : ${this.trim().length}`)
}

// anotherUsername.trueLength();

anotherUsername.trueLength()
"Atharv".trueLength()
"iceTea".trueLength()