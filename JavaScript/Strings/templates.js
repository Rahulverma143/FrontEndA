// literal templates string ka sath hum apne variables ko bhi likh skta hai
// A way to have embedded expression  in strings

let obj = {
    item : "pen",
    price: 10,
};
let output = `the cost of ${obj.item} is ${obj.price} rupees`
console.log(output);

//  also template literals 
let specialString = `this is a template literal ${1 + 2 + 3}`;
console.log(specialString);  
//  output
// this is a template literal 6

// escape character  
//  \n is the escape character jiska kam hota hai string ka ander next line print krna


console.log("Rahul verma"); // Rahul verma
console.log("Rahul  \n verma")  

// output
// Rahul
//  verma

console.log("Rahul \t verma");  // Rahul    verma tap space provide

let str = "Rakshit\tverma"
console.log(str. length);