
// Write a program using a loop to print all even numbers from 1 to 100.

function printEvenNumbers() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
printEvenNumbers();