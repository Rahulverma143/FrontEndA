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

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7)); // true
