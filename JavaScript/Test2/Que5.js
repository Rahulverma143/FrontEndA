// 5. What is the difference between push() and unshift() in JavaScript arrays? with example  



//  push() add element to the end of the array
//  unshift() add element to the beginning of the array

const fruits = ["Apple", "Banana", "cherry"];
console.log(fruits);
console.log(fruits.push("grapes"));
console.log(fruits);
console.log(fruits.unshift("kiwi"));
console.log(fruits);


// [ 'Apple', 'Banana', 'cherry' ]
// 4
// [ 'Apple', 'Banana', 'cherry', 'grapes' ]
// 5
// [ 'kiwi', 'Apple', 'Banana', 'cherry', 'grapes' ]