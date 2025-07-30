// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);    // Object

//let myCreatedDate = new Date(2023,0,23)
//let myCreatedDate = new Date(2023 ,0, 23 , 5 , 3)// Mon Jan 23 2023  5:03:00
let myCreatedDate = new Date("2025-07-30")
console.log(myCreatedDate.toDateString());  // Mon Jan 23 2023

let mylocalDate = new Date("01-14-2025")
console.log(mylocalDate.toLocaleString());  // As indian origin

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDate());


newDate.toLocaleString('default',{
    weekday:"long"
})