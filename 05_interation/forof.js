// for of 

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set("IN","India");
map.set("USA","United states of America");
map.set("Fr","France");
map.set("IN","India");

console.log(map);

for (const key of map) {
    console.log(key);
    // output : [ 'IN', 'India' ]
             // [ 'USA', 'United states of America' ]
            //  [   'Fr', 'France' ]
}
for (const [key,value] of map) {
    console.log(key , ":-" , value);
    // output : IN :- India
             // USA :- United states of America
             // Fr :- France
}

const myObject = { 
    'game1':'NFS',
    'game2' : 'Spiderman'
} // cannot use  this

