// push(): Adds an element to the end of the array. 

function abc(data) {

  console.log(data.push("a"))


}
const data = ["a", "b", "c", "d", "e", "f"]
abc(data)

// -----------------------------------
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(typeof fruits);  // object
console.log(fruits);
console.log(fruits.push("orange"));
console.log(fruits);

//  output
// 7
// object
// [ 'Banana', 'Orange', 'Apple', 'Mango' ]
// 5
// [ 'Banana', 'Orange', 'Apple', 'Mango', 'orange' ]