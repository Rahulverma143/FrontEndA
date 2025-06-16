// 10. Write a recursive function that calculates the factorial of a number.


function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5)); 


//  output is 120