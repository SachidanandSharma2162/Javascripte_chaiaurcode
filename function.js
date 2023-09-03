// function in js

function add_two(a,b)//parameters/formal arguments
{
    let result=a+b
    return result
}
// console.log(add_two(3,4));//actual arguments


function remainder(a=num1,b=6){
    return a%b
}
// console.log((remainder(10,7)));

//rest operator
// ... is the rest operator which returns an array
function CartPrice(val1,val2,...price){
    return price
}
// console.log(CartPrice(200,222,345,654));


// passing object to a function

const user={
    username:"sachidanand",
    price:300
}
function PrintValues(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// PrintValues(user)
// PrintValues({
//     username:"Anand",
//     price:400
// })

// passing array to function

function arraypass(...nums){
    return nums
}
Myarray=arraypass(200,222,300,400)
// console.log(Myarray);
function ReturnSecond(myarray){
    return myarray[1];
}
secondelement=(ReturnSecond(Myarray))
// console.log(secondelement);


// Scope Global and Local


const a=100
if(true)
{
    const a=10//reassignment
}
// console.log(a);
var b=100
if(true)
{
    b=10//reassignment
}
// console.log(b);
let c=100
if(true){
    let c=10
}
// console.log(c);


// nested Scope

function one(){
    const username="rachit"
    function two(){
        const website="github"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()


// ..................intresting.....................

function addone(num){
    return num+1
}
// can be assessed before initialization
console.log(addone(6));

const addtwo=function(num2){
    return num2+2
}
// can not access before initialization
console.log(addtwo(7));
