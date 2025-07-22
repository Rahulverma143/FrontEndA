// How do you handle errors with async/await?
// Use try...catch.

async function example() {
  try {
    let data = await Promise.reject("Error occurred");
    console.log(data);
  } catch (error) {
    console.log(error); // "Error occurred"
  }
}
example();
