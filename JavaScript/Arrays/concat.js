// concat(): Combines two or more arrays.

// Using + operator
let str11 = "Hello";
let str22 = "World";
let results = str11 + " " + str22; // result will be "Hello World"
console.log(results);

// Using template literals
let str1 = "Hello";
let str2 = "World";
let result = `${str1} ${str2}`; // result will be "Hello World"
console.log(result);
// Using spread syntax
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let resultss = [...arr1, ...arr2]; // result will be [1, 2, 3, 4, 5, 6]
console.log(resultss);


// output
// Hello World
// Hello World
// [ 1, 2, 3, 4, 5, 6 ]