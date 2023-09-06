// if else statement

const score=200
// if(score>100){
//     console.log("Winner");
// }
// else{
// console.log("Looser");}

// if(score>100)
// {
//     // var user_score=500//var has totally global scope
//     let user_score=400
//     if(user_score>100)
//     {
//         console.log("Winner");
//         console.log(`User Score is: ${user_score}`);
//     }
// }


// NESTED COMPARISION
num=99
if(num>0)
{
    if(num%2==0){
        console.log(`${num}, is even integer`);
    }
    else if(num%2!=0){
        console.log(`${num}, is not even integer`);   
    }
}
else
{
    console.log(`${num}, is not a positive integer`);

}