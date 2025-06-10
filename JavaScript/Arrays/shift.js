// shift 
function abc(data) {

    console.log(data.shift())
    console.log(data)

}
const data = ["a", "b", "c", "d", "e", "f"]
abc(data)

// ------------------------------------------------

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(typeof fruits);  // object
console.log(fruits);
console.log(fruits.shift());
console.log(fruits);

//  output
// a
// [ 'b', 'c', 'd', 'e', 'f' ]
// object
// [ 'Banana', 'Orange', 'Apple', 'Mango' ]
// Banana
// [ 'Orange', 'Apple', 'Mango' ]