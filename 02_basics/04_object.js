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

const course ={
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"Atharv"
}
// course.courseInstructor

const {courseInstructor :Instructor} = course; //courseInstructor value stored in new variable Instructor
console.log(Instructor);

const navbar = ({company}) => { //destructure

}
navbar(company = "hitesh")
// api from randomuser me .com

/*{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison",
        "salt": "sld1yGtd",
        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "56d27f4a53bd5441",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}*/