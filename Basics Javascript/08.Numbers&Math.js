const score = 400 
console.log(score);

//Difference 

const balance = new Number(100)
console.log(balance);

//string 
console.log(balance.toString());
console.log(balance.toString().length)
console.log(balance.toFixed(2));

//Number Round off of number 
const otherNumber = 23.89663
console.log(otherNumber.toPrecision(3));

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));
console.log(hundreds.toLocaleString('en-us'));


//++++++++++++++++++++++Maths library++++++++++++++++++++//
console.log(Math);// this is the obejct in the javascript(run this program in the browser cosole section)
console.log(Math.abs(-4))// abs is used to change the negative value to the posistive value but the posistive remains the same 
console.log(Math.round(4.2))// this will round of the nearest value to the given number
console.log(Math.ceil(4.2))// this will give the 5 as output agar 4 se thora bhi jyaada hoga toh wo 4 ka nearest yani ki 5 output dega.
console.log(Math.floor(4.2))// yeh kam value dega matlab ki four hi 
// note that : ceil,floor hai wo round off ka controller hai 

console.log(`I am the controller of the Round of value of the ceil and the floor`)
console.log(`I am the nearest to the 5--> ${Math.ceil(4.2)} and I am the nearest value of the four--> ${Math.floor(4.2)}`)

