const user = {
    username: "Ramu",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.username} ,welcome to website`);

    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

function chai(){
    let username = "shyam"
    console.log(this.username);
}

chai()

//Arrow function

//const addTwo = (num1,num2) => {
    //return num1 + num2
//}

//console.log(addTwo(3,4));


const addTwo = (num1,num2) =>  num1 + num2
                                                //Implict type  

console.log(addTwo(3,4))


//const myArray = [2,5,3,7,8]

//myArray.forEach