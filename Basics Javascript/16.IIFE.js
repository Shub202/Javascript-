// Immediately Invoked Function Expressions (IIFE)//

(function coffee(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

(() => {
    console.log(`DB CONNECTED TWO`);
} )()