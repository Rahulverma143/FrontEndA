// 7. What will be the output of the following code?
let count = 0;
let intervalId = setInterval(() => {
  count++;
  console.log(count);
  if (count === 3) {
    clearInterval(intervalId);
  }
}, 1000);


// output 
// 1
// 2
// 3