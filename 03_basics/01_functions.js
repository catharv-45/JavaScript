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
//console.log(loginName("Atharv"));
console.log(loginName());