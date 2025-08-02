// Immediately Invoked Function Expression (IIFE)
(function chai(){ // named IIFE
    console.log(`DB connected`);

})(); //Automaticaly invoke
// global scope pollution problem hotiye kaybar global pollution ko hatane ke liye we use IIFE

((name) =>  {
    console.log(`DB connected too ${name}` );
})("Atharv")