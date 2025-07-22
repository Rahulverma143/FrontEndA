
// What is the difference between Promise.all() and Promise.race()?
// Promise.all() waits for all promises to settle.

// Promise.race() returns the result of the first promise that settles (fulfilled or rejected).

Promise.race([
  new Promise(resolve => setTimeout(() => resolve("First!"), 500)),
  new Promise(resolve => setTimeout(() => resolve("Second!"), 1000))
]).then(result => console.log(result)); // "First!"

