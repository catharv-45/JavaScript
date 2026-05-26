let str = "banana";
// let chars = str.split(""); // output : [ 'b', 'a', 'n', 'a', 'n', 'a' ]
// console.log(chars);

let freq = {};

str.split("").forEach(ch => {
    freq[ch] = (freq[ch] || 0 ) + 1;
});

console.log(freq);  // output : { b: 1, a: 3, n: 2 }
