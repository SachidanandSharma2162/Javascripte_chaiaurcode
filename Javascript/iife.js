// immediately invoked function expression

// to avoid global scope poluution we use IIFE
// iife requires a ; at the end


(function chai(){
    // normal function/named iife
    // console.log("Welcome!");
})();


(()=>{
    //arraow function
    // unnamed iife
    // console.log("WELCOME!");
})();


// passing variables
((name)=>{
    //arraow function
    // console.log(`hello! ${name}`);
})("Sachin");


const user={
    name:"ADITYA",
    age:23,
    email:"adityaverma@gmail.com",
    welcome:function yoo(){
        console.log(this.age);
    }
    // console.log(this);
}

// console.log(user.welcome());


let val1=10
let val2=5
// const addtwo=(num1,num2)=>(num1+num2);
function addtwo(num1,num2){
    return num1+num2
}
// console.log(addtwo(val1,val2));
// console.log(addtwo(5,2));

