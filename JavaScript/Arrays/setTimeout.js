// settimeout  execute once after time delay

function abc() {
    console.log(`start`)
    setTimeout(function () {
        console.log(`log print after 5 second`)
    }, 5000);
    setTimeout(function () {
        console.log(`log print after 2 second`)
    }, 2000);
    setTimeout(function () {
        console.log(`log print after 4 second`)
    }, 4000);
    setTimeout(function () {
        console.log(`log print after 1 second`)
    }, 1000);
    console.log(`end`)
}
abc()