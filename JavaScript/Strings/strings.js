//  strings is a sequense of character used to represent text.

let str = "Rahulverma"; // we can write it like this 
// let str = `rahulverma`;  // and alse write this 
console.log(str.length); // 10
console.log(str[5],str[3]);  // v u



// -------------------------

// Template literals

let specialString = `this is a template literal`;
console.log(specialString); // this is a template literal
console.log(typeof specialString);  // string

// --------------------------------------------------

let obj = {
    item : "pen",
    price: 10,
};
console.log("the cost of", obj.item, "is", obj.price)  // the cost of pen is 10
console.log("the cost of", obj.item, "is", obj.price, "rupees");  // the cost of pen is 10 rupees
// difficult type of write this types 

// template literal is js 
// string ka sath hum apne variables ko bhi likh sakta hai 

let output = `the cost of ${obj.item} is ${obj.price} rupees`
console.log(output);  // the cost of pen is 10 rupees 

//  easy way to write this types of 