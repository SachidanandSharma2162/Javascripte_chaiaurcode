const number=[1,2,3,4,5,6,7,8,9,10]
// const newarray=[]
// number.forEach((key)=>{
//     newarray.push(key+10)
// });
// console.log(newarray);

// const newnumber=number.filter((key)=>{
//     return key>7
// })
// console.log(newnumber);

// .map()
// return new array with operation
const NewNumber=number.map((num)=>{
    if (num>3)
       return num+10
    else
       return num
})
// console.log(NewNumber);  


// chainning
// map().map().filter().map()............any number of times

const newnumber=number
.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num>=30)
.map((num)=>num%10)
// console.log(newnumber);


// reduce()

const marks=[1,2,3,4,5]
// acc=acc+curr
// returns sum of all elements of

const inival=0
// arrow function for reduce
// const result=marks.reduce((acc,curr)=>acc+curr,inival)

const result=marks.reduce(function (acc,curr){
    return acc+curr
},inival);
// console.log(result);

const cart=[
    {
        name:'webdev',
        price:2000
    },
    {
        name:'mobile app dev',
        price:9000
    },
    {
        name:'python dev',
        price:3000
    }
]
const total=cart.reduce((acc,item)=>(acc+item.price),0)

// console.log(total);





