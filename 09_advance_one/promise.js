// the promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// console.log("promises");
// there are three state : a.pending b.fulfilled c.rejected

const promiseone = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
});

promiseone.then(function(){
    console.log("Promise consumed");
});  // resolve connection with .


new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Atharv", email:"atharv@123.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true; 
        if(!error){
            resolve({username:"atharv",password:123})
        }else{
            reject('Error: Something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{ // chainning
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);

}).catch(function(error){
    console.log(error); // also check for false 
}).finally(()=> console.log("The promise is either resolved or rejected"))

const promisefive = new Promise((resolve,reject)=>{
setTimeout(function(){
        let error = true; 
        if(!error){
            resolve({username:"javascript",password:123})
        }else{
            reject('Error: JS went wrong')
        }
    },1000)
});

async function consumePromiseFive(){
   try{
       const response = await promisefive;
       console.log(response);
   }catch(error){
        console.log(error);
   }

}
consumePromiseFive()

/*async function getAllUsers(){
    try {
       const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
      } 
     catch (error) {
        console.log("Error: ",error);

    }
}*/


//getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))