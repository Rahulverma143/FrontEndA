// pop(): Removes the last element from the array.
function abc(data) {

    console.log(data.pop("d"));
    console.log(data);

}
const data = ["a", "b", "c", "d", "e", "f"]
abc(data)


//  ---------------------------------------------------
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.pop("Apple"));
console.log(fruits);


// output
// f
// [ 'a', 'b', 'c', 'd', 'e' ]
// Mango
// [ 'Banana', 'Orange', 'Apple' ]


