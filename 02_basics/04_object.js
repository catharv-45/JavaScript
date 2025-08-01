// const tinderUser = new Object()
const tinderUser = {}

// Adding entitys in object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isloggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email:"Atharv@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Atharv ",
            lastname:"chavan"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);
// output is Atharv

const obj1 ={1:"a", 2:"b"};
const obj2 ={3:"c", 4:"d"};
const obj4 ={5:"a", 6:"b"};


//const obj3 = {obj1,obj2}
// output:{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//const obj3 = Object.assign({},obj1,obj2); // add two object
//output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3 = {...obj1,...obj2}
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj3);

const user =[ //declare many object in one array
    {

    },
    {

    }
]
user[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // print keys like id , age etc
// [ 'id', 'name', 'isloggedIn' ]
console.log(Object.values(tinderUser)); // print value of keys like abc123,18 etc
// [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)); // convert into array
// [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isloggedIn', false ] ]


console.log(tinderUser.hasOwnProperty('isloggedIn'));
// false :check that this property is included or not in given object
