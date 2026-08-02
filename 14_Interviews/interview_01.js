// Problem 1 -> Write a function which do "Atharv" "Chavan" -> ACthhaavravn

// Method 1
function AddString(s1,s2){
    let l1 = s1.length;
    let l2 =s2.length;
    let s3 ='';
    if(l1<=l2){
        for(let i=0;i<l1;i++){
            s3 += s1[i];
            s3 += s2[i];
        }
        for(let i=l1;i<l2;i++){
            s3 +=s2[i];
        }
    }
    if(l1>l2){
        for(let i=0;i<l2;i++){
            s3 += s1[i];
            s3 += s2[i];
        }
        for(let i=l2;i<l1;i++){
            s3 +=s1[i];
        }
    }
    return s3;
}
let result = AddString("Atharv","Chavan");
console.log(result);

// Method 2
function mergeStrings(s1, s2) {
    let result = "";
    let maxLength = Math.max(s1.length, s2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < s1.length) result += s1[i];
        if (i < s2.length) result += s2[i];
    }

    return result;
}

console.log(mergeStrings("Atharv", "Chavan")); // ACthhaavravn

// Problem 2 -> Longest word in statement 

function LongestWord(str1){
    let words = str1.split(' ');
    let result = words.reduce((MaxWord, word)=>{
        return MaxWord.length > word.length ? MaxWord : word ;
        
    }, "");
    return result;
}

console.log(LongestWord("Hi My name is Atharv"));

console.log(2-'2'); // 0

// Problem 3 ->     Merge all subarrays into one array.

let arr = [[1,2],[3,4],[5,6],[7,8]];

let resultArray = [];

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        resultArray[resultArray.length] = arr[i][j];
        // resultArray.push(arr[i][j]);
    }
}
console.log(resultArray);

// what is infinite curring ?

//Infinite Currying is a technique where a function keeps returning another function and 
//allows you to call it any number of times until you explicitly stop and get the final result.


