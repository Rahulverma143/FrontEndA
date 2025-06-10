// sort(): Sorts the elements of an array.
function abc(data) {

    console.log(data.sort())
    console.log(data)


}
const data = ["a", "b", "c", "d", "f", "e"]
abc(data)

// ----------------------------------------------

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(typeof fruits);  // object
console.log(fruits);
console.log(fruits.sort());
console.log(fruits);


// output
// [ 'a', 'b', 'c', 'd', 'e', 'f' ]
// [ 'a', 'b', 'c', 'd', 'e', 'f' ]
// object
// [ 'Banana', 'Orange', 'Apple', 'Mango' ]
// [ 'Apple', 'Banana', 'Mango', 'Orange' ]
// [ 'Apple', 'Banana', 'Mango', 'Orange' ]