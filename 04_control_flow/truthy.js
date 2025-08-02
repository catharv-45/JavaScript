const userEmail = "h@hitesh.ai"

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}
// falsy values (assuming as false value)
// => false ,0 ,-0,BinInt 0n ,"",null,undefined,Nan

//truethy
//=> "0","false"," ",[],{},function(){},

if(userEmail.length === 0)
{
    //console.log("Array is empty");
}

const emptyObj ={}
if(Object.keys(emptyObj).length === 0){
      console.log("Object is empty");
}

// Nulllish Coalescing Operator (??): null undefined

let val1;
// val1=5 ?? 10 // output is 5
// val1 = null ?? 10; // output is 10. // same for undefined


console.log(val1);

const iceTeaPrice = 100 ;
iceTeaPrice <= 80 ? console.log("less than 80"):console.log("more than 80");