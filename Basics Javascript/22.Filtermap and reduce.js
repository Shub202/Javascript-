//const programming = ["js", "rb", "py","java","cpp"]


//const values = coding.forEach( (item) => {
    //console.log(item);
    //return item
//})

//console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num > 4)   //num+10//
console.log(newNums);

const myNumerss = [1,2,3,4,5,6,7,8,9,10]
const nums = myNumerss
             .map((num) => num *10)
             .map((num) => num +1)
             .filter( (num) => num >=40)

 console.log(nums);            



 //*****************REDUCE**************//

 const number = [1,2,3]

 const myTotal = number.reduce(function (accumator,currentvalue){
    console.log(`accumator:${accumator} and curval:${currentvalue}`);      
    return accumator + currentvalue
 },0)
// const myTotal = number.reduce((accumator,currentvalue) => accumator+currentvalue,0) //Short trick
 console.log(myTotal);


 const ShoppingCart = [
    {
        itemname : "Js course",
        price: 2999
    },
    {
        itemname : "Python course",
        price: 999
    },
    {
        itemname : "C course",
        price: 1999
    },
    {
        itemname : "Mobile dev course",
        price: 5999
    },
 ]

 const PriceToPay = ShoppingCart.reduce((acc,item) => acc + item.price ,0)
 console.log(PriceToPay);