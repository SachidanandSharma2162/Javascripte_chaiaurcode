// switch case statement
// const User_money=1000
// let ch=0
// switch (ch) {
//     case 1:
//         if(User_money>599)
//             console.log("Sold!");
//         break;
//     case 2:
//         if(User_money<599)
//         console.log("Not Sold!");
//         break;

//     default:
//         console.log("Not enough Money in wallet");
//         break;
// }




// Truthy and Falsy values

const UserEmail=""

if(function(){})
{
    console.log("Got it");
}
else{
    console.log("Email missing");
}

// Falsy values
// false,0,-0,BigInt 0n,"",null,undefined,NaN

// Truthy values
// true,1,"ahgdc",[],"0","false"," ",{},function(){}


const arr=[]

if(arr.length===0){
    // console.log("Array is empty");
}

const emptyobj={}
// check if object is empty
if (Object.keys(emptyobj).length===0) {
    // console.log("Object is empty");
}


// nullish coalescing operator(??)

let val1;
// val1=10??5
// val1=null??3
// val1=undefined??4
// val1=null??undefined
// val1=undefined??null
console.log(val1);


// Ternary operator(?:)
const a=9
const b=3
let c=a<b?2:6;
console.log((c));

