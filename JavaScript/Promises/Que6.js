// What is the difference between async/await and .then()?
// async/await is syntactic sugar over Promises, making asynchronous code look synchronous.

// .then() uses callback chaining.

async function fetchData() {
  let data = await Promise.resolve("Hello");
  console.log(data); // "Hello"
}
fetchData();
