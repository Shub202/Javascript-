//While and do while loop in Js
let index = 0
while (index<=10) {
    console.log(`value of index is ${index}`);
    index = index + 2
}

//Array
let myArray = ["flash", "batman","Superman"]
let arr = 0
while (arr<myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr = arr + 1
    
}

//do while loop
let score = 11
do {
    console.log(`score is ${score}`);
    score++
} while (score <=10);

//for of 

//["", "", ""]
//[{},{},{}]

const Array = [1,2,3,4,5]
for (const num of Array) {
    console.log(num);
}

const greetings = "HELLO WORLD!"
for(const greet of greetings){ 
    console.log(`Each char is ${greet}`);
}

//Maps
const map = new Map()
map.set('In',"India")
map.set('USA',"United states of America")
map.set('Fr',"France")
map.set('In',"India")


//console.log(map);
for(const[key,value]of map){
    console.log(key,':-',value);

}
const myobject ={
    game1: 'NFS',
    game2: 'Spiderman'
}
//for (const [key,value] of myobject) {
  //  console.log(key, ':-',value);
//}


