const myObject = { // how to use forin loop for object
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "Swift by apple"

}

for (const key in myObject) {
    //console.log(` ${key} shortcut is for ${myObject[key]}`);
    console.log(key); // it display key name like js,rb etc
    console.log(myObject[key]); // it show value of key
}

//How to use forin loop for array

const programming = ["js","rb","py","java","cpp"]

for(const key in programming){
    // difference between object and array   
    console.log(key); // show  index of key value
    console.log(programming[key]); //show key values
}

// For map function there is no output

const map = new Map()
map.set("IN","India");
map.set("USA","United states of America");
map.set("Fr","France");
map.set("IN","India");

for(const key in map){
     console.log(key);  // no output 
      console.log(map[key]);
}