// Take an integer input from the user and use a loop to find the sum of its digits.
// Example: 123 → 1+2+3 = 6

function sumOfDigit(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
        console.log(sum);
    }
}
sumOfDigit(3);

