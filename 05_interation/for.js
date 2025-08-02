// for loop

for(let i = 0; i < 10;i++){
    const element = i;
    if(element == 5){
        console.log("5 is best number");
    }
    console.log(element);
    
}

// loop in loop

 for(let i=1;i<=10;i++){
    console.log(`Outer loop value: ${i}`);
    for(let j = 1;j<=10;j++){
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' +i*j); // tables
    }
}

 // new logic for single table

const num = 6;
if(num != 0)
{
    for(let i =1;i<=10;i++){
        //console.log( num + " * " + i + " = " + num*i);
    }
}

let myArray = ["flash" , "batman" , "superman"];

for (let i = 0; i <= myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}

//break and continue

/*for(let index = 1 ; index <= 20;index++){
    if(index == 5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${index}`);
}*/

// Continue 

for(let index = 1 ; index <= 20;index++){
    if(index == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
}
