// Object Singleton
// Object.create()


// Object literals

const newage=Symbol("Key1")//interview point of view
const myobj={
    name:"rachit",
    [newage]:"myage",
    age:24,
    email:"rachit@gmail.com",
}

// console.log(myobj.age);
// console.log(myobj["email"]);
// console.log(myobj[newage]);


myobj.email="sachin@chatgpt.com"

// freezing the value of an object
// Object.freeze(myobj)
myobj.email="sachin@microsoft.com"
// console.log(myobj);


// adding methos to object

myobj.greet=function()
{
    // console.log("Hello JS user");
}
// this keyword is used with object for accessing the values
myobj.greettwo=function()
{
    // console.log(`hello JS user, ${this.name}`);//string interpolation
}
// console.log(myobj.greet);


// Part 2
// decleration of object using constructor Singleton

// const facebook=new Object()  //SIngleton
const facebook={}  //Non Singleton
facebook.id="sam123"
facebook.name="Sam"
facebook.isLoggedIn=false
// object inside other object
facebook.Info={
    fname:"Sam",
    lname:"Rogers",
    age:32,
    email:"samrog@gmail.com"
}
// console.log(facebook);

const info=Object()
info.name="Adarsh"
info.age=10
info.isofficial=true
info.remain={
    fname:"Yash",
    lname:"Yadav",
    age:"25",
    main_info:{
        mname:"madhu",
        sname:"Rabi",
    }
}
// indent inside
// console.log(info.remain.main_info.mname);

// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);

// console.log(Object.keys(info));
// console.log(Object.keys(info.remain));
// console.log(Object.keys(info.remain.main_info));
// console.log(Object.values(info));
// console.log(Object.values(info.remain));
// console.log(Object.values(info.remain.main_info));

// console.log(Object.entries(info));   

// console.log(info.hasOwnProperty('isofficial'));//use to check whether a property exist or not


// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}
// const obj3={...obj1,...obj2}
// console.log(obj3);

//Object part 3

// destructuring

const student={
    name:"rajesh",
    age:10,
    addressofhouse:"malyalampur"
}
// console.log(student.addressofhouse);
// const {addressofhouse: aoh}=student
// console.log(aoh);


// API in javascript

// json format