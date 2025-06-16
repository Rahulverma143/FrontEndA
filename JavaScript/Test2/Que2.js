// 2 . setTimeout & setInterval:
// Explain the primary difference between setTimeout() and setInterval() in JavaScript. Provide a simple use case for each.


function abc() {
    setTimeout(function () {
        console.log(`log print after 1 second`)
    }, 1000);
     setInterval(function () {
        console.log(`log print after 2 second`)
    }, 2000);
    setTimeout(function () {
        console.log(`log print after 2 second`)
    }, 2000);
    setTimeout(function () {
        console.log(`log print after 3 second`)
    }, 3000);
    setTimeout(function () {
        console.log(`log print after 4 second`)
    }, 4000);
}
abc()
