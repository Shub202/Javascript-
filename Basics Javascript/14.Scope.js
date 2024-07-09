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

