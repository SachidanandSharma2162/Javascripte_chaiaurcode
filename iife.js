// immediately invoked function expression

// to avoid global scope poluution we use IIFE
// iife requires a ; at the end


(function chai(){
    // normal function/named iife
    console.log("Welcome!");
})();


(()=>{
    //arraow function
    // unnamed iife
    console.log("WELCOME!");
})();


// passing variables
((name)=>{
    //arraow function
    console.log(`hello! ${name}`);
})("Sachin");