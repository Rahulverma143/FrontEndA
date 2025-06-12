// trim   str method
// let str = "     Rahul Verma from jammu  ";

// console.log(str.trim());
// console.log(str.trimEnd());
// console.log(str.trimStart());

// str.trim only removes whitespace from starting and ending
// str.trimEnd only removes end whitespace
// str.trimStart only removes starting whitespace

// str.slice(start,end?) end is not inclusive 

// let str = "012345678";
// console.log(str.slice(1,3)); // 12
// console.log(str.slice(1,5));  // 1234

let str = "RahulVerma";
console.log(str.slice()); // RahulVerma
console.log(str.slice(3)); //ulVerma
console.log(str.slice(0,3));  //Rah

// str1.concat(str2)  // joins str2 with str1

let str1 = "Rahul";
let str2 = "Verma";
let res = str1.concat(str2);
console.log(res); // RahulVrema 
// or
let ress = str2.concat(str1);
console.log(ress); // VremaRahul 
// or
let result = str1 + str2;
console.log(result);  // RahulVerma
// or
let results = "My name is " + str1 + str2;
console.log(results); // My name is Rahul Verma

// or 

let resultss = "hello" + 123;
console.log(resultss);  //hello123


//  str.replce(searchVal,newVal   )