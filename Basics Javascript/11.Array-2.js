const marvel_heros =["thor","Ironman","Spiderman"]
const dc_heroes = ["Superman","Flash","batman"]

marvel_heros.push(dc_heroes)

//marvel_heros.concat(dc_heroes)
//console.log(marvel_heros);

const all_new_heros = [...marvel_heros, ...dc_heroes]  
//console.log(all_new_heros);

// To Combine a String We Use a Spread Operator To Combine a String Spread Operator Symbol is .......//

const another_array = [1,2,3, [4,5,6] [6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1, score2,score3));