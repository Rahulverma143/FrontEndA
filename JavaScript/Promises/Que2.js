let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve("Success!");
  else reject("Error!");
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error));
