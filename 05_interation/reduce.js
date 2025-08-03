const myNums = [1,2,3]

/*const myTotal = myNums.reduce(function (accumalator ,current_value)
{
    console.log( `Accumalator ${accumalator} and current value : ${current_value}`);
    return accumalator + current_value;
},0) // accumalattor initial value is 0
console.log(myTotal);
*/

/* output :
Accumalator 3 and current value : 1
Accumalator 4 and current value : 2
Accumalator 6 and current value : 3
9
@ca*/

//by using array function

const myTotal = myNums.reduce((acc,curr) => acc+curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "mobile dev course",
        price : 5999
    },
    {
        itemName : "python",
        price : 7999
    },
    {
        itemName : "data science course",
        price : 10999
    }
]

const total = shoppingCart.reduce((acc,item) => item.price + acc,0)
console.log(total);