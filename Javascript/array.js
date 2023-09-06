// ARRAY

// const array=[1,2,3,4,5]
// const heroes=["IronMan","Thor","BlackWidow"]

// console.log(heroes.length);

// array methods

// const newarray=[1,2,3]
// newarray.push(33)
// newarray.push([1,2,3])
// console.log(newarray);

// newarray.pop()
// console.log(newarray);

// const myarr=[1,2,3,4,5]
// false means 44 is not present in array
// console.log(myarr.includes(44));
// -1 means 66 is not present in array
// console.log(myarr.indexOf(66));


// const newarr=myarr.join('#')
// return a string

// console.log(newarr);
// console.log(myarr);


const arr1=[1,2,3,4,5,6]
const arr2=arr1.slice(1,3)
// console.log(arr1);
// console.log("array 2 ",arr2);
// slice just take values excluding the range

const arr3=arr1.splice(1,3)
// console.log("array 3",arr3);
// console.log(arr1);
// splice removes the elements at index(start,end) includng end from array


// array part 2
// array is an object of javascript


const marvel=["thor","ironman","spiderman"]
const dc=["flash","superman","batman"]
// const hero=marvel.concat(dc)
// concat merger two arrays
// marvel.push(dc)
// push pushes overall array at an index
// console.log(hero);
// console.log(marvel);

const all_new_heroes=[...marvel,...dc]
// console.log(all_new_heroes);



