function sayMyname(){
    console.log("Atharv");
}
// sayMyname(); //Atharv

/*function sum(num1,num2){  // here we pass arguments in given parameters
    console.log(num1+num2);
}*/

function sum(num1,num2){
    //let result= num1+num2;
    //return result;
    return num1+num2;

}
const result = sum(3,5)

console.log("Result:", result);

// sum(3,4); // this are arguments
//sum(3,"4"); // output:34
//sum(3,"a"); // output:3a
//sum(3 ,null); //3

function loginName( username ="Atharv"){
    if(username == undefined)
    {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in `
}
console.log(loginName("sahil")); // sahil just logged in
console.log(loginName()); // Atharv just logged in


// when User add product in cart we don'd know how much 
//product are in there so require parameter in function 
//to solve this problem 

function CalculateCartPrice(...num1){ //rest operater :
      return num1;
}
console.log(CalculateCartPrice(200,300,400,2000));
//[ 200, 300, 400, 2000 ]

//passing object in Function
const user = {
    username:"Atharv",
    price:200

}

function handleObject(anyobject){
      console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleObject(user); // does required object passing we can access element in function

handleObject({
    username:"sam",
    price:399
})

// passing Array in function
const myNewArray = [ 200,400,100,500]

function returnSecondValue(getArray){ //getArray return same value of myNewArray
    return getArray[1];
}
// require array passing in given function
console.log(returnSecondValue(myNewArray)); // Accessing second element in array:400 

