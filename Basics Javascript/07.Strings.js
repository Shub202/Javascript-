const name = "Shubham"
const repoCount ="50"

// console.log(name + repocount + "value");

console.log(`Hello my name is ${name} any repo count is ${repoCount}`);

const Gamename = new String(`hiteshhhc`)

console.log(Gamename[0]);
console.log(Gamename._proto_);

console.log(Gamename.length);
console.log(Gamename.toUpperCase());
console.log(Gamename.charAt(2));
console.log(Gamename.indexOf('t'));

const newstring =Gamename.substring(0,4)
console.log(newstring);

const anotherstring =Gamename.slice(-8,4)
console.log(anotherstring);

//trim or replace 
const newstringone ="   Ayush  Gaurav "
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://ram.com/ram%20lal"
console.log(url.replace('%20', '-'));

console.log(url.includes('ram'))

console.log(url.includes('carry'))


// String to Array
console.log(Gamename.split(','));
