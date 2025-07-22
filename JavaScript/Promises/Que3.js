//  What is Promise.all()? 
// Promise.all() runs multiple promises in parallel and returns when all promises are fulfilled, or rejects if any promise fails.


Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).then(results => console.log(results)); // [1, 2, 3]
