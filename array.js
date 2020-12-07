'use strict';

// Array 

// 1.Declaration
const arr1 =  new Array();
const arr2 = [1, 2];

// 2.Index Position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

console.clear();
// 3. Looping over an array
// print all fruies
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    
}

// b. for of 
for(let fruit of fruits) {
    console.log(fruits);
}

// c. forEach
fruits.forEach()