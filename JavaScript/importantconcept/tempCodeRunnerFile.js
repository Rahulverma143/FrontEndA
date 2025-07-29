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

function secondLargest(arr) {
  let unique = [...new Set(arr)];
  unique.sort((a, b) => b - a);
  return unique[1];
}
console.log(secondLargest([10, 20, 4, 45, 99])); // 45
