// get user to input a number using prompt("Enter a number:"). check if the number is a multiple of 5 or not.


let num = prompt("enter a number:");

if (num % 5 === 0) {
    console.log(num, " is a multiple 5");
}
else {
    console.log(num, "is not a multiple of 5");
}