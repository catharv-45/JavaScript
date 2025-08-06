const coding = ["js", "ruby", "java" , "python" , "cpp"];

coding.forEach(function name(item) {
    // console.log(item);
} )

coding.forEach((item) => {
    console.log(item)
})

function printMe(item){
    // console.log(item);

}
coding.forEach(printMe)

coding.forEach( (item , index, arr) => {
      console.log(item,index,arr); // It show array item value index of that value and all array
})

const myCoding  = [
    {
        languageName : "JavaScript",
        languageFileName: "JavaScript"

    },
    {
        languageName : "python",
        languageFileName: "puthon"

    },
    {
        languageName : "java",
        languageFileName: "java"

    }
]

myCoding.forEach((item) => {
    console.log(item.languageName); // accessing the language name value
})