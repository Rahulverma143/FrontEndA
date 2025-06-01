let x = 16 + "Volvo";
console.log(x);  // When adding a number and a string, JavaScript will treat the number as a string.
// output 16Volvo

// -----------------------------------------------------

let y = "Volvo" + 16;
console.log(y); // When adding a string and a number, JavaScript will treat the number as a string.
// output Volvo16

// -------------------------------------------------------------------------
let z = 16 + 4 + "Volvo";
console.log(z);  // output 20Volvo

//----------------------------------------------------------------------------

let a = "Volvo" + 16 + 4;
console.log(a);  // output Volvo164

//--------------------------------------------------------------------------

let b;       // Now x is undefined
b = 5;       // Now x is a Number
b = "Rahul";  // Now x is a String
console.log(b); // output Rahul

// -----------------------------------------------------

//Strings are written with quotes. You can use single or double quotes:
// Using double quotes:
let carName1 = "Volvo XC60";
console.log(carName1);    // output Volvo XC60

// Using single quotes:
let carName2 = 'Volvo XC60';
console.log(carName2);   // output Volvo XC60