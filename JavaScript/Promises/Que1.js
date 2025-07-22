// What is a Promise in JavaScript?
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});
promise.then(result => console.log(result)); 

// "Done!" after 1 second
