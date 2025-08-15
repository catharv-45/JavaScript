// Dates

let myDate = new Date()
console.log(myDate.toString()); // Fri Aug 15 2025 02:16:54 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleString()); // 8/15/2025, 2:16:54 AM

console.log(typeof myDate);    // Object

//let myCreatedDate = new Date(2023,0,23)
//let myCreatedDate = new Date(2023 ,0, 23 , 5 , 3)// Mon Jan 23 2023  5:03:00
let myCreatedDate = new Date("2025-07-30")
console.log(myCreatedDate.toDateString());  // Wed Jul 30 2025

let mylocalDate = new Date("01-14-2025")
console.log(mylocalDate.toLocaleString());  // 1/14/2025, 12:00:00 AM

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