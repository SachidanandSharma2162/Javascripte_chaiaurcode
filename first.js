console.log("Hello");

// ------------------------------------------------Numbers-----------------------------------

const score=100
// console.log(score);

const num= new Number(100)
// console.log(num);


// console.log(num.toString().length);
// console.log(num.toFixed(2));

const yetanotherNumber=123
// console.log(yetanotherNumber.toPrecision(4));


const newNum=1000000
// console.log(newNum.toLocaleString());/*US Standard */
// console.log(newNum.toLocaleString('en-IN'));/*Indian Standard */

// ------------------------------------------------Maths-----------------------------------------

// console.log(Math.PI);
// console.log(Math.pow(2,3));
// console.log(Math.sqrt(16));
// console.log(Math.ceil(2.1));
// console.log(Math.floor(2.9));

const min=1
const max=6

console.log(Math.floor(Math.random()*(max-min+1))+min);