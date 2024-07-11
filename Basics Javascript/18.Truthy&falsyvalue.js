const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else{
    console.log("Don't have user email");
}



//***********FALSY VALUE******//
//Notes:---//
//false, 0, -0, BigInt =>0n ,"" => empty string , null, undefined, NaN //

//************TRUTHY VALUE****//
//  String=>"0",'false'; "" , [], {}, function(){}





if (userEmail.length ===0) {
    console.log("Array is Empty");
}

const emptyObj ={}
if (Object.keys(emptyObj).length===0){
    console.log("Object Is Emprty");
}

//*******************Nullish Coalesing Operator (??): null undefined**************//

let val1;
val1=5 ?? 10
//val1=null ??10
//val1 =undefined ?? 15
val1 =null ?? 10 ??20

console.log(val1);

//******************Terniary Operator**********//
//Condition ? true : false 

const icecreamprice = 100
icecreamprice <=80 ? console.log("less than 80") :console.log("More than 80")