// higher order loops
// Array specific loops
// for of loop

const arr=[1,2,3,4,2]

// for (const i of arr) {
//     console.log(i);
// }

// on strings

const greeting="welcome to my world"

// for (const greet of greeting) {
//     if(greet==" ")
//         continue;
//     else 
//         console.log(greet);
// }


// Maps

const year=new Map()//Map constructor
year.set(1,"Jan")
year.set(2,"Feb")
year.set(3,"Mar")
year.set(4,"Apr")
year.set(5,"Jun")
for (const [yr,val] of year) {
    // console.log(yr,":-",val);
}

// Loops on object

const myobj={
    name:"Anand",
    age:34,
    mail:"anand@github.com",
    country:"India",
    language:"Javascript"
}
// forin loop is used to iterate objects
for (const key in myobj) {
    if (Object.hasOwnProperty.call(myobj, key)) {
        const element = myobj[key];
        // console.log(element,key);
    }
}


const student=['java','cpp','ruby','python']

for (const i in student) {
    if (Object.hasOwnProperty.call(student, i)) {
        const element = student[i];
        // console.log(element,i);
    }
}

// maps are not iteratable

// forof loops for arrays
// forin loops for objects

// foreach loop for arrays

const lang=['java','cpp','ruby','python']

// lang.forEach(element => {
//     console.log(element);
// });

// callback function do not have names
lang.forEach(function (item){
    // console.log(item);
});

// arrow function
const new_fun=(lang)=>{
    console.log((lang));
};
// new_fun(lang)

const language=['java','cpp','ruby','python']

language.forEach((item,index,arr)=>
{
    // console.log(item,index,arr);
});

// Object under arrays
const mycoding=[
    {
    name:'javascript',
    notation:'js'
    },
    {
    name:'python',
    notation:'py'
    },
    {
    name:'C++',
    notation:'cpp'
    },
]

mycoding.forEach(key=>{
// console.log(key);
});

// more about for each loops
// map and reduce

// foreach loop do not return any value

const digit=[1,2,3,4,5,6,7,8,9]
// const greater=digit.filter((key)=>(key>4))//implicit return 
// empty [] because {} require explicit return
const greater=digit.filter((key)=>{
    return key>4   //explicit return 
});
// console.log(greater);

// return using foreach
const result=[]
digit.forEach((key)=>{
    if(key>4){
        result.push(key)
    }
});
// console.log(result);

const books=[
    {
        title:'book1',
        price:1000,
        publish:1990
    },
    {
        title:'book2',
        price:500,
        publish:1999
    },
    {
        title:'book3',
        price:600,
        publish:1995
    },
]

// console.log(books);

const bookinfo=books.filter((key)=>{
    if (key.price>=300 || key.publish>=1995)
        return key.title
});
// console.log(bookinfo);









