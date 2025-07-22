// How do you chain promises?
// By returning another promise inside .then().

new Promise(resolve => resolve(2))
  .then(num => num * 2)
  .then(num => num + 1)
  .then(result => console.log(result)); // 5
