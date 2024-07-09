function addTwoNumbers(number1,number2){
    console.log(number1 + number2);
}

addTwoNumbers(3,"a")
addTwoNumbers(3,"6")   //See the Difference between 4 outputs// 
addTwoNumbers(3,null)
addTwoNumbers(3,6)

function loginUserMessage(Username ="Shyam"){
    if(!Username){   // ! => Changed the value from True to False and False to True //
        console.log(("Please enter your name"));
        return
    }
    return `${Username} Just Logged In`
}

//console.log(loginUserMessage("Mohan"));
console.log(loginUserMessage()); //If we Pass the Value the Value will Overwrite it will change from Shyam to that value //

//+++++++++Shopping Card Function Parameters++++++++++//

function CalculateCartprice(...num1){
    return num1
}

console.log(CalculateCartprice(200,400,500,2000));

const user ={
    username : "Lalram",
    price:199
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.Username} and the price is ${anyobject.price}`);

}
//handleobject(user)
handleobject({
    username : "sam",
    price : 599
})


const mynewArray =[300,400,600,100]

function returnSecondvalue(getArray){
    return getArray[1]
}
console.log(returnSecondvalue(mynewArray));