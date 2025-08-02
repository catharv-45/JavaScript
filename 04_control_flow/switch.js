// Switch case statements

/* switch (key) {
    case value:
        
        break;

    default:
        break;
}*/

const month = 3;

switch (month){
    case 1:
        console.log("Janusry");
        break;
    case 2:
        console.log("feb");
        break;
    case 3 :
        console.log("march"); // here code is executed but it check all option except default
        break;
    case 4 :
        console.log("april");
        break;
    case 5 :
        console.log("may");
        break;
    default: console.log("noun of the above");
        break;

}