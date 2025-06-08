// Write a program to compute the factorial of a number using a loop.

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
const number = 8;
console.log(`The factorial of ${number} is:`, factorial(number));