//var c = 300
let a = 300
if (true) {
    let a = 10;
    const b = 20;
    // console.log("INNER: ", a);
    var c = 30;
    
}



// console.log(a); 
// console.log(b);
// console.log(c); // it will print the value only out of scope

function one(){ // father cannot take ice-cream from child
    const username ="Atharv";

    function two(){ // but child can take ice-cream from its father
        const website = "youtube";
        console.log(username);
    }
    //console.log(website); // cannot access outside the function
    
    // two();  // no any output
}
one();// output : Atharv

if(true){
    const username = "Atharv";
    if(username ==="Atharv"){
        const website = "Youtube"
        console.log(username + website); // AtharvYoutube
    }
    //console.log(website);  // show error cannot access outside the scope
}

//+++++++++++++++++++ interesting ++++++++++++++++++
console.log(addone(5)); // output: 6
function addone(num){   //function
    return num +1;
}
console.log(addTwo(5)); // error is occur
const addTwo = function(num){ //Expression
    return num + 2;
}

