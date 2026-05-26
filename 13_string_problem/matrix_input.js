let row = "1 2 3";

let arr = row.split(" ");
console.log(arr); // output : [ '1', '2', '3' ]

let matrixRow = row.split(" ").map(Number);
console.log(matrixRow); // output : [ 1, 2, 3 ]