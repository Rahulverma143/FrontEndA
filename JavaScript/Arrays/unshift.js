// unshift(): Adds an element to the beginning of the array.
function abc(data) {

    console.log(data.unshift("r"))
    console.log(data)


}
const data = ["a", "b", "c", "d", "e", "f"]
abc(data)


// ----------------------------------------------

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(typeof fruits);  // object
console.log(fruits);
console.log(fruits.unshift("rahul"));
console.log(fruits);


//  output
// 7
// [
//   'r', 'a', 'b',
//   'c', 'd', 'e',
//   'f'
// ]
// object
// [ 'Banana', 'Orange', 'Apple', 'Mango' ]
// 5
// [ 'rahul', 'Banana', 'Orange', 'Apple', 'Mango' ]