// 1 .
// Array Manipulation:
// Consider the array let fruits = ["apple", "banana", "cherry"];.
// Write the JavaScript code to perform the following operations in sequence:
// a. Add "grape" to the end of the array.
// b. Remove the first element from the array.
// c. Add "kiwi" to the beginning of the array.
// d. Remove the last element from the array.
// What will be the final state of the fruits array after these operations?

const fruits = ["Apple", "Banana", "cherry"];

console.log(fruits);
console.log(fruits.push("grapes"));
console.log(fruits);
console.log(fruits.shift());
console.log(fruits);
console.log(fruits.unshift("kiwi"));
console.log(fruits);
console.log(fruits.pop());
console.log(fruits);
