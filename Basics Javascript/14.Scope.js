//let a = 10
//const b = 20
//var c = 30

//var c =300            //***Global Scope 
let a = 300   //Outer // Global 
if (true){
    let a = 10          //***=> Block Scope
    const b =20
    console.log("INNER:", a);
     
}              //{} => Scope 


console.log(a);
//console.log(b);
//console.log(c);


//Nested loop//

function one (){
    const username ="Lallu "
     function two (){
        const Website ="Youtube"
        console.log(username);
     }
     //console.log(Website);
     two()
}
//one()luel


if (true) {
    const username = "hari"
    if (username === "hari") {
        const Website = "youtube"
        console.log(username + Website);
    }
    //console.log(Website);
}
//console.log(username);



console.log(addone(5));
function addone(num){
    return num + 1
}




console.log(addtwo(5));     //Error => because declaration  of value is not correct 
const addtwo = function(num){
    return num + 2
}