// Write a recursive function to find the sum of the first N natural numbers.
// Example: sum(3) = 1 + 2 + 3 = 6

function sum(n) {
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1);
}
console.log(sum(10));