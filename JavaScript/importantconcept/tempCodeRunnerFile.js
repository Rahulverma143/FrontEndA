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

let count = 5;
let countdown = setInterval(() => {
  console.log(count);
  count--;
  if (count < 0) {
    clearInterval(countdown);
    console.log("Time's up!");
  }
}, 1000);

