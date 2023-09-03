// this and arrow function in js

const user={
    username:"Aditya123",
    age:23,
    email:"aditya123@github.com",
    welcome:function()
    {
        console.log(`${this.username}, has logged in`);
        console.log(this);
    }
}

// console.log(user.welcome());
// Object.freeze(user)
// user.username="Sam123"
// console.log(user.welcome());

// console.log(this);//empty object

// this under function

function chai(){
    const username="sachin"
    console.log(this.username);
}
// chai()
const main_fun1=function(){
    //arrow function
    const username="rachit"
    console.log(this);
}
const main_fun=() => {
    //arrow function
    const username="rachit"
    console.log(this);
}
// main_fun()//empty object
// main_fun1()//object

//implicit return with parenthesis
const addtwo =(num1,num2) =>(num1+num2)
// console.log(addtwo(3,4));

const multwo =(num1,num2) =>
{
    //explicit return with curly 
    return num1*num2
}
// console.log(multwo(3,4));

const subtwo =(num1,num2) =>({username:"Aditya"})
//object can be returned using parenthesis
// console.log(subtwo(3,4));

 

