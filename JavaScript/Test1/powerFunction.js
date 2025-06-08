// Write a recursive function to count the number of digits in a given number.
// Example: count(12345) → 5

function count(n) {
  if (n < 10) {
    return 1;
  } else {
    return 1 + count(Math.floor(n / 10));
  }
}
console.log(count(12345));