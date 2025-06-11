// setTimeout and setInterval mix 

function abc() {
  console.log(`start`)
  setTimeout(function () {
    console.log(`log print after 1 second`)
  }, 1000);
  setInterval(function () {
    console.log(`log print after 5 second`)
  }, 5000);
  setTimeout(function () {
    console.log(`log print after 4 second`)
  }, 4000);
  setTimeout(function () {
    console.log(`log print after 3 second`)
  }, 3000);
   setInterval(function () {
    console.log(`log print after 1 second`)
  }, 1000);
  console.log(`end`)
}
abc()