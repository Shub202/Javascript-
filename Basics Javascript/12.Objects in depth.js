//Singleton -Constructs

//object literals 

const JsUser = {
    name: "Ram",
    age : 18,
    email: "ram123@gmail.com",
    lastlogindays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);

//****************Objects Part -2 ************/

// const tinderUser = new Object()   //Singleton Object 
 const tinderUser = {}      //Non - Singleton Object

 tinderUser.id = "90rmnab"
 tinderUser.name ="Random Acess Memory"

//console.log(tinderUser);

const regularIguser = {
    email : "Yahoo@98907.com",
    fullname : {
        userfullname : {
            firstname :"Ramulal",
            lastname: "Das"

        }
      }
    }
    console.log(regularIguser.fullname.userfullname.firstname);

    const obj1 = {1: "a", 2: "b"}
    const obj2 = {3: "a", 4: "b"}

    //const obj3 = {obj1,obj2}
   
    const obj3 = Object.assign(obj1, obj2)
    console.log(obj3);


console.log(tinderUser);
console.log(object.keys(tinderUser));


