//Array

const myArr = [0,1,2,3,4,5]
const myHeors = ["Shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
//console.log(myArr[1]);

//Array methods

//myArr.push(6) //Additon of value  in the String 
//myArr.push(7)
//myArr.pop() //Array ka last Value Remove hou jata hai pop use krna pe 

//myArr.unshift(9) //Additon of number in an array  in String

//console.log(myArr.includes(9)); 
//console.log(myArr.indexOf(19));

//const newArr = myArr.join()

//console.log(myArr);
//console.log(newArr);


// Splice, Slice 

console.log("A ", myArr);

const myn1 =myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);

//Difference between Slice and Splice
//For the Difference run the code 

