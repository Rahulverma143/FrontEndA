//  strings is a sequense of character used to represent text.

let str = "Rahulverma"; // we can write it like this 
// let str = `rahulverma`;  // and alse write this 
console.log(str.length); // 10
console.log(str[5],str[4]);  // v L



// -------------------------

// Template literals

let specialString = `this is a template literal`;
console.log(specialString);
console.log(typeof specialString);  // string

// --------------------------------------------------

let obj = {
    item : "pen",
    price: 10,
};
console.log("the cost of", obj.item, "is", obj.price)