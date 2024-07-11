//if

const isuserloggedIn = true
const temperature = 40
if(temperature < 50){
    console.log("less than 50");
} else {
console.log("temperature is greater than 50");
}

console.log("Execute");
//Types 
// <, >, <= Equal or greater, >=, == Equal, != Not equal , === Type 2 === "2" , !==

const score = 200

if (score > 100) {
    let power = "fly"
    //console.log(`user power:${power}`);
}
//console.log(`user power:${power}`);

//Short hand notion

const balance = 1000

//if (balance >500) console.log("test"),
//console.log("test2");    Not to use its immature things 

if (balance<500) {
    console.log("less than 500");
} else if (balance<750){
    console.log("less than 750");
}else if (balance<900){
    console.log("less than 750");
}else{
    console.log("less than 1200");
}

//************Shopping************/

const userloggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true 

if (userloggedIn && debitcard && 2==2) {
    console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}


//******Switch *****//
//switch (key) {
    //case value:
        
        //break;

    //default:
        //break;
//}

//************Number Case//

//const month = 3 

//switch (month) {
    //case 1:
        //console.log("January");
        //break;

        //case 2:
        //console.log("Feb");
        //break;

        //case 3:
        //console.log("March");
        //break;
        //case 4:
        //console.log("April");
        //break;

    //default:
       // console.log("default case Match");
        //break;
//}

//************String Case */
const month = "March" 

switch (month) {
    case "January":
        console.log("January");
        break;

        case "Feb":
        console.log("Feb");
        break;

        case "March":
        console.log("March");
        break;
        case "April":
        console.log("April");
        break;

    default:
        console.log("default case Match");
        break;
}


