//Dates

let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toTimeString());
console.log(typeof mydate);

//let myCreatedDate = new Date(2024, 0,24)
//console.log(myCreatedDate.toDateString());

//let myCreatedDate = new Date(2024, 0,24 ,5, 4)
//console.log(myCreatedDate.toLocaleString());

//let myCreatedDate = new Date("2024-01-14")
let myCreatedDate = new Date("01-14-2023")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now
//console.log(myTimeStamp);
//console.log(myCreatedDate);
console.log(Math.floor(Date.now()/1000));

let newDate =new Date()
console.log(newDate);
console.log(newDate.getMonth() +1);
console.log(newDate.getDay());

// `$



