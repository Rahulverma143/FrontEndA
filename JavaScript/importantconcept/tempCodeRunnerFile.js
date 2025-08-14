// let x = "1";
// // let y = 320;
// // let z = a + b;
// // console.log(z);

// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }
// greet("Rahul", () => console.log("How are you?"));


// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Success!"), 1000);
// });
// promise.then(result => console.log(result));
// let intervalId = setInterval(() => {
//   console.log("Repeating...");
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log("Stopped interval");
// }, 5000);

// --------------------------

// let count = 5;
// let countdown = setInterval(() => {
//   console.log(count);
//   count--;
//   if (count < 0) {
//     clearInterval(countdown);
//     console.log("Time's up!");
//   }
// }, 1000);

// -----------------------------------------



//  function outer() {
//   let counter = 0;
//   return function inner() {
//     counter++;
//     return counter;
//   }
// }
// const count = outer();
// console.log(count()); // 1
// console.log(count()); // 2


// ----------------------------

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Done!"), 1000);
// });
// p.then(result => console.log(result));

// -------------------------------------


// function reverseString(str) {
//   let reversed = "";
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }
// console.log(reverseString("hello")); // "olleh"


// ----------------------------------------

// function isPrime(num) {
//   if (num <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }
// console.log(isPrime(7)); // true


// ----------------------------------

// function factorial(n) {
//   if (n === 0) return 1;
//   return n * factorial(n - 1);
// }
// console.log(factorial(5)); // 120


// -----------------------------------

// function findMax(arr) {
//   let max = arr[0];
//   for (let num of arr) {
//     if (num > max) max = num;
//   }
//   return max;
// }
// console.log(findMax([3, 8, 2, 9, 4])); // 9


// ----------------------------------------------

// function areAnagrams(str1, str2) {
//   const normalize = str => str.split("").sort().join("");
//   return normalize(str1) === normalize(str2);
// }
// console.log(areAnagrams("listen", "silent")); // true


// ----------------------------

// function secondLargest(arr) {
//   let unique = [...new Set(arr)];
//   unique.sort((a, b) => b - a);
//   return unique[1];
// }
// console.log(secondLargest([10, 20, 4, 45, 99])); // 45


// ---------------------------------------

// function charCount(str) {
//   let count = {};
//   for (let char of str) {
//     count[char] = (count[char] || 0) + 1;
//   }
//   return count;
// }
// console.log(charCount("programming"));
// // { p:1, r:2, o:1, g:2, a:1, m:2, i:1, n:1 }

// -------------------------------

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1,2,3,4,5]


// ---------------------------------

// arrow function 
 

// // 1. No parameters
// const greet = () => console.log("Hello!");
// greet();  // Hello!

// // 2. One parameter (no parentheses needed)
// const square = x => x * x;
// console.log(square(4)); // 16

// // 3. Multiple parameters
// const multiply = (a, b) => a * b;
// console.log(multiply(3, 5)); // 15

// // 4. With curly braces (requires return)
// const divide = (a, b) => {
//   return a / b;
// };


// -------------------------------------

// function isPrime(n) {
//   if (n <= 1) return false;

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// console.log(isPrime(7)); // true
// console.log(isPrime(10)); // false


// --------------------------------

// function countVowels(str) {
//   let count = 0;
//   const vowels = 'aeiouAEIOU';

//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowels("rahul verma")); // Output: 4


// ----------------------

// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// console.log(reverseString("hello")); // "olleh"


// ----------------------

// function isPalindrome(str) {
//   return str === str.split('').reverse().join('');
// }

// console.log(isPalindrome("madam")); // true

// --------------------


// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }


// ---------------------------

// function countVowels(str) {
//   let matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// }

// console.log(countVowels("javascript")); // 3


// --------------------------------


// const isEven = (num) => num % 2 === 0;

// console.log(isEven(4)); // true
// console.log(isEven(7)); // false


// -------------------------------------

// const nums = [1, 2, 3, 4, 5, 6];
// const evenNums = nums.filter(n => n % 2 === 0);

// console.log(evenNums); // [2, 4, 6]


// -------------------------

// const multiply = (a, b) => {
//   let result = a * b;
//   return result;
// };

// console.log(multiply(3, 4)); // 12


// ------------------------------------------

// function greet(name) {
//   return "Hello, " + name;
// }
// console.log(greet("Rahul"));


// -----------------------------------------

// function greetUser(name, callback) {
//   console.log("Hi " + name);
//   callback();
// }
// greetUser("Rahul", () => console.log("Welcome!"));


// ------------------------------------------


// 1. Check if a Number is Prime in JavaScript

// function isPrime(num) {
//     if (num <= 1) return false;

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// // Example usage:
// console.log(isPrime(7));  // true
// console.log(isPrime(10)); // false


// -------------------------------------

// Print All Prime Numbers from 1 to N

// const isPrime = (num) => {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// };

// console.log(isPrime(13)); // true


// --------------------------------

// Code to Check Niven Number

// function isNiven(num) {
//     let sum = 0;
//     let temp = num;

//     while (temp > 0) {
//         sum += temp % 10; // extract last digit and add
//         temp = Math.floor(temp / 10); // remove last digit
//     }

//     return num % sum === 0;
// }

// Example usage
// console.log(isNiven(18)); // true
// console.log(isNiven(23)); // false
// console.log(isNiven(21)); // true

// ------------------------------------

// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum += i;
// }
// console.log("Sum:", sum);


// ------------------------

// function greet(name) {
//   return "Hello, " + name;
// }

// console.log(greet("Rahul"));  // Hello, Rahul

// --------------------------------------

// let fruits = ["apple", "banana", "mango"];
// console.log(fruits[1]);  // banana


// -----------------------------

// const add = (a, b) => a + b;
// console.log(add(5, 3)); // 8

// ----------------------------------


// async function fetchData() {
//   try {
//     let data = await new Promise(resolve => setTimeout(() => resolve("Done!"), 2000));
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }
// fetchData();

// ------------------------------

// let fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 1000));
// let slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 3000));

// Promise.race([fast, slow])
//   .then(result => console.log(result)); // "Fast"


  // --------------------------------------------------------

//   async function example() {
//   let result = await Promise.resolve("Hello");
//   console.log(result); // Hello
// }
// example();

// // ----------------------------------
// // Works in top-level ES module
// let data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(res => res.json());
// console.log(data);


// --------------------------------------

// async function test() {
//   console.log("A");
//   await Promise.resolve();
//   console.log("B");
// }
// test();
// console.log("C");


// ---------------------------------------

// function count(a){
  
//   if(a===40)
//   return
//   console.log(a)
//   count(a+2)
// }
// count(2)

// ---------------------------

// function abc (a){
//   if(a>=40) return
//   console.log(a)
//   abc(a+2)
// }
// abc(1)


// -----------------------

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}
greet("Rahul", () => console.log("Welcome!"));
